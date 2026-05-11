export default function instructions(){
    let style = `
        {
            font-size:26px;
            text-align:justify;
            margin:2.5% 0px 0px 0px;
        }`

    const instructions = cE("div",style)
    instructions.innerHTML = "Bem vindo<br>instruções gerais<br>você será contatado via whatsapp para confirmação final e envio do pagamento<br>melhor fazer pelo computador"
    return(instructions)
}