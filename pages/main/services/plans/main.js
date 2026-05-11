import plan from "./plan/main.js"

export default function plans(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:flex-start;
            width:100%;
            justify-content:space-around;
            margin:2.5% 0px 0px 0px;
        }
        :responsive{
            flex-direction:column;
            align-items:center;
        }`

    const plans = cE("div",style)
    const SD = {
        "@context":"https://schema.org",
        "@type":"Service",
        "serviceType":"Desenvolvimento de websites profissionais e ferramentas de gestão",
        "provider":{
            "@type":"Organization",
            "name":"Ph Web Software"
        },
        "description":"Soluções para empresas",
        "hasOfferCatalog":{
            "@type":"OfferCatalog",
            "name":"Planos",
            "itemListElement":[
                {
                    "@type":"Offer",
                    "itemOffered":{
                        "@type":"SoftwareApplication",
                        "name":"Plano Completo",
                        "description":"Domínio .br, site profissional, e-mail corporativo, atualizações ilimitadas, suporte disponível 24/7. Valor mensal"
                    },
                    "price":"259.99",
                    "priceCurrency":"BRL"
                },
                {
                    "@type":"Offer",
                    "itemOffered":{
                        "@type":"SoftwareApplication",
                        "name":"Site avulso",
                        "description":"Domínio .br por um ano, site profissional, até três atualizações. A partir de 1599,99"
                    },
                    "price":"1599.99",
                    "priceCurrency":"BRL"
                },
                {
                    "@type":"Offer",
                    "itemOffered":{
                        "@type":"SoftwareApplication",
                        "name":"Soluções corporativas",
                        "description":"Desenvolvemos softwares empresariais do tipo CRM, ERP, e-commerce, BI, SAE, SAD, SIE, SCM, entre outros. Entre em contato para orçamento"
                    },
                    "price":"5000.00",
                    "priceCurrency":"BRL"
                }
            ]
        }
    }
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(SD)
    document.head.appendChild(script)

    plans.appendChild(plan(
        {
            title:"Plano Completo",
            description:"Focado em pequenas e médias empresas",
            items:[
                {img:"/assets/icons/domain.png",text:"Domínio .br"},
                {img:"/assets/icons/www.png",text:"Site profissional"},
                {img:"/assets/icons/email.png",text:"E-mail corporativo"},
                {img:"/assets/icons/refresh.png",text:"Atualizações ilimitadas"},
                {img:"/assets/icons/settings.png",text:"Suporte disponível 24/7"}
            ],
            price:"Mensal de R$ <span>259,99</span>"
        }
    ))
    plans.appendChild(plan(
        {
            title:"Site avulso",
            description:"Ideal para um projeto pessoal",
            items:[
                {img:"/assets/icons/domain.png",text:"Domínio .br por 1 ano"},
                {img:"/assets/icons/www.png",text:"Site profissional"},
                {img:"/assets/icons/refresh.png",text:"Até 3 atualizações"}
            ],
            price:"A partir de R$ <span>1.599,99</span>"
        }
    ))
    plans.appendChild(plan(
        {
            title:"Soluções corporativas",
            description:"Para necessidades robustas",
            items:[
                {img:"/assets/icons/www.png",text:"Desenvolvemos softwares empresariais do tipo CRM, ERP, e-commerce, BI, SAE, SAD, SIE, SCM, entre outros"},
            ],
            price:"<span>Entre em contato</span>"
        }
    ))
    return(plans)
}