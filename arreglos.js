let arregloIzquierdo = [];
let arregloDerecha = [];

function agregarEdad(){
    let valor = document.getElementById("edad").value;
    valor = parseInt(valor);
    arregloIzquierdo.push(valor);
    pintarArregloDerecha();
    pintarArregloIzquierda();
   
    
}

function pintarArregloIzquierda(){
    let tbody = document.getElementById("tablaIzquierda");
    let contenido = "";

    for(let i=0; i<arregloIzquierdo.length; i++){
        contenido += "<tr>";
        contenido += "<td>" + arregloIzquierdo[i] + "</td>";
        contenido += "<td><button class ='btn-eliminar' onclick='eliminarIzquierdo(" + i + ");'>Eliminar</button></td>";
        contenido += "<td><button class = 'btn-mover' onclick='moverHaciaDerecha(" + i + ");'>➜</button></td>";
        contenido += "</tr>";

    }

    tbody.innerHTML = contenido;
}

function eliminarIzquierdo(indice){
    arregloIzquierdo.splice(indice,1);
    pintarArregloIzquierda();

}

function pintarArregloDerecha(){
    let tbody = document.getElementById("tablaDerecha");
    let contenido = "";

    for(let i=0; i<arregloDerecha.length; i++){
        contenido += "<tr>";
        contenido += "<td><button class = 'btn-mover' onclick='moverHaciaIzquierda(" + i + ");'>⬅</button></td>";
        contenido += "<td>" + arregloDerecha[i] + "</td>";
        contenido += "<td><button class ='btn-eliminar' onclick='eliminarDerecho(" + i + ");'>Eliminar</button></td>";
        contenido += "</tr>";
    }
    tbody.innerHTML = contenido;
}

function eliminarDerecho(indice){
    arregloDerecha.splice(indice,1);
    pintarArregloDerecha();

}

function moverHaciaDerecha(indice){
    let mover = arregloIzquierdo[indice];
    arregloDerecha.push(mover);
    arregloIzquierdo.splice(indice,1);
    pintarArregloIzquierda();
    pintarArregloDerecha();

}

function moverHaciaIzquierda(indice){
    let mover = arregloDerecha[indice];
    arregloIzquierdo.push(mover);
    arregloDerecha.splice(indice,1);
    pintarArregloIzquierda();
    pintarArregloDerecha();

}
 
