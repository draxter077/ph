import order from "./order/main.js"

export default function content(os){
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
    content.id = "contentOrders"
    for(let i = 0; i < os.length; i++){
        content.appendChild(order(os[i]))
    }
    return(content)
}