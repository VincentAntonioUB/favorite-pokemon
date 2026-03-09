import { Component, inject } from '@angular/core';
import { PokemonService } from '../pokemon-service.service';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
@Component({
  selector: 'app-kanto',
  standalone: true,
  imports: [PokemonCardComponent], 
  templateUrl: './kanto.component.html',
  styleUrls: ['./kanto.component.css']
})
export class KantoComponent {

  pokemonService = inject(PokemonService);

}