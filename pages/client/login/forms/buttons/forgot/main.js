export default function forgot(){
    let style = `
        {
            font-size:16px;
            color:var(--colorWhite);
            margin:10px 0px 0px 0px;
        }
        :responsive{
            font-size:14px;
        }`

    const forgot = cE("div",style)
    forgot.innerHTML = "Esqueci a senha"
    return(forgot)
}