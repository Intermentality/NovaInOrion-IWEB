import { LinkNewWindow } from "@/Components/Link";

import OrionStarChart from "@/assets/OrionStarChart.png"
import YoshimotoJPG from "@/assets/Yoshimoto.jpg"

import v2860ori_Square from "@/assets/v2860ori_20241213_005111_0_geqnhn_l.png"
import v286ori_Wide from "@/assets/v2860ori_20241213_005117_0_vwmzcp_l.png"
import ShaderBackend from "./ShaderBackend.tsx";

export default function ShaderShow(){
    return <div className="relative grid place-items-center">
        <article className="my-4 p-2 w-full max-w-sm md:max-w-2xl">
            <h1 className="text-5xl">Shader</h1>
            <ShaderBackend />

            <h2>Reference Photos</h2>
            <div className="mt-4 grid gap-2 grid-cols-1 md:grid-cols-2 mb-2">
                <img src={YoshimotoJPG} />
                <img src={OrionStarChart} />
            </div>
            <LinkNewWindow href="https://www.astroarts.co.jp/article/hl/a/10795_nova_ori">Source by: 吉本勝己さん.</LinkNewWindow>

            <h2>Slooh Photos [2024]</h2>
            <div className="mt-4 grid gap-2 grid-cols-1 md:grid-cols-2 mb-2">
                <img src={v2860ori_Square} />
                <img src={v286ori_Wide} />
            </div>
        </article>
    </div>
}