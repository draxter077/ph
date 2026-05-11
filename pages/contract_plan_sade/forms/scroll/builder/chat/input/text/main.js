export default function text(){
    let style = `
        {
            font-size:16px;
            padding:5px 10px;
        }
        ::placeholder{
            font-style:italic;
        }`
    
    const text = cE("input",style)
    text.placeholder = "Escreva aqui"
    return(text)
}