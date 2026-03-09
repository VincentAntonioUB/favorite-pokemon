import { Routes } from '@angular/router';
import { KantoComponent } from './kanto/kanto.component';
import { JohtoComponent } from './johto/johto.component';
import { HoennComponent } from './hoenn/hoenn.component';
import { PokemartComponent } from './pokemart/pokemart.component';

export const routes: Routes = [
  { path: 'kanto', component: KantoComponent },
  { path: 'johto', component: JohtoComponent },
  { path: 'hoenn', component: HoennComponent },
  { path: 'pokemart', component: PokemartComponent },
  { path: '', redirectTo: 'kanto', pathMatch: 'full' }
];