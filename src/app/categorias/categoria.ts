class Categoria {
    private nombre: string;
    public constructor(nombre: string){
     this.nombre = nombre;
     }
    public setNombre(nombre: string){
     this.nombre = nombre;
     }
    public getNombre(){
     return this.nombre;
     }
}