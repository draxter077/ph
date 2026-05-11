import title from "./title/main.js"
import instructions from "./instructions/main.js"

export default function outdoor(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:100%;
            height:100%;
            color:var(--colorWhite);
        }`

    const outdoor = cE("div",style)
    outdoor.appendChild(title())
    outdoor.appendChild(instructions())
    return(outdoor)
}