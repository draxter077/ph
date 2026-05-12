export default function submit(){
    let style = `
        {
            font-weight:900;
            background:var(--colorBlue) !important;
            padding:10px 15px;
            color:var(--colorWhite);
            border-radius:5px;
            cursor:pointer;
            transition:all 0.5s;
        }
        :hover{
            transform:scale(1.05);
        }`

    const submit = cE("div",style)
    submit.innerHTML = "Enviar"

    submit.addEventListener(
        "click",
        function a(e){
            submit.removeEventListener("click",a)
            alert(e.target.parentElement.parentElement.children[1].value)
            e.target.parentElement.children[0].click()
        }
    )
    return(submit)
}