import { Component, inject } from '@angular/core';
import { PokemonService } from '../pokemon-service.service';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
@Component({
  selector: 'app-johto',
  standalone: true,
  imports: [PokemonCardComponent],
  templateUrl: './johto.component.html',
  styleUrl: './johto.component.css'
})
export class JohtoComponent {   // ⭐ MUST match the import name

  pokemonService = inject(PokemonService);

}