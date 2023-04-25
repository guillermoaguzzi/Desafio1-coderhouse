class ProductManager {
  counter = 0; // Contador de productos agregados

  constructor() {
    this.products = [];
  }

  getProducts = () => {
    console.log(this.products);
  };

  addProduct = (title, description, price, thumbnail, code, stock) => {
    const product = new Product(
      this.counter,
      title,
      description,
      price,
      thumbnail,
      code,
      stock
    );
    let valid = true;
    Object.values(product).forEach((val) => { // Validacion de atributos
      if (val === null || val === undefined) {
        valid = false;
      }
    });
    if (valid) {
      const exist = this.products.filter((product) => product.code === code);
      if (exist.length === 0) { // Se agrega el producto
        this.products.push(product);
        this.counter++;
        console.log("Producto agregado.");
        return;
      }
      console.error("Product exists"); // No se agrega el producto por que ya existe
      return;
    }
    console.error("Todos los campos son requeridos.");
  };

  getProductById = (id) => {
    const idx = this.products.findIndex((product) => product.id === id);
    if (idx !== -1) {
      console.log(this.products[idx]);
    } else {
      console.error("Not found");
    }
  };
}

export default ProductManager;

class Product {
  constructor(id, title, description, price, thumbnail, code, stock) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
  }
}
