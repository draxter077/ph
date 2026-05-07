export default function description(d){
    let style = `
        {
            font-size:18px;
            margin:10px 0px 0px 0px;
            color:var(--colorWhite);
            padding:0px 0px 0px 5%;
        }
        :responsive{
            font-size:16px;
        }`

    const description = cE("div",style)
    description.innerHTML = d
    return(description)
}