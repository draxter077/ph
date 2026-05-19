import row from "./row/main.js"

export default function order(o){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-around;
            flex-wrap:wrap;
            font-size:16px;
            color:var(--colorWhite);
            padding:2px 5px;
            border-bottom:1px solid var(--colorWhite);
            width:100%;
        }`

    const order = cE("div",style)
    order.appendChild(row("120px",o.date))
    order.appendChild(row("300px",o.content))
    order.appendChild(row("120px",o.status))
    return(order)
}