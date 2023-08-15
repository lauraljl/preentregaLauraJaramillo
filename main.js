let nombre=prompt(" Bienvenido, ingrese su nombre:");
    alert("Hola "+nombre);

 

let opcion;
let productos="1.Shampoo anti-caida.\n2.Shampoo emergencia capilar.\n3.Tratamiento biorepolarizador."
do{
opcion=prompt("Desea comprar algun producto?\n(s-si/n-no)");

switch (opcion) {
    case "s":
        mostrarProductos();
        mostrarPrecio();   
            
        break;

        case "n":
        alert("vuelva pronto :)");
        break;

    default:
        ("opcion no valida")
        break;


}
}while(opcion !== "n");

function mostrarProductos(){
  productos=parseInt(prompt(productos));
}

function mostrarPrecio(){
    switch (productos) {
        case 1:
            alert("agregaste este producto a tu carrito y cuesta 33 mil COP")
            break;

            case 2:
            alert("agregaste este producto a tu carrito y cuesta 30 mil COP")
            break;

            case 3:
            alert("agregaste este producto a tu carrito y cuesta 28 mil COP")
            break;
    
        default:
            alert("Producto no encontrado")
            break;
}
}


