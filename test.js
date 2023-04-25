import ProductManager from "./ProductManager.js";

// Se creará una instancia de la clase “ProductManager”
const manager = new ProductManager();
// Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
console.log("--------Lista de Productos--------");
manager.getProducts();
console.log("----------------------------------");
// Se llamará al método “addProduct” con los campos:
manager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
// El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE
//
// Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
console.log("--------Lista de Productos--------");
manager.getProducts();
console.log("----------------------------------");
// Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
manager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
// Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo
// Caso Existente
console.log("--------Buscando Producto--------");
manager.getProductById(1);
console.log("----------------------------------");
// Caso no Existente
console.log("--------Buscando Producto--------");
manager.getProductById(3);
console.log("----------------------------------");