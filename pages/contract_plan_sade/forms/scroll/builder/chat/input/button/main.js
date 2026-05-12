import input from "./input/main.js"

export default function button(){
    let style = `
        {
            height:25px;
            width:25px;
            transform:translateX(0%) rotate(270deg);
            transition:all 0.5s;
            cursor:pointer;
        }
        :hover{
            transform:translateX(20%) rotate(270deg);
        }`

    const button = cE("img",style)
    button.src = "/assets/icons/arrow.png"
    button.alt = "Ícone de enviar"

    button.addEventListener(
        "click",
        async function a(e){
            button.removeEventListener("click", a)
            const v = e.target.parentElement.children[0].value
            const ifr = e.target.parentElement.parentElement.parentElement.children[0]
            const is = e.target.parentElement.parentElement.children[0]
            e.target.parentElement.children[0].value = ""
            is.appendChild(input(v))

            let past_html = ifr.srcdoc
            ifr.srcdoc = `<!DOCTYPE html><html lang="pt-br" role="main"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><style>body{box-sizing:border-box;display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100svh;color:rgb(255,255,255);font-family:system-ui;background:rgb(0,0,0);overflow:hidden;}#loading{width:5%;height:5%;background:rgb(255,255,255);border-radius:50px;transform:translateX(-100%);animation:loading 2s linear 0s infinite alternate;}@keyframes loading{0%{transform:translateX(-100%);width:5%}50%{transform:translateX(0%);width:2.5%}100%{transform:translateX(100%);width:5%}}</style></head><body><div id="loading"></div><div>Estamos carregando um rascunho com base em suas informações</div></body></html>`

            await axios.post(`${api_url}/contract_plan_sade/builder`, {prompt:v,past_html:past_html})
                .then(r => ifr.srcdoc = r.data.html)
                .catch(r => {ifr.srcdoc = `Error: ${r}`})

            button.addEventListener("click", a)
        }
    )
    return(button)
}