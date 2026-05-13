import text from './text/main.js'
import roller from './roller/main.js'

export default function services(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:flex-start;
            height:25px;
            font-size:18px;
            margin:40px 0px 0px 0px;
            padding:0px 15px;
            border-left:1px solid var(--colorBlue);
            border-right:1px solid var(--colorBlue);
        }
        :responsive{
            margin:30px 0px 0px 0px;
        }`

    const services = cE("div",style)
    services.appendChild(text())
    services.appendChild(roller())
    return(services)
}