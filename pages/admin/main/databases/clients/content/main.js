import client from "./client/main.js"

export default function content(cs){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:100%;
            height:100%;
            overflow:scroll;
            white-space:nowrap;
        }`

    const content = cE("div",style)
    content.id = "contentClients"
    for(let i = 0; i < cs.length; i++){
        content.appendChild(client(cs[i]))
    }
    return(content)
}