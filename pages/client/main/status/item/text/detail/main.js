export default function detail(d){
    let style = `
        {
            font-size:16px;
            color:var(--colorWhite);
        }`

    const detail = cE("div",style)
    detail.innerHTML = d
    return(detail)
}