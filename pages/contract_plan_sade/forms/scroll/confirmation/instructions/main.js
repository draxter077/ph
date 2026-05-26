export default function instructions(){
    let style = `
        {
            font-size:16px;
            text-align:justify;
            margin:2.5% 0px 0px 0px;
        }
        >span{
            border-bottom:1px solid var(--colorBlue);
        }`

    const instructions = cE("div",style)
    instructions.innerHTML = "Agora é só clicar em confirmar.<br><br>Nossos designers vão analisar suas observações e lapidar o projeto. Quando o design definitivo estiver pronto, entraremos em contato pelo e-mail <span>EMAIL</span> e pelo WhatsApp <span>WHATSAPP</span> para te apresentar o resultado e definirmos juntos os detalhes do seu domínio .com.br e e-mails corporativos.<br><br><span>Sua ideia está se tornando realidade!</span>"
    return(instructions)
}