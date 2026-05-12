export default function text(){
    let style = `
        {
            font-size:21px;
            font-weight:900;
            color:var(--colorWhite);
        }`

    const text = cE("div",style)
    text.innerHTML = "Começar"
    return(text)
}