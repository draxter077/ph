import row from "./row/main.js"

export default function order(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-between;
            font-size:18px;
            color:var(--colorWhite);
            padding:2px 5px;
            border-bottom:1px solid var(--colorWhite);
            cursor:pointer;
            transition:background 0.5s;
        }
        :hover{
            background:var(--colorBlue);
        }
        :responsive{
            width:150%;
            font-size:16px;
        }`

    const order = cE("div",style)
    order.appendChild(row("20%","00/00/0000"))
    order.appendChild(row("50%","Pedido de adição"))
    order.appendChild(row("30%","Completo"))
    return(order)
}