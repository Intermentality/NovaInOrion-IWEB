import { LinkNewWindow } from "@/Components/Link";
import { Paragraph } from "@/Components/Paragraph";

export default function Home(){
    return <div className="relative grid place-items-center">
        <article className="my-4 p-2 w-full max-w-sm md:max-w-2xl">
            <h1 className="text-5xl">Nova in Orion, 2019</h1>

            <h2>Overview</h2>
            <li>Used name for search: V2860 Ori.</li>
            <li>Discovered by: Shigehisa Fujikawa.</li>
            <li>Discovered at: Kanagawa/Japan.</li>
            <li>Classical He/N Nova in the Orion constellation.</li>

            <h2>When and how was it found?</h2>
            <Paragraph>
                It was discovered in 2018-08-07, 
                but it was verified on 2019-08-14 
                with a 4.1m SOAR telescope + 
                Goodman spectrograph. 
            </Paragraph>
            <LinkNewWindow href="https://ui.adsabs.harvard.edu/abs/2019ATel13029....1S/abstract">Source: Harvard.edu</LinkNewWindow>

            <h2>What's a spectrograph?</h2>
            <Paragraph>
                A spectrograph is a tool used to determine what 
                materials make up stars, nebulas, galaxies, 
                and planets. 
            </Paragraph>
            <LinkNewWindow href="https://esawebb.org/wordbank/spectrograph-spectroscopy/#:~:text=Spectroscopy%20is%20a%20fundamental%20tool,and%20the%20atmospheres%20of%20planets">Source: Esawebb.org</LinkNewWindow>

            <h2>What does He/N mean?</h2>
            <Paragraph>
                He/N is a novae that originates from gas that's ejected 
                from a white dwarf. 
                "He" means helium and "N" means nitrogen.
            </Paragraph>
            <LinkNewWindow 
                href="https://arxiv.org/pdf/1208.0380#:~:text=The%20two%20novae%20spectral%20classes,ejection%20from%20the%20white%20dwarf"
            >Source: Arxiv.org</LinkNewWindow>

            <h2>Other names of V2860 Ori.</h2>
            <table>
                <tr>
                    <td>GSC2.3 N80U009326</td>
                    <td>Gaia19dqk</td>
                    <td>IPHAS J060957.45+121225.2</td>
                </tr>
                <tr>
                    <td>N Ori 2019</td>
                    <td>Nova Ori 2019</td>
                    <td>Nova Orionis 2019</td>
                </tr>
                <tr>
                    <td>PNV J06095740+1212255</td>
                    <td>PSO J060957.447+121225.170</td>
                    <td>USNO-A2.0 0975-02661189</td>
                </tr>
                <tr>
                    <td>USNO-B1.0 1022-0102056</td>
                    <td>WISE J060957.44+121224.9</td>
                    <td>WISEA J060957.45+121224.9</td>
                </tr>
                <tr>
                    <td>ZTF19aabjxpe</td>
                </tr>
            </table>
            <LinkNewWindow href="https://www.aavso.org/vsx/index.php?view=detail.top&oid=844415">Source: Aavso.org</LinkNewWindow>
        </article>
    </div>
}