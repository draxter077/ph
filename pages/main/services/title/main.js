export default function title(){
    let style = `
        {
            font-size:30px;
            color:var(--colorBlack);
            text-align:right;
            width:100%;
        }
        >span{
            background:var(--colorBlue);
            padding:0px 5px;
            color:var(--colorWhite);
        }
        :responsive{
            font-size:24px;
            text-align:center;
        }`

    const title = cE("div",style)
    title.innerHTML = "Não importa o tamanho da sua necessidade...<br><span>Temos o que você precisa</span>"
    return(title)
}