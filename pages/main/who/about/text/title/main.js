export default function title(){
    let style = `
        {
            font-size:32px;
            color:var(--colorWhite);
            background:var(--colorBlue);
            padding:5px 10px;
        }
        :responsive{
            font-size:26px;
            text-align:center;
        }`

    const title = cE("div",style)
    title.innerHTML = `Somos especialistas em desenvolvimento web`
    return(title)
}