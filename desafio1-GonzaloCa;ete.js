// Crear una clase productManager con un constructor (title, description, price, thumbnail, code, stock)

class productManager{
    // Atributos de la clase
    #products
    constructor (){
        // genero un array vacio de productos que se va a ir llenando con el addProduct()
        this.#products = [];
    }
    // genero el get que me devuelve el array de productos
    getProducts() {
        return this.#products;
    }

    // creo productos y los agrego al array this.#products creado en el constructor
    addProduct(title, description, price, thumbnail, code, stock){
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
    
}


// creo el array vacio
const ProductManager = new productManager();
// creo el primer producto y lo agrego al array vacio
const product1 = ProductManager.addProduct("Playstation 5", "Consola de videojuegos", 800, "./img/play5", 54, 20);
// muestro en consola el array con el primer producto
console.log(ProductManager.getProducts());

// creo un segundo producto y lo agrego al array
const product2 = ProductManager.addProduct("Xbox", "Consola de videojuegos", 600, "./img/xbox", 600, 12);
// muestro el array con los dos productos
console.log(ProductManager.getProducts());
console.log("=======================");
// probando el getProductsById
console.log(ProductManager.getProductsById(2));
// probando el Not Found
console.log(ProductManager.getProductsById(4));