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
    instructions.innerHTML = "Estamos prontos para iniciar o seu pedido do Plano Completo!<br>Este formulário é rápido e dividido em duas etapas:<br><br>Primeiro, você nos conta os objetivos da sua empresa. Em seguida, nosso sistema vai sugerir um rascunho inicial de design para o seu site. Ao lado dele, você terá um campo livre para nos dizer o que gostou, o que faltou e quais alterações deseja.<br><br>Fique tranquilo: este rascunho não é o visual definitivo.<br>Após a confirmação, nossa equipe entrará em contato via WhatsApp para finalizar e detalhar tudo com você.<br><br><span>Vamos começar?</span>"
    return(instructions)
}