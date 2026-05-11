export default function button(){
    let style = `
        {
            height:35px;
            width:35px;
            transform:translateX(0%) rotate(270deg);
            transition:all 0.5s;
            cursor:pointer;
        }
        :hover{
            transform:translateX(20%) rotate(270deg);
        }`

    const button = cE("img",style)
    button.src = "/assets/icons/arrow.png"
    button.alt = "Ícone de enviar"
    return(button)
}