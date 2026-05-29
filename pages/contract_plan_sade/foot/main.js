import links from "./links/main.js"
import copyright from './copyright/main.js'
import resume from "./resume/main.js"

export default function foot(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-around;
            width:90%;
            padding:1% 0px;
        }
        :responsive{
            padding:2.5% 0px;
        }`

    const foot = cE("div",style)
    foot.appendChild(links())
    foot.appendChild(copyright())
    foot.appendChild(resume())
    return(foot)
}