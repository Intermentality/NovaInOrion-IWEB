import { useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'

// Custom shader material
const BackgroundMaterial = shaderMaterial(
  {
    iTime: 0,
    iResolution: new THREE.Vector2(),
  },
  /* glsl vertex */ `
    varying vec2 vUv; 
    void main()
    {
        vUv = uv;

        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0 );
        gl_Position = projectionMatrix * mvPosition;
    }
  `,
  /* glsl frag */ `
    // Star Nest by Pablo Roman Andrioli
    // License: MIT

    // https://www.shadertoy.com/view/XlfGRj

    uniform vec3      iResolution;           // viewport resolution (in pixels)
    uniform float     iTime;                 // shader playback time (in seconds)

    #define iterations 17
    #define formuparam 0.53

    #define volsteps 20
    #define stepsize 0.1

    #define zoom   0.800
    #define tile   0.850
    #define speed  0.010 

    #define brightness 0.0015
    #define darkmatter 0.300
    #define distfading 0.730
    #define saturation 0.850

    void main()
    {
      //get coords and direction
      vec2 uv=gl_FragCoord.xy/iResolution.xy-.5;
      uv.y*=iResolution.y/iResolution.x;
      vec3 dir=vec3(uv*zoom,1.);
      float time=iTime*speed+.25;

      //mouse rotation
      float a1=.5+iResolution.x*2.;
      float a2=.8+iResolution.y*2.;
      mat2 rot1=mat2(cos(a1),sin(a1),-sin(a1),cos(a1));
      mat2 rot2=mat2(cos(a2),sin(a2),-sin(a2),cos(a2));
      dir.xz*=rot1;
      dir.xy*=rot2;
      vec3 from=vec3(1.,.5,0.5);
      from+=vec3(time*2.,time,-2.);
      from.xz*=rot1;
      from.xy*=rot2;
      
      //volumetric rendering
      float s=0.1,fade=1.;
      vec3 v=vec3(0.);
      for (int r=0; r<volsteps; r++) {
        vec3 p=from+s*dir*.5;
        p = abs(vec3(tile)-mod(p,vec3(tile*2.))); // tiling fold
        float pa,a=pa=0.;
        for (int i=0; i<iterations; i++) { 
          p=abs(p)/dot(p,p)-formuparam; // the magic formula
          a+=abs(length(p)-pa); // absolute sum of average change
          pa=length(p);
        }
        float dm=max(0.,darkmatter-a*a*.001); //dark matter
        a*=a*a; // add contrast
        if (r>6) fade*=1.-dm; // dark matter, don't render near
        //v+=vec3(dm,dm*.5,0.);
        v+=fade;
        v+=vec3(s,s*s,s*s*s*s)*a*brightness*fade; // coloring based on distance
        fade*=distfading; // distance fading
        s+=stepsize;
      }
      v=mix(vec3(length(v)),v,saturation * 0.05); //color adjust
      gl_FragColor = vec4((v*.01) * 0.05,1.);	
      
    }
  `
)

function Scene() {
  const size = useThree((s) => s.size)
  const viewport = useThree((s) => s.viewport)

  const backgroundMaterial = useMemo(() => {
    return new BackgroundMaterial()
  }, [])

  useFrame((state) => {
    backgroundMaterial.uniforms.iTime.value = state.clock.elapsedTime/3
  })

  const scale = Math.max(viewport.width, viewport.height) / 2

  return (
    <mesh scale={[scale, scale, 1]}>
      <planeGeometry args={[2, 2]} />
      <primitive
        object={backgroundMaterial}
        iResolution={[size.width * viewport.dpr, size.height * viewport.dpr]}
      />
    </mesh>
  )
}

export default function Background() {
  return (
    <div className="-z-1 fixed top-0 left-0 w-full h-full">
      <Canvas
        gl={{
          antialias: true,
          powerPreference: 'high-performance',
          outputColorSpace: THREE.SRGBColorSpace,
          toneMapping: THREE.NoToneMapping
        }}>
        <Scene />
      </Canvas>
    </div>
  )
}
