import info from "./info/main.js"

export default function data(u){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:center;
            align-items:center;
            width:90%;
            overflow:scroll;
        }
        :responsive{
            width:95%;
            margin:5% 0px 0px 0px;
            justify-content:flex-start;
        }`

    const data = cE("div",style)
    data.appendChild(info("Nome",u.name))
    data.appendChild(info("CNPJ",u.cnpj))
    data.appendChild(info("E-mail",`${u.email} | contato@${u.domain}`))
    data.appendChild(info("WhatsApp",u.whatsapp))
    return(data)
}