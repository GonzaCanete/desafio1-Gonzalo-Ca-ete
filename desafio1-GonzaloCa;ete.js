// Crear una clase productManager con un constructor (title, description, price, thumbnail, code, stock)

class productManager{
    // Atributos de la clase
    #products
    constructor (path){
        // genero un array vacio de productos que se va a ir llenando con el addProduct()
        this.#products = [];
        this.path = path;
    }
    // genero el get que me devuelve el array de productos
    getProducts() {
        return this.#products;
    }
    // genero el get que me devuelva el path
    getPath() {
        return this.path;
    }
    // Método para comprobar si un código de producto ya existe
    isCodeExist(code) {
        return this.#products.some(product => product.code === code);
    }

    // creo productos y los agrego al array this.#products creado en el constructor
    addProduct(title, description, price, thumbnail, code, stock) {
        // compruebo que no exista un producto con ese codigo
        if (this.isCodeExist(code)) {
            // devuelvo un mensaje en consola que advierte que el codigo ya existe y no lo agrego al array
            console.log("Ya existe un producto con este código.");
            return "codigo existente";
        }

        const product = {
            // genero un id que se incrementa cada vez que creo un producto
            id: this.#products.length + 1,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };
        // agrego el producto al array
        this.#products.push(product);
        return product;
    }
    

    // creo el metodo para que reciba un id por parametro y devuelva el producto con esa id
    getProductsById(id) {
        const product = this.#products.find(product => product.id === id);
        if (product) {
            return product;
        } else {
            return "Not found";
        }
    }
    // genero un método para actualizar un producto por id
    updateProduct(id, newData) {
        const productIndex = this.#products.findIndex(product => product.id === id);

        if (productIndex !== -1) {
            this.#products[productIndex] = { ...this.#products[productIndex], ...newData };
            return this.#products[productIndex];
        } else {
            return "not found";
        }
    }
    // genero un método para eliminar un producto por id
    deleteProduct(id) {
        const productIndex = this.#products.findIndex(product => product.id === id);

        if (productIndex !== -1) {
            const deletedProduct = this.#products.splice(productIndex, 1)[0];
            return deletedProduct;
        } else {
            return "not found";
        }
    }
    
}


// creo el array vacio y pruebo agregar un path por parametro
const ProductManager = new productManager("./img");
// creo el primer producto y lo agrego al array vacio
const product1 = ProductManager.addProduct("Playstation 5", "Consola de videojuegos", 800, "./img/play5", 54, 20);
// muestro en consola el array con el primer producto
console.log(ProductManager.getProducts());
console.log(ProductManager.getPath());

// creo un segundo producto y lo agrego al array
const product2 = ProductManager.addProduct("Xbox", "Consola de videojuegos", 600, "./img/xbox", 64, 12);
// muestro el array con los dos productos
console.log(ProductManager.getProducts());
console.log("=======================");
// probando el getProductsById
console.log(ProductManager.getProductsById(2));
// probando el Not Found
console.log(ProductManager.getProductsById(4));

console.log("=======================");
// probando el metodo updateProduct()
ProductManager.updateProduct(1, {
    title: "playstation 2",
    price: 200,
});

console.log(ProductManager.getProductsById(1));

console.log("===================");
// probando el metodo deleteProduct();
ProductManager.deleteProduct(1);
// me debería de devolver un "Not found" al hacerle un getProductById(1)
console.log(ProductManager.getProductsById(1));

// creo un producto con el mismo codigo que el product2 para comprobar que no me genere ese producto ya que el codigo ya existe
const product3 = ProductManager.addProduct("nintendo switch", "Consola de videojuegos", 350, "./img/any", 64, 40);
console.log(ProductManager.getProducts());
