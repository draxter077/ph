export default function text(){
    let style = `
        {
            font-size:24px;
            color:var(--colorBlack);
        }
        :responsive{
            font-size:20px;
        }`

    const text = cE("div",style)
    text.innerHTML = "Dê o próximo passo"
    return(text)
}