export default function title(){
    let style = `
        {
            font-size:26px;
            color:var(--colorWhite);
            margin:0px 0px 2.5% 0px;
        }`

    const title = cE("div",style)
    title.innerHTML = "Informações gerais"
    return(title)
}