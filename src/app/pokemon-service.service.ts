import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  kanto = signal([
    { name: 'Gengar', type: 'Ghost/Poison', item: 'Light Ball', desc: 'Electric mouse Pokemon' },
    { name: 'Snorlax', type: 'Snormal', item: 'Charcoal', desc: 'Flame Pokemon' },
    { name: 'Dragonite', type: 'Dragon/Flying', item: 'Light Ball', desc: 'Electric mouse Pokemon' },
    { name: 'Scyther', type: 'Bug/Flying', item: 'Light Ball', desc: 'Electric mouse Pokemon' },
    { name: 'Charizard', type: 'Fire/Flying', item: 'Light Ball', desc: 'Electric mouse Pokemon' },
    { name: 'Articuno', type: 'Ice/Flying', item: 'Light Ball', desc: 'Electric mouse Pokemon' },

  ]);

  johto = signal([
    { name: 'Espeon', type: 'Psychic', item: 'Charcoal', desc: 'Volcano Pokemon' },
    { name: 'Lugia', type: 'Psychic/Flying', item: 'Magnet', desc: 'Light Pokemon' },
    { name: 'Gligar', type: 'Ground/Flying', item: 'Light Ball', desc: 'Electric mouse Pokemon' },
    { name: 'Noctowl', type: 'Normal/Flying', item: 'Light Ball', desc: 'Electric mouse Pokemon' },
    { name: 'Celebi', type: 'Psychic/Grass', item: 'Light Ball', desc: 'Electric mouse Pokemon' },
    { name: 'Totodile', type: 'Water', item: 'Light Ball', desc: 'Electric mouse Pokemon' },
  ]);

  hoenn = signal([
    { name: 'Blaziken', type: 'Fire/Fighting', item: 'Focus Band', desc: 'Blaze Pokemon' },
    { name: 'Absol', type: 'Dark', item: 'Twisted Spoon', desc: 'Embrace Pokemon' },
    { name: 'Rayquaza', type: 'Dragon/Flying', item: 'Focus Band', desc: 'Blaze Pokemon' },
    { name: 'Groudon', type: 'Ground', item: 'Focus Band', desc: 'Blaze Pokemon' },
    { name: 'Deoxys', type: 'Psychic', item: 'Focus Band', desc: 'Blaze Pokemon' },
    { name: 'Wailord', type: 'Water', item: 'Focus Band', desc: 'Blaze Pokemon' },
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

  addToCart(item:any){
    this.cart.update(c => [...c, item]);
  }

  total = computed(() =>
    this.cart().reduce((sum, item) => sum + item.price, 0)
  );

}