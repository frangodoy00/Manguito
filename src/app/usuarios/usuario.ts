class Usuario {
    private username: string;
    private password: string;

    public constructor(username: string, password: string){
     this.username = username;
     this.password = password;
     }

    public setUsername(username: string){
     this.username = username;
     }
    public getUsername(){
     return this.username;
     }
    public setPassword(password: string){
    this.password = password;
    }
    public getPassword(){
    return this.password;
    }
}