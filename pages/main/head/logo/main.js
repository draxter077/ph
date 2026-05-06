export default function logo(){
    let style = `
        {
            height:60px;
            border:2px solid var(--colorWhite);
        }
        :responsive{
            height:70px;
            margin:2.5% 0px;
        }`

    const logo = cE("img",style)
    logo.src = "assets/logo.jpg"
    logo.alt = "Logotipo da nomeEmpresa"
    return(logo)
}