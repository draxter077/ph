import iframe from "./iframe/main.js"
import chat from "./chat/main.js"

export default function builder(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            width:100%;
            height:100%;
        }`

    const builder = cE("div",style)
    builder.appendChild(iframe())
    builder.appendChild(chat())
    return(builder)
}