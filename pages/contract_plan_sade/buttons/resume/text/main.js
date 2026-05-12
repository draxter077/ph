export default function text(){
    let style = `
        {
            font-size:21px;
            font-weight:900;
            color:var(--colorWhite);
        }
        :responsive{
            font-size:18px;
        }`

    const text = cE("div",style)
    text.innerHTML = "Começar"
    return(text)
}