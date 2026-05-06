import title from "./title/main.js"

export default function services(){
    let style = `
        {
            width:100%;
            height:75dvh;
            width:90%;
        }`

    const services = cE("div",style)
    services.id = "services"
    services.appendChild(title())
    return(services)
}