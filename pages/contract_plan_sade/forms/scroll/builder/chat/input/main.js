import text from "./text/main.js"
import button from "./button/main.js"

export default function input(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-between;
            width:100%;
            padding:5px 10px;
            background:var(--colorWhite);
        }`

    const input = cE("div",style)
    input.appendChild(text())
    input.appendChild(button())
    return(input)
}