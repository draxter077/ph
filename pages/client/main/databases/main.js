import payments from "./payments/main.js"
import orders from "./orders/main.js"

export default function databases(d){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            width:90%;
            height:50%;
        }`

    const databases = cE("div",style)
    databases.appendChild(payments())
    databases.appendChild(orders())
    return(databases)
}