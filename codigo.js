
const canvas =document.getElementById("canvas");

const dif= canvas.getBoundingClientRect(); //esto espara que calcula la distancia que tiene el puntero con respecto a la pantalla, ya que el cavas tiene sus propias coordenadas. quiere decir que se indicamos que este a 100 px de top seria distinto si toma de referencia el borde de la pantalla o le borde del canvas


const ctx= canvas.getContext("2d");

let painting,color, linewidth, difX, difY;

canvas.addEventListener("mousedown",e=>{
    difX= e.clientX-dif.left     //esto devuelve la coordenada donde esta el mouse en x
    difY=e.clientY  -dif.top    //lo mismo en y
    painting=true;
    color=document.getElementById("color").value;
    linewidth= document.getElementById("lw").value;
    ctx.beginPath();
})

canvas.addEventListener("mousemove", e=>{
    if(painting){
        dibujar(difX,difY,e.clientX-dif.left,e.clientY-dif.top);
        difX= e.clientX-difX.left;
        difY=e.clientY -difY.top;
    }

})

canvas.addEventListener("mouseup",()=>{
    ctx.closePath();
    painting=false;
})

const dibujar=(x1,y1,x2,y2)=>{
    ctx.strokeStyle=color;
    ctx.lineWidth=linewidth;
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
}