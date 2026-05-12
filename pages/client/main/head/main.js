import logo from "./logo/main.js"

export default function head(){
    let style = `
        {
            position:sticky;
            top:0%;
            z-index:5;
            
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-around;
            width:100%;
            padding:10px 15px;
        }
        :responsive{
            flex-direction:column;
            padding:10px 15px 15px;
        }`

    const head = cE("div",style)
    head.appendChild(logo())
    return(head)
}