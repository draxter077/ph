import question from "./question/main.js"

export default function questions(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:flex-start;
            justify-content:space-between;
            flex-wrap:wrap;
            width:100%;
            margin:2.5% 0px 0px 0px;
        }`

    const questions = cE("div",style)
    let qs = [
        {question:"Quanto tempo leva para criar meu site?",answer:"Sites do Plano Completo levam até 10 dias úteis<br>Já os demais planos têm tempo de entrega em até 30 dias úteis"},
        {question:"O site terá integração com redes sociais e WhatsApp?",answer:"Sim. Incluímos botões flutuantes para contacto direto via WhatsApp, links para suas redes sociais e, se desejar, podemos configurar a exibição automática das suas últimas publicações do Instagram diretamente no site, aumentando o engajamento entre as plataformas"},
        {question:"É possível criar um blog dentro do meu site institucional?",answer:"Sim, e nós recomendamos muito! Um blog é uma ferramenta poderosa de marketing de conteúdo que ajuda a atrair visitantes através do Google. O sistema de blog já vem integrado e configurado para que você possa publicar seus artigos de forma simples e organizada"},
        {question:"Vocês instalam ferramentas de análise de dados (como o Google Analytics)?",answer:"Sim. Configuramos as principais ferramentas de rastreio, como Google Analytics e Google Search Console. Com elas, você poderá acompanhar quantos visitantes o site recebe, de onde eles vêm e quais páginas são as mais acessadas, permitindo decisões baseadas em dados reais"},
        {question:"Qual o diferencial de contratar uma agência em vez de usar criadores de sites gratuitos?",answer:"Criadores gratuitos oferecem soluções genéricas, limitadas em SEO e que muitas vezes não pertencem a você. Ao contratar nossa agência, você tem um projeto estratégico, código otimizado, design profissional e, principalmente, a propriedade total dos arquivos do seu site, além do suporte especializado de quem entende de conversão digital"}
    ]

    for(let i = 0; i < qs.length; i++){
        questions.appendChild(question(qs[i]))
    }
    return(questions)
}