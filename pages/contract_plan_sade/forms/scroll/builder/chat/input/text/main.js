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
        }`
    
    const text = cE("textarea",style)
    text.lines = 2
    text.placeholder = "Escreva aqui"

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