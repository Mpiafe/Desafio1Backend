const fs = require("fs");

class ProductManager{
    constructor(path){
        this.path=path;
    };

    fileExist(){
        return fs.existsSync(this.path);
    }

    async addProduct(product){
        try {
            if(this.fileExist()){
                //leer el archivo
                const contenido = await fs.promises.readFile(this.path,"utf-8");
                const product = JSON.parse(contenido);
                product.push(product);
                //reescribimos el archivo con el nuevo contenido
                await fs.promises.writeFile(this.path,JSON.stringify(product,null,'\t'));
                console.log("producto creado");
            } else {
                console.log("El producto no existe");
                await fs.promises.writeFile(this.path,JSON.stringify([product],null,'\t'));
                console.log("producto creado");
            }
        } catch (error) {
            console.log(error.message);
            return undefined;
        }
    };

    async getproduct(){
        try {
            if(this.fileExist()){
                const contenido = await fs.promises.readFile(this.path,"utf-8");
                const contenidoJson = JSON.parse(contenido);
                return contenidoJson;
            } else {
                return console.log("El archivo no existe");
            }
        } catch (error) {
            console.log(error.message);
            return undefined;
        }
    };
}

module.exports = { ProductManager }