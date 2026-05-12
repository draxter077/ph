export default function submit(){
    let style = `
        {
            width:100%;
            text-align:center;
            font-size:18px;
            background:var(--colorBlue);
            color:var(--colorWhite);
            font-weight:900;
            padding:10px 15px;
            border-radius:10px;
        }
        :responsive{
            font-size:16px;
        }`

    const submit = cE("div",style)
    submit.innerHTML = "Entrar"
    return(submit)
}