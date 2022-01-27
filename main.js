let total = 0;
let precio = 0;
let otroProducto = false;

function agregarAlcarrito() {

    do {
        let producto = prompt("¿quieres adquirir un tour, camping, hospedaje?", "Ej:Hospedaje");
        let cantidad = parseInt(prompt("¿cuantas personas son?", 0));

        switch(producto){
            case "tour":
                precio = 1500;
                break;
            case "camping":
                precio = 3500;
                break;
            case "hospedaje":
                precio = 6000;
                break;
            default:
                alert("Algunos de los datos ingresados es incorrecto");
                precio = 0;
                cantidad = 0;
        }

        total = total + precio * cantidad;
        otroProducto = confirm("¿Queres agregar otra opcion?");


    } while (otroProducto);
}
function aplicarDescuento (total){
    if (total >= 10000){
        total = total * 0,60;
    }
    return total;
}

function calcularPersonas (total) {
    let confirmacion = confirm ("¿Cuantas personas son?");

    if(confirmacion && total >= 20000) {
        alert ("Tienes un día gratis!!. El total de la compra es: " + total);
    } else if (confirmacion && total < 20000 && total != 0){
        total = total + 500;
        alert("500 para tu primera compra de cerveza artesanal. El total de la compra es: " + total);
    }else{
        alert("El total de tu compra es: " + total);
    }

    return total;
}

agregarAlcarrito();
calcularPersonas(aplicarDescuento(total));