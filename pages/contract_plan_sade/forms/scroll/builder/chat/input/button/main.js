import input from "./input/main.js"

export default function button(){
    let style = `
        {
            height:25px;
            width:25px;
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

    button.addEventListener(
        "click",
        async function a(e){
            button.disabled = true
            const v = e.target.parentElement.children[0].value
            const ifr = e.target.parentElement.parentElement.parentElement.children[0]
            const is = e.target.parentElement.parentElement.children[0]
            is.appendChild(input(v))
            ifr.srcdoc = `<div>${v}</div>`
            button.disabled = false
        }
    )
    return(button)
}