import back from "./back/main.js"
import resume from "./resume/main.js"

export default function buttons(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-around;
            width:90%;
        }`

    const buttons = cE("div",style)
    buttons.appendChild(back())
    buttons.appendChild(resume())
    return(buttons)
}