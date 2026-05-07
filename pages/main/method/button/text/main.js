export default function text(){
    let style = `
        {
            font-size:24px;
            color:var(--colorWhite);
        }
        :responsive{
            font-size:21px;
        }`

    const text = cE("div",style)
    text.innerHTML = "Não perca tempo"
    return(text)
}