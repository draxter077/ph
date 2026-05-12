export default function search(){
    let style = `
        {
            width:100%;
            font-size:18px;
            padding:2px 5px;
            border-bottom:1px solid var(--colorWhite);
            color:var(--colorWhite);
        }
        ::placeholder{
            font-style:italic;
        }`

    const search = cE("input",style)
    search.placeholder = "Pesquise em pedidos"
    return(search)
}