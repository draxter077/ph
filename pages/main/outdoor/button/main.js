import img from "./img/main.js"
import text from "./text/main.js"

export default function button(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            background:var(--colorBlue);
            box-shadow:0px 0px 5px 0px var(--colorBlue);
            border-radius:50px;
            margin:7.5% 0px 0px 0px;
            padding:15px 10%;
            transition:all 0.5s;
        }
        :hover{
            background:var(--colorGreenWhatsApp);
            box-shadow:0px 0px 5px 0px var(--colorGreenWhatsApp);
        }
        :responsive{
            justify-content:center;
            width:80%;
        }`

    const button = cE("a",style)
    button.href = whatsapp_url
    button.target = "_blank"
    button.appendChild(img())
    button.appendChild(text())
    return(button)
}