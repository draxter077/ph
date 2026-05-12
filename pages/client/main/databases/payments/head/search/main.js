export default function search(){
    let style = `
        {
            width:100%;
            font-size:18px;
            padding:2px 5px;
            border-bottom:1px solid var(--colorBlue);
            color:var(--colorWhite);
        }
        ::placeholder{
            font-style:italic;
        }
        :responsive{
            font-size:16px;
        }`

    const search = cE("input",style)
    search.placeholder = "Pesquise em pagamentos"
    return(search)
}