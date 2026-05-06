export default function outdoor(){
    let style = `
        {
            width:100%;
            height:80lvh;
            background:var(--colorWhite);
        }`

    const outdoor = cE("div",style)
    outdoor.innerHTML = "Outdoor"
    return(outdoor)
}