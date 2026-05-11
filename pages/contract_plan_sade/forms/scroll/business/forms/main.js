import question from "./question/main.js"

export default function forms(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            flex-wrap:wrap;
            width:100%;
        }`

    const forms = cE("div",style)
    const qs = [
        {title:"Nome do responsável pela empresa",placeholder:""},
        {title:"Nome da empresa",placeholder:""},
        {title:"CNPJ da empresa",placeholder:"12.345.678/1234-56"},
        {title:"Público-alvo pretendido",placeholder:"Homens, mulheres..."},
        {title:"Objetivos com o site",placeholder:"Gerar leads, aumentar visibilidade..."},
        {title:"Nomes de domínios pretendidos",placeholder:"dominio.com.br..."},
        {title:"Usuários de e-mail pretendidos",placeholder:"usuario@dominio.com.br..."}
    ]

    for(let i = 0; i < qs.length; i++){forms.appendChild(question(qs[i]))}
    return(forms)
}