export default function text(){
    let style = `
        {
            font-size:24px;
            color:var(--colorWhite);
        }
        :responsive{
            font-size:20px;
        }`

    const text = cE("div",style)
    text.innerHTML = "Sua solução está aqui"
    return(text)
}