export default function price(p){
    let style = `
        {
            font-size:14px;
            color:var(--colorBlack);
            margin:10px 0px 0px 0px;
            padding:0px 10px;
            border-left:1px solid var(--colorBlack);
            border-right:1px solid var(--colorBlack);
        }
        >span{
            font-size:24px;
            margin:0px 0px 0px 5px;
        }`

    const price = cE("div",style)
    price.innerHTML = p
    return(price)
}