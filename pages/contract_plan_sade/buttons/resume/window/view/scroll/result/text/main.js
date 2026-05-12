export default function text(e,w){
    let style = `
        {
            font-size:18px;
            color:var(--colorBlack);
            text-align:center;
            width:fit-content;
            margin:10px 0px 0px 0px;
        }
        >span{
            background:var(--colorBlue);
            padding:5px 10px;
            color:var(--colorWhite);
            font-weight:900;
            border-radius:5px;
        }
        :responsive{
            font-size:16px;
            width:100%;
        }`

    const text = cE("div",style)
    text.innerHTML = `<span>Boas notícias: recebemos seu pedido!</span><br>E já começamos a trabalhar nele!<br><br>Enviamos um e-mail para ${e} com a confirmação<br>Aguarde nosso contato no WhatsApp ${w}<br><br>Agradecemos sua confiança!`
    return(text)
}