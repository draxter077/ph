import scroll from "./scroll/main.js"

export default function roller(){
    let style = `
        {
            height:100%;
            width:fit-content;
            overflow:hidden;
        }`

    const roller = cE("div",style)
    roller.appendChild(scroll())
    return(roller)
}