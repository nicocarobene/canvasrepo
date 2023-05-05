
const newFechaUTC = dias=>{
    let fecha= new Date();
    fecha.setTime(fecha.getTime()+ dias*1000*60*60*24);
    return fecha.toUTCString();
}

const crearCookies= (name,dias)=>{
    expires= newFechaUTC(dias);
    document.cookie= `${name}; expires=${expires}`;
}

crearCookies("user=Nico",2);

const obtenerCookie= cookieName=>{
    let cookies = document.cookie;
    cookies = cookies.split(";");
    for(i=0; cookies.length > i;i++){
       cookie= cookies[i].trim()  //remueve espacios en blanco
        if(cookie.startsWith(cookieName)){
            return cookie.split("=")[1]
        }else{
            return "no hay cookies con ese nombre"
        }
    }
}

if(obtenerCookie("acceptedCookies")!=="si"){   
    setTimeout(()=>{
        document.querySelector(".bg-modal").style.zIndex="10";
        document.querySelector(".bg-modal").style.opacity="1";
        document.getElementById("accept").addEventListener("click",()=>{
            crearCookies("acceptedCookies=si",20);
            document.querySelector(".bg-modal").style.opacity="0";
            setTimeout(()=>{document.querySelector(".bg-modal").style.zIndex="-1";},100);
        })
        document.getElementById("deny").addEventListener("click",()=>{
            crearCookies("acceptedCookies=no",20);
            document.querySelector(".bg-modal").style.opacity="0";
            setTimeout(()=>{document.querySelector(".bg-modal").style.zIndex="-1";},100);
        })
    },200);
}