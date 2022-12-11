class Emprendimiento {
    private dominio: string;
    private password: string;
    private nombre: string;
    private descripcion: string;
    private precioPorManguito: number;
    private manguitosRecibidos: number;

    public constructor(dominio: string, password: string, nombre: string, descripcion: string,
        precioPorManguito: number, manguitosRecibidos: number){
     this.dominio = dominio;
     this.password = password;
     this.nombre = nombre;
     this.descripcion = descripcion;
     this.precioPorManguito = precioPorManguito;
     this.manguitosRecibidos = manguitosRecibidos;
     }

    public setDominio(dominio: string){
     this.dominio = dominio;
     }
    public getDominio(){
     return this.dominio;
     }

     public setPassword(password: string){
     this.password = password;
     }
    public getPassword(){
     return this.password;
     }
}