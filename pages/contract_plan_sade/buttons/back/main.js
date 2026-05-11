export default function back(){
    let style = `
        {
            height:35px;
            width:35px;
            border-radius:10px;
            padding:5px;
            background:var(--colorWhite);
            transform:translateX(0%) rotate(90deg);
            transition:all 0.5s;
            cursor:pointer;
        }
        :hover{
            transform:translateX(-20%) rotate(90deg);
        }`

    const back = cE("img",style)
    back.src = "/assets/icons/arrow.png"
    back.alt = "Ícone de voltar"

    back.addEventListener(
        "click",
        function a(){
            const e = document.getElementById("forms").children[0]
            const p = document.getElementById("progress").children[0].children[0]
            if(e.style.transform == "translateX(-75%)"){
                e.style.transform = "translateX(-50%)"
                p.style.width = "66%"
            }
            else if(e.style.transform == "translateX(-50%)"){
                e.style.transform = "translateX(-25%)"
                p.style.width = "33%"
            }
            else if(e.style.transform == "translateX(-25%)"){
                e.style.transform = "translateX(0%)"
                p.style.width = "0%"
            }
        }
    )
    return(back)
}