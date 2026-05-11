import about from "./about/main.js"

export default function what(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            margin:2.5% 0px 0px 0px;
            opacity:0;
            transform:translateY(50%);
            transition:all 0.5s;
        }
        :responsive{
            margin:20% 0px 0px 0px;
        }`

    const what = cE("div",style)
    what.id = "what"
    what.appendChild(about())

    window.addEventListener(
        "scroll",
        async function a(){
            let e = document.getElementById(what.id)
            if(window.scrollY > e.offsetTop - window.innerHeight*0.7){
                window.removeEventListener("scroll",a)
                e.style.opacity = 1
                e.style.transform = "translateY(0%)"
            }
        }
    )
    return(what)
}