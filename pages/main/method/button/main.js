import img from "./img/main.js"
import text from "./text/main.js"

export default function button(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            background:var(--colorGreenWhatsApp);
            box-shadow:0px 0px 3px 0px var(--colorGreenWhatsApp);
            border-radius:50px;
            margin:5% 0px 0px 0px;
            padding:15px 10%;
            transition:all 0.5s;
        }
        :hover{
            transform:scale(1.05);
        }`

    const button = cE("a",style)
    button.href = whatsapp_url
    button.target = "_blank"
    button.appendChild(img())
    button.appendChild(text())
    return(button)
}