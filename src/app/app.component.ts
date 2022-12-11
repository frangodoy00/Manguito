import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './home.html',
})
export class AppComponent implements OnInit{
  title = 'Manguito';
  emprendimientos: string[];
  constructor(){
    this.emprendimientos = ['emprendimiento1', 'emprendimiento2', 'emprendimiento3']
  }  
ngOnInit(){
}
}
