class ProductManager {
    constructor (){
        this.productos = [];
    }

    addProduct = (title, description, price, image, code, stock)=>{
        const producto = {
            title: "torta",
            description: "chocotorta",
            price: 200,
            image: "sin imagen",
            code: 1,
            stock: 25,
        }

 if ( this.productos === 0){
    producto.code = 1}
    else{
        producto.code = this.productos [this.productos.length-1].code+1
    }
this.productos.push (producto)
    }


    getProductos = ()=>{
        return this.productos;
}

getProductById = (idCode)=>{
    const productoIndex= this.productos.findIndex (producto => producto.code === idCode)

    if (productoIndex === -1){
        console.log ( "Producto no encontrado")
        return;
}
else {
    this.productos [productoIndex].code(idCode)
}
}
};
const manejadorProductos = new ProductManager ();
manejadorProductos.addProduct ("harina","Harina 0000 ultrafina",1000)
console.log (manejadorProductos.addProduct())