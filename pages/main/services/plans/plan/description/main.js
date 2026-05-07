export default function description(d){
    let style = `
        {
            font-size:16px;
            color:var(--colorBlack);
            line-height:1.0;
        }`

    const description = cE("div",style)
    description.innerHTML = d
    return(description)
}