export default function text(){
    let style = `
        {
            font-size:16px;
            padding:5px 10px;
            width:100%;
            resize:none;
        }
        ::placeholder{
            font-style:italic;
        }
        :responsive{
            font-size:14px;
        }`
    
    const text = cE("textarea",style)
    text.rows = 3
    text.placeholder = "Escreva aqui o que deseja alterar\nQuando estiver satisfeito, clique em continuar"
    text.tabIndex=-1

    text.addEventListener(
        "keypress",
        function a(e){
            if(e.key == "Enter"){
                e.preventDefault()
                e.target.parentElement.children[1].click()
            }
        }
    )
    return(text)
}