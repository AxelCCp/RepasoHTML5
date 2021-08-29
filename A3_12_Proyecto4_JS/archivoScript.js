
//ESTE MENSAJE SE LLAMA DESDE EL <HEAD> CON  EL LINKADO <script src="archivoScript.js"></script>
alert("Que hay de nuevo, mensaje desde página JS independiente");


//ESTAFUNCIÓN ES LLAMADA DESDE EL BODY EN <p onclick="saludo()">Párrafo 2</p>
function saludo(){
    alert("Mensaje desde function saludo() en página JS independiente");
}


//ESTA FUNCIÓN ES LLAMADA CUANDO SE CARGA LA PÁGINA WEB. 
function saludo2(){
    alert("Mensaje con window.onload=saludo2;");
}
window.onload=saludo2;


//LA FUNCIÓN EJECUTA ES LLAMADA CUANDO SE CARGA LA PÁGINA WEB. ("p")[2] : IDENTIFICAMOS LA 3RA ETIQUETA <P>.
//... onclick=saludo3 : Y CUANDO SE HAGA CLICK EN ESTA, SE EJECUTARÁ LA FUNCIÓN SALUDO3(). 
function ejecuta(){
    document.getElementsByTagName("p")[2].onclick=saludo3;
}
function saludo3(){
    alert("Mensaje del metodo saludo3(), que es llamado a su vez por el método ejecuta() al pulsar el <p> [2]");
}
window.onload=ejecuta;


//IDENTIFICAMOS ELEMENTO <p> CON id="importante" Y EJECUTAMOS FUNCTION MENSAJE4()  
function ejecuta2(){
    document.getElementById("importante").onclick=mensaje4;
}
function mensaje4(){
    alert("Mensaje desde la function mensaje4(), que es llamado con la function ejecuta2()," +  
            "que a su vez identifica al <p> 4 que tiene un ID='importante'");
}
window.onload=ejecuta2;


//ESTA FUNCTION IDENTIFICA A TODOS LOS ELEMENTOS <p> DE LA PÁGINA WEB. Y EJECUTAMOS EL MENSAJE 5. 
//ESTE MENSAJE5() APARECERÁ CUANDO SE HAGA CLICK EN CUALQUIER <P>.
//(LO DESACTIVÉ PQ NO DEJA VER LOS OTROS MÉTODOS) 
/*function ejecuta3(){
    for(var i=0;i<4;i++){
        document.getElementsByTagName("p")[i].onclick=mensaje5;
    }
}
function mensaje5(){
    alert("Mensaje desde el Metodo5(), que a la vez es llamado por el método ejecuta3, cada vez que se haga click en " 
            + "cualquier parrafo <p>");
}
window.onload=ejecuta3;
*/

//ESTA FUNCTION SE EJECUTA CUANDO SE HACE CLICK SOBRE EL ELEMENTO QUE TIENE EL ATRIBUTO CLASS "importante2" CON ÍNDICE [0].
function ejecuta4(){
    var z= document.getElementsByClassName("importante2")[0].onclick=mensaje5;
}
function mensaje5(){
    alert("Mensaje desde la function mensaje5() que es llamado por la function ejecuta3(), al hacer click en <p> 5");
}
window.onload=ejecuta4;



//PARA EJECUTAR EL CÓDIGO EN TOTOS LOS <P> QUE TENGAN EL ATRIBUTO CLASS
/*function ejecuta4(){
    for(var i=0;i<3;i++){
        var z= document.getElementsByClassName("importante2")[i].onclick=mensaje5;
    }
   
}
function mensaje5(){
    alert("Mensaje desde la function mensaje5() que es llamado por la function ejecuta3(), al hacer click en <p> 5");
}
window.onload=ejecuta4;
*/