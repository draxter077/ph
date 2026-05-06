export default function title(){
    let style = `
        {
            font-size:30px;
            color:var(--colorBlack);
        }`

    const title = cE("div",style)
    title.innerHTML = "Não importa o tamanho da sua ideia...<br>Temos o que você precisa"
    return(title)
}