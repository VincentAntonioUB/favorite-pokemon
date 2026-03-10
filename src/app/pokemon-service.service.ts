import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  kanto = signal([
    { name: 'Gengar', type: 'Ghost/Poison', item: 'Light Ball', desc: 'Electric mouse Pokemon', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png' },
    { name: 'Snorlax', type: 'Snormal', item: 'Charcoal', desc: 'Flame Pokemon', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png' },
    { name: 'Dragonite', type: 'Dragon/Flying', item: 'Light Ball', desc: 'Electric mouse Pokemon', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png' },
    { name: 'Scyther', type: 'Bug/Flying', item: 'Light Ball', desc: 'Electric mouse Pokemon', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png' },
    { name: 'Charizard', type: 'Fire/Flying', item: 'Light Ball', desc: 'Electric mouse Pokemon', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' },
    { name: 'Articuno', type: 'Ice/Flying', item: 'Light Ball', desc: 'Electric mouse Pokemon', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png' },

  ]);

  johto = signal([
    { name: 'Espeon', type: 'Psychic', item: 'Charcoal', desc: 'Volcano Pokemon', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png' },
    { name: 'Lugia', type: 'Psychic/Flying', item: 'Magnet', desc: 'Light Pokemon', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png' },
    { name: 'Gligar', type: 'Ground/Flying', item: 'Light Ball', desc: 'Electric mouse Pokemon', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/207.png' },
    { name: 'Noctowl', type: 'Normal/Flying', item: 'Light Ball', desc: 'Electric mouse Pokemon', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/164.png' },
    { name: 'Celebi', type: 'Psychic/Grass', item: 'Light Ball', desc: 'Electric mouse Pokemon', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/251.png' },
    { name: 'Totodile', type: 'Water', item: 'Light Ball', desc: 'Electric mouse Pokemon', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png' },
  ]);

  hoenn = signal([
    { name: 'Blaziken', type: 'Fire/Fighting', item: 'Focus Band', desc: 'Blaze Pokemon', image: 'https://img.pokemondb.net/sprites/diamond-pearl/normal/blaziken-f.png' },
    { name: 'Absol', type: 'Dark', item: 'Twisted Spoon', desc: 'Embrace Pokemon', image: 'https://img.pokemondb.net/sprites/ruby-sapphire/normal/absol.png' },
    { name: 'Rayquaza', type: 'Dragon/Flying', item: 'Focus Band', desc: 'Blaze Pokemon', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png' },
    { name: 'Groudon', type: 'Ground', item: 'Focus Band', desc: 'Blaze Pokemon', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png' },
    { name: 'Deoxys', type: 'Psychic', item: 'Focus Band', desc: 'Blaze Pokemon', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/386.png' },
    { name: 'Wailord', type: 'Water', item: 'Focus Band', desc: 'Blaze Pokemon', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/321.png' },
  ]);

  items = signal([
    { name: 'Potion', price: 300 },
    { name: 'Super Potion', price: 700 },
    { name: 'Hyper Potion', price: 1200 },
    { name: 'Revive', price: 1500 },
    { name: 'Antidote', price: 100 },
    { name: 'Paralyze Heal', price: 200 },
    { name: 'Burn Heal', price: 250 },
    { name: 'Ice Heal', price: 250 },
    { name: 'Full Heal', price: 600 },
    { name: 'Poke Ball', price: 200 }
  ]);

  cart = signal<any[]>([]);

  addToCart(item: any) {
    this.cart.update(c => [...c, { item, quantity: 1 }]);
  }

  total = computed(() =>
    this.cart().reduce((sum, entry: any) => sum + entry.item.price * entry.quantity, 0)
  );

}