import { Component, OnInit } from '@angular/core';
@Component({
 selector: 'categorias',
 templateUrl: './categorias.html',
})
export class CategoriasComponent implements OnInit {
    title = 'Manguito';
    categories: string[];
    constructor() {
        this.categories = ['Comida', 'Tecnologia', 'Deportes'];
    }
    ngOnInit() {
    }
}
