export default function title(){
    let style = `
        {
            font-size:30px;
            color:var(--colorWhite);
        }
        :responsive{
            font-size:24px;
            text-align:center;
        }`

    const title = cE("div",style)
    title.innerHTML = "O que esperar do seu novo site?"
    return(title)
}