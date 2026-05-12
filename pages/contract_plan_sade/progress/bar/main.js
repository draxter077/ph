import percentage from "./percentage/main.js"

export default function bar(){
    let style = `
        {
            width:90%;
            height:10px;
            border-radius:5px;
            background:var(--colorWhite);
            overflow:hidden;
        }
        :responsive{
            height:5px;    
        }`

    const bar = cE("div",style)
    bar.appendChild(percentage())
    return(bar)
}