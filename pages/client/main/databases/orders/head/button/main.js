export default function button(){
    let style = `
        {
            font-size:16px;
            font-weight:900;
            background:var(--colorWhite);
            color:var(--colorBlack);
            padding:5px 10px;
            border-radius:5px;
            margin:0px 0px 0px 20px;
            cursor:pointer;
            transition:all 0.5s;
        }
        :hover{
            background:var(--colorBlue);
            color:var(--colorWhite);
        }
        :responsive{
            font-size:14px;
        }`

    const button = cE("div",style)
    button.innerHTML = "Novo"
    return(button)
}