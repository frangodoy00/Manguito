import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { CategoriasComponent } from './categorias/CategoriasComponent';
0
const appRoutes: Routes = [
  { path: 'categorias', component: CategoriasComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AppComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    CategoriasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
