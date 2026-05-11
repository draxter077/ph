export default function input(t){
    let style = `
        {
            width:100%;
            background:var(--colorBlue);
            font-size:16px;
            font-weight:900;
            padding:5px 10px;
            border-radius:5px;
            color:var(--colorWhite);
            margin:5px 0px;
        }`

    const input = cE("div",style)
    input.innerHTML = t
    return(input)
}