let calcPorcentaje = () =>{
alert("Bienvenido/a aqui calcularemos su descuento y cantidad de cuotas")
let continuar= true;
while (true){
    let PrecioProducto = Number(prompt("Ingrese precio del producto"));
    let opciones = Number(prompt("Seleccione el descuento a aplicar: \n. 10%\n. 20%\n. 30%\n. 40%\n. 50%\n. 60%\n. 70%\n. 80%"));
    let resultado
    switch(opciones){
    case 10:
        resultado=PrecioProducto *0.90;
        alert("El precio con descuento es " + resultado);
        break;
    case 20:
        resultado=PrecioProducto *0.80;
        alert("El precio con descuento es " + resultado);
        break;
    case 30:
        resultado=PrecioProducto *0.70;
        alert("El precio con descuento es " + resultado);
        break;
    case 40:
        resultado=PrecioProducto *0.60;
        alert("El precio con descuento es " + resultado);
        break;
    case 50:
        resultado=PrecioProducto *0.50;
        alert("El precio con descuento es " + resultado);
        break;
    case 60:
        resultado=PrecioProducto *0.40;
        alert("El precio con descuento es " + resultado);
        break;
    case 70:
        resultado=PrecioProducto *0.30;
        alert("El precio con descuento es " + resultado);
        break;
    case 80:
        resultado=PrecioProducto *0.20;
        alert("El precio con descuento es " + resultado);
        break;
        default: alert("Opcion no valida.Gracias por utilizar la app!");
        return;
    }
    let cuotas = (prompt("Queres saber en cuantas cuotas te queda? \n. si\n. no"));
    if (cuotas  !== "si"){
        alert("Gracias por utilizar la app!");
        return;
    }
    let opcionesCuotas = Number(prompt("Elije cantidad de cuotas: \n. 3\n. 6\n. 12"));
    let precioConcuotas
    switch(opcionesCuotas){
        case 3:
            precioConcuotas=resultado / 3;
            alert("3 cuotas de " + precioConcuotas);
            break;
        case 6:
            precioConcuotas=resultado / 6;
            alert("6 cuotas de " + precioConcuotas);
            break;
        case 12:
            precioConcuotas=resultado / 12;
            alert("12 cuotas de " + precioConcuotas);
            break;
    }
    let continuar = prompt("Desea continuar ?  \n. si\n. no");
    if (continuar  !== "si"){
        alert("Gracias por utilizar la app!");
        return;
    }
}
}
calcPorcentaje()