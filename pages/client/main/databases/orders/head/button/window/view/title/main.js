export default function title(){
    let style = `
        {
            font-size:22px;
            color:var(--colorBlack);
        }
        :responsive{
            font-size:18px;
        }`

    const title = cE("div",style)
    title.innerHTML = "Novo pedido"
    return(title)
}