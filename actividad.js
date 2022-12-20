class productoManagerr{

    constructor(productos){
        this.productos=productos;
        this.id=0;
    }

    addProduct(title,descripcion,precio,thumbnail,code,stock){
        if(this.productos.find((producto)=>{producto.code!=code})){
                    if(title&&descripcion&&precio&&thumbnail&&code&&stock){

                        let objeto={
                            id:this.id,
                            title: title,
                            descripcion:descripcion,
                            precio:precio,
                            thumbnail:thumbnail,
                            stock:stock,
                        }
                        this.id++;
                        this.productos.push(objeto)
                    }else{
                        console.log("completar todos los campos")
                    }
        };
    }
    getProductos(){
        return this.productos
    };
}
