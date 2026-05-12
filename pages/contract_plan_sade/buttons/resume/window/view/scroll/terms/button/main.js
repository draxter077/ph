export default function button(b){
    let style = `
        {
            font-size:21px;
            background:var(--colorBlue);
            color:var(--colorWhite);
            font-weight:900;
            padding:5px 10px;
            border-radius:5px;
            cursor:pointer;
            transition:all 0.5s;
        }
        :hover{
            transform:translateX(10%);
        }
        :responsive{
            font-size:21px;
        }`

    const button = cE("div",style)
    button.innerHTML = "Aceitar"

    button.addEventListener(
        "click",
        async function a(){
            button.removeEventListener("click",a)

            let e = document.getElementById("windowView").children[0]
            e.style.transform = "translateX(-33%)"

            await new Promise(r => setTimeout(r,5000))
            e.style.transform = "translateX(-66%)"
            //axios.post(`${api_url}/contract_plan_sade/builder`, {prompt:prompt,past_html:""})
            //    .then(r => {ifr.srcdoc = r.data.html;document.getElementById("builderChat").style = "opacity:1";})
            //    .catch(r => {ifr.srcdoc = `Error: ${r}`})
        }
    )
    return(button)
}