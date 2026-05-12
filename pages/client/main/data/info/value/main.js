export default function value(v){
    let style = `
        {
            font-size:18px;
            color:var(--colorWhite);
            width:fit-content;
        }
        :responsive{
            font-size:14px;
        }`

    const value = cE("div",style)
    value.innerHTML = v
    return(value)
}