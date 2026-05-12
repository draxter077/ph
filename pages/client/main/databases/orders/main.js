import head from "./head/main.js"

export default function orders(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:48%;
            height:100%;
            background:var(--colorDarkerBlue);
            padding:10px 15px;
            box-shadow:0px 0px 3px 0px var(--colorBlue);
            border-radius:10px;
        }`

    const orders = cE("div",style)
    orders.appendChild(head())
    return(orders)
}