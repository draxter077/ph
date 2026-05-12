export default function title(){
    let style = `
        {
            font-size:32px;
            color:var(--colorWhite);
        }
        :responsive{
            font-size:21px;
        }`

    const title = cE("div",style)
    title.innerHTML = "Informações gerais"
    return(title)
}