import row from "./row/main.js"

export default function payment(){
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

    const payment = cE("div",style)
    payment.appendChild(row("20%","00/00/0000"))
    payment.appendChild(row("50%","Mensalidade Plano completo"))
    payment.appendChild(row("15%","R$ 259,99"))
    payment.appendChild(row("15%","Aprovado"))
    return(payment)
}