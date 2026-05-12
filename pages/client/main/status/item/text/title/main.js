export default function title(t){
    let style = `
        {
            font-size:21px;
            color:var(--colorWhite);
        }
        :responsive{
            font-size:16px;
        }`

    const title = cE("div",style)
    title.innerHTML = t
    return(title)
}