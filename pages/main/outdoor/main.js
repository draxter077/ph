import slogan from "./slogan/main.js"

export default function outdoor(){
    let style = `
        {
            position:relative;
            display:flex;
            flex-direction:column;
            align-items:center;
            width:90%;
            background:var(--colorWhite);
            text-align:center;
            padding:5% 0px;
        }`

    const outdoor = cE("div",style)
    outdoor.appendChild(slogan())
    return(outdoor)
}