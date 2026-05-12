import text from "./text/main.js"
import img from "./img/main.js"

export default function resume(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            padding:10px;
            border-radius:10px;
            background:var(--colorWhite);
            transform:translateX(0%);
            cursor:pointer;
            transition:all 0.5s;
        }
        :hover{
            transform:translateX(10%);
        }`

    const resume = cE("div",style)
    resume.appendChild(text())
    resume.appendChild(img())

    resume.addEventListener(
        "click",
        async function a(){
            const e = document.getElementById("forms").children[0]
            const p = document.getElementById("progress").children[0].children[0]
            if(e.style.transform == "translateX(-50%)"){ // página confirmação
                e.style.transform = "translateX(-75%)"
                p.style.width = "100%"
                console.log(document.getElementById("inputs"))
                console.log(document.getElementById("builderIframe"))
            }
            else if(e.style.transform == "translateX(-25%)"){ // página builder
                let inputs = e.children[1].children[1].children
                let ws = 1
                for(let i = 0; i < inputs.length; i++){
                    if(inputs[i].children[1].value.length == 0){
                        inputs[i].children[1].style = "animation:inputError 1s linear 0s 1 forwards"
                        ws = 0
                    }
                }
                if(ws){
                    const ifr = document.getElementById("builderIframe")
                    const prompt = `Quero uma landing page moderna. O nome da empresa é ${inputs[1].children[1].value}, do setor ${inputs[3].children[1].value}. Nosso público alvo é ${inputs[4].children[1].value}, e, com o site, temos o objetivo de ${inputs[5].children[1].value}`
                    axios.post(`${api_url}/contract_plan_sade/builder`, {prompt:prompt,past_html:""})
                        .then(r => {ifr.srcdoc = r.data.html;document.getElementById("builderChat").style = "opacity:1";})
                        .catch(r => {ifr.srcdoc = `Error: ${r}`})
                    e.style.transform = "translateX(-50%)"
                    p.style.width = "66%"
                }
                await new Promise(r => setTimeout(r, 1000))
                for(let i = 0; i < inputs.length; i++){
                    if(inputs[i].children[1].value.length == 0){
                        inputs[i].children[1].style = ""
                    }
                }
            }
            else{ // página forms
                e.style.transform = "translateX(-25%)"
                p.style.width = "33%"
            }
        }
    )
    return(resume)
}