//Cuando se presiona "Hombre" se despliega la lista cambiando cambiando la propiedad "display: none" por "display block" y se ocula la lista Mujer
function mostrarHom(){document.getElementById('listaHombre').style.display='block'; document.getElementById('listaMujer').style.display='none';}

//ocuta la lista Hombre voliendo a darle la prpiedad "none" a display
function OcultarHom(){document.getElementById('listaHombre').style.display='none';}

//Cuando se presiona "Mujer" se despliega la lista cambiando cambiando la propiedad "display: none" por "display block" y se ocula la lista Hombre
function mostrarMuj(){document.getElementById('listaMujer').style.display='block'; document.getElementById('listaHombre').style.display='none';}

//ocuta la lista Mujer voliendo a darle la prpiedad "none" a display
function OcultarMuj(){document.getElementById('listaMujer').style.display='none';}

let bandera=1;//a bandera la uso para el parpadeo de los ":" en la hora
function reloj(){
    let tiempo =new Date();
    let hora = tiempo.getHours();
    let minutos = tiempo.getMinutes();
    let segundos = tiempo.getSeconds();
    let parpadeo=" : ";

    if(minutos<=9){minutos="0"+minutos;}
    if(hora<=9){hora="0"+hora;}//esto esta copidado de la clase 10

    //no queria hacer un reloj que contara los segundos, pero tampoco queria que el reloj estubiera estatico
    //asi que decidi hacer que titilaran los dos puntos ":" 
    if(bandera==1){parpadeo=" : ";bandera=0; document.formuReloj.barraReloj.value=hora+parpadeo+minutos;//si bandera es igual a uno imprime los ":"
    }else{parpadeo="   "; bandera=1; document.formuReloj.barraReloj.value=hora+parpadeo+minutos;}//sino deja un espacio

    if(hora==0&&minutos==0){//con esto cuando se hagan las 00:00 va a imprimir la nueva fecha durante un minuto, (no lo probe a las 12, pero imprimi los
        fecha();            //segundos durante un minuto en la parte de fecha, supongo que podra cambiar la fecha a las doce)
    }

    setTimeout(reloj,1000);
}

function fecha(){//tomo los distintos valeres de fecha
    let tiempo =new Date();
    let dia= tiempo.getDate();//para el numero del dia
    let mes= tiempo.getMonth();//para el mes
    let anio= tiempo.getFullYear();//para el año
    let diaSemana=tiempo.getDay();////para el dia de la semana

    let dias=["domingo","lunes","martes","miercoles","jueves","viernes","sabado"];
    let meses=["enero","febrero","marzo","abril","mayo","junio","julio",
    "agosto","septiembre","octubre","noviembre","diciembre"];

    document.formuFecha.barraFecha.value=dias[diaSemana]+", "+dia+" de "+meses[mes]+" de "+anio;//muestro la fecha de la forma que se pidio
}

reloj();
fecha();