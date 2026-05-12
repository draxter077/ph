import copyright from "./copyright/main.js"

export default function foot(){
    let style = `
        {
            width:100%;
            height:fit-content;
            padding:1%;
        }`

    const foot = cE("div",style)
    foot.appendChild(copyright())
    return(foot)
}