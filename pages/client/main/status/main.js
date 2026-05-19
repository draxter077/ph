import item from "./item/main.js"

export default function status(d){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            align-items:center;
            width:80%;
        }
        :responsive{
            flex-direction:column;
        }`

    const status = cE("div",style)
    status.appendChild(item("Domínio .br",d))
    status.appendChild(item("Site profissional",`https://www.${d}`))
    status.appendChild(item("E-mail corporativo",`@${d}`))
    return(status)
}