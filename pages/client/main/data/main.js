import info from "./info/main.js"

export default function data(d){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            align-items:center;
            flex-wrap:nowrap
            width:90%;
        }`

    const data = cE("div",style)
    data.appendChild(info("Nome","Teste Teste LTDA"))
    data.appendChild(info("CNPJ","12.345.678/0001-12"))
    data.appendChild(info("E-mail","teste@gmail.com | contato@domain.com.br"))
    data.appendChild(info("WhatsApp","(00) 90000-0000"))
    return(data)
}