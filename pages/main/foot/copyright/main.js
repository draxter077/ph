export default function copyright(){
    let style = `
        {
            font-size:15px;
            color:var(--colorWhite);
            padding:15px;
        }`

    const copyright = cE("div",style)
    copyright.innerHTML = `Ph Web Software © ${new Date().getFullYear()} Todos os direitos reservados`
    return(copyright)
}