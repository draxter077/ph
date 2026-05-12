import scroll from "./scroll/main.js"

export default function view(b){
    let style = `
        {
            width:30%;
            height:30%;
            background:var(--colorWhite);
            box-shadow:0px 0px 3px 0px var(--colorWhite);
            border-radius:10px;
            overflow:hidden;
        }`

    const view = cE("div",style)
    view.id = "windowView"
    view.appendChild(scroll(b))
    return(view)
}