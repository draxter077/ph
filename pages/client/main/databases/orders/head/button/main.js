export default function button(){
    let style = `
        {
            font-size:16px;
            background:var(--colorWhite);
            color:var(--colorBlack);
            padding:5px 10px;
            border-radius:5px;
            margin:0px 0px 0px 20px;
        }`

    const button = cE("div",style)
    button.innerHTML = "Novo"
    return(button)
}