export default function iframe(){
    let style = `
        {
            height:100%;
            width:100%;
            border-radius:5px;
            background:var(--colorWhite);
        }`

    const iframe = cE("iframe",style)
    iframe.srcdoc = `<div>Olá</div><div>Seu site aparecerá aqui</div>`
    return(iframe)
}