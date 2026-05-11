import title from "./title/main.js"
import description from "./description/main.js"
import items from "./items/main.js"
import price from "./price/main.js"

export default function plan(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            background:var(--colorBlue);
            box-shadow:0px 0px 3px 0px var(--colorBlue);
            padding:10px 15px;
            width:100%;
            transition:all 0.5s;
        }
        :responsive{
            width:100%;
            margin:10px 0px;
        }
        :hover{
            box-shadow:0px 0px 10px 0px var(--colorBlue);
        }`

    const plan = cE("div",style)
    plan.appendChild(title("Exatamente o que você precisa"))
    plan.appendChild(description("Focado em pequenas e médias empresas"))
    plan.appendChild(items([
                {img:"/assets/icons/domain.png",text:"Domínio .br"},
                {img:"/assets/icons/www.png",text:"Site profissional"},
                {img:"/assets/icons/email.png",text:"E-mail corporativo"},
                {img:"/assets/icons/refresh.png",text:"Atualizações ilimitadas"},
                {img:"/assets/icons/settings.png",text:"Suporte técnico 24/7"}
            ]))
    plan.appendChild(price("Mensal de R$ <span>259,99</span>"))
    return(plan)
}