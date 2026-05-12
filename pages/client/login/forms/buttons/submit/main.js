export default function submit(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            height:40px;
            width:50%;
            font-size:16px;
            font-weight:900;
            text-align:center;
            background:var(--colorBlue) !important;
            color:var(--colorWhite);
            border-radius:5px;
            cursor:pointer;
        }
        :responsive{
            height:30px;
            width:80%;
        }
        >div{
            width:40px;
            height:50%;
            border-radius:10px;
            background:var(--colorWhite);
            animation:loading2 2s linear 0s infinite alternate;
        }`

    const submit = cE("div",style)
    submit.innerHTML = "Entrar"

    submit.addEventListener(
        "click",
        async function a(){
            submit.removeEventListener("click",a)
            submit.innerHTML = `<div></div>`
            await new Promise(r => setTimeout(r,2000))
            const is = document.getElementById("formsInputs").children
            if(is[0].value && is[1].value){
                await construct({page:"client",data:{user:{id:"teste"}}})
            }
            else if(is[0].value){
                is[1].style = "box-shadow:0px 0px 3px 0px red"
                await new Promise(r => setTimeout(r,600))
                is[1].style = "box-shadow:0px 0px 3px 0px var(--colorBlue)"
            }
            else{
                is[0].style = "box-shadow:0px 0px 3px 0px red"
                await new Promise(r => setTimeout(r,600))
                is[0].style = "box-shadow:0px 0px 3px 0px var(--colorBlue)"
            }
            // Tente novamente mais tarde
            submit.innerHTML = "Entrar"
            submit.addEventListener("click",a)
        }
    )
    return(submit)
}