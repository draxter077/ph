export default function inputs(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:100%;
            height:100%;
            overflow-y:scroll;
        }`

    const inputs = cE("div",style)
    return(inputs)
}