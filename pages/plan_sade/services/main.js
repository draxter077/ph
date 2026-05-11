import plan from "./plan/main.js"
import button from "./button/main.js"

export default function services(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
        }`

    const services = cE("div",style)
    services.id = "services"
    services.appendChild(plan())
    services.appendChild(button())
    return(services)
}