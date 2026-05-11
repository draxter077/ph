import inputs from "./inputs/main.js"
import input from "./input/main.js"

export default function chat(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            height:100%;
            width:33%;
            margin:0px 0px 0px 5px;
        }`

    const chat = cE("div",style)
    chat.appendChild(inputs())
    chat.appendChild(input())
    return(chat)
}