export default function img(){
    let style = `
        {
            height:20px;
            width:20px;
            background:var(--colorWhite);
            margin:0px 0px 0px 5px;
            transform:rotate(270deg);
        }`

    const img = cE("img",style)
    img.src = "/assets/icons/arrow.png"
    img.alt = "Ícone de continuar"
    return(img)
}