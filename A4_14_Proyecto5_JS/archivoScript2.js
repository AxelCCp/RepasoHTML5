

//querySelector(.importante2) : DEVUELVE EL PRIMER ELEMENTO CON EL SELECTOR INDICADO.
function ejecuta(){
    document.querySelector(".importante").onclick=saludo;   
}
function saludo(){
    alert("Mensaje del metodo saludo(), que es llamado a su vez por el método ejecuta() al pulsar el 1r <p> con selector class 'importante'");
}
window.onload=ejecuta;

//-----------------

//querySelector("#principal p:last-child") : APUNTA AL 1ER ELEMENTO CON ESTAS CARACTERÍSTICAS. 
//...UN <P>, PERO DEBE SER EL ÚLTIMO DENTRO DEL CONTENEDOR <DIV> CON ID=PRINCIPAL  
function ejecutaX(){
    document.querySelector("#principal p:last-child").onclick=saludoX;   
}
function saludoX(){
    alert("Mensaje del metodo saludoX(), que es llamado a su vez por el método ejecutaX() al pulsar " + 
    "en el ÚLTIMO <p> con selector class 'importante' dentro del contenedor <div> con id=principal");
}
window.onload=ejecutaX;


//---------------------

//USAMOS QUERY SELECTOR ALL :MÉTODO QUE DEVUELVE TODAS LAS ETIQUETAS QUE ENCUENTRE
function ejecutaY(){
    //querySelectorAll("#principal p") : CON ESTO LE DECIMOS "TODOS LOS PARRAFOS QUE ESTÉN DENTRO DE <DIV> ID=PRINCIPAL"
    //var elementos = document.querySelectorAll("#principal p"); 

    //querySelectorAll("#principal p, span") : "TODOS LOS PARRAFOS QUE ESTÉN DENTRO DE <DIV> ID=PRINCIPAL, Y ETIQUETAS <SPAN>" 
    var elementos = document.querySelectorAll("#principal p, span"); 
    for(var i=0;i<elementos.length;i++){
        elementos[i].onclick=saludoY;
    }
}
function saludoY(){
    alert("Mensaje del metodo saludoY(), que es llamado a su vez por el método ejecutaY()");
}
window.onload=ejecutaY;


//---------------------