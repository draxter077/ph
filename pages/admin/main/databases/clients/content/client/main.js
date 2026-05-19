import row from "./row/main.js"

export default function client(c){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-around;
            flex-wrap:wrap;
            font-size:16px;
            color:var(--colorWhite);
            padding:2px 5px;
            border-bottom:1px solid var(--colorWhite);
            width:100%;
        }`

    const client = cE("div",style)
    client.appendChild(row("80px",c.id))
    client.appendChild(row("250px",c.name))
    client.appendChild(row("200px",c.cnpj))
    client.appendChild(row("200px",c.email))
    client.appendChild(row("180px",c.whatsapp))
    client.appendChild(row("200px",c.domain))
    return(client)
}