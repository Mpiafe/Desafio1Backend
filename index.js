const { ProductManager} = require ("./ProductManager");

const rutaArchivo= "./productos.json";

const manager= new ProductManager (rutaArchivo)
console.log ("manager:", manager)


//funcion para utilizar los metodos asincronos del manager.
const operaciones = async ()=>{
try {
    const exist= manager.fileExist();
    console.log ("exist:", exist);
   
    // lectura de archivo
    const resultado= await manager.getproduct();
    console.log ("resultado:", resultado)

    //agregar producto
    await manager.addProduct({title: "torta", description:"chocotorta"});
    await manager.addProduct({title: "alfajor", description:"blanco"});

    //ver productos
    await manager.getproduct ([]);
    
} catch (error) {
    
}

}

operaciones ();