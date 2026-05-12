export default function value(v){
    let style = `
        {
            font-size:18px;
            color:var(--colorWhite);
        }`

    const value = cE("div",style)
    value.innerHTML = v
    return(value)
}