export default function text(t){   
    let style = `
        {
            color:var(--colorWhite);
            text-align:center;
            width:100%;
        }` 
    const text = cE("div",style)
    text.innerHTML = t
    return(text)
}