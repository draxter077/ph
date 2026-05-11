export default function input(p){
    let style = `
        {
            background:var(--colorWhite);
            font-size:16px;
            padding:5px 10px;
            border-radius:5px;
        }
        ::placeholder{
            font-style:italic;
        }
        @keyframes inputError{
            0%[background:var(--colorWhite);]
            50%[background:rgb(196,51,31);]
            100%[background:var(--colorWhite);]
        }`

    const input = cE("input",style)
    input.placeholder = p
    return(input)
}