import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  kanto = signal([
    { name: 'Gengar', 
      type: 'Ghost/Poison', 
      item: 'Wise Glass', 
      desc: 'A mischievous ghost Pokémon that hides in shadows and loves playing spooky tricks on people.', 
      image: 'https://projectpokemon.org/images/normal-sprite/gengar.gif' },
    { name: 'Snorlax', 
      type: 'Snormal', 
      item: 'Focus Band', 
      desc: 'A gigantic, sleepy Pokémon known for eating huge amounts of food and blocking paths while napping.', 
      image: 'https://projectpokemon.org/images/normal-sprite/snorlax.gif' },
    { name: 'Dragonite', 
      type: 'Dragon/Flying', 
      item: 'Rapid Fire Scarf', 
      desc: 'A powerful but kind dragon Pokémon that flies across oceans and rescues people in trouble.', 
      image: 'https://projectpokemon.org/images/normal-sprite/dragonite.gif' },
    { name: 'Scyther', 
      type: 'Bug/Flying', 
      item: 'Razor Claw', 
      desc: 'A fast, mantis-like Pokémon with sharp scythe arms used for swift attacks.', 
      image: 'https://projectpokemon.org/images/normal-sprite/scyther.gif' },
    { name: 'Charizard', 
      type: 'Fire/Flying', 
      item: 'Scope Lens', 
      desc: 'A fierce dragon-like that breathes intense flames and soars high in the sky.',
       image: 'https://projectpokemon.org/images/normal-sprite/charizard.gif' },
    { name: 'Articuno', 
      type: 'Ice/Flying', 
      item: 'Heavy Duty Boots', 
      desc: 'A graceful legendary bird that controls ice and creates snowstorms as it flies.', 
      image: 'https://projectpokemon.org/images/normal-sprite/articuno.gif' },

  ]);

  johto = signal([
    { name: 'Espeon', 
      type: 'Psychic', 
      item: 'Twisted Spoon', 
      desc: 'An elegant psychic Pokémon that predicts attacks using its powerful mind and keen senses.', 
      image: 'https://projectpokemon.org/images/normal-sprite/espeon.gif' },
    { name: 'Lugia', 
      type: 'Psychic/Flying', 
      item: 'Leftovers', 
      desc: 'A majestic sea guardian whose immense power can calm or create powerful storms.', 
      image: 'https://projectpokemon.org/images/normal-sprite/lugia.gif' },
    { name: 'Gligar', 
      type: 'Ground/Flying', 
      item: 'Focus Band', 
      desc: 'A scorpion-like Pokémon that glides through the air and attacks with its pincers and tail.', 
      image: 'https://projectpokemon.org/images/normal-sprite/gligar.gif' },
    { name: 'Noctowl', 
      type: 'Normal/Flying', 
      item: 'Pink Bow', 
      desc: 'A wise owl Pokémon with exceptional night vision and silent flight.', 
      image: 'https://projectpokemon.org/images/normal-sprite/noctowl.gif' },
    { name: 'Celebi', 
      type: 'Psychic/Grass', 
      item: 'Leftovers', 
      desc: 'A small mythical Pokémon that travels through time and protects forests.', 
      image: 'https://projectpokemon.org/images/normal-sprite/celebi.gif' },
    { name: 'Totodile', 
      type: 'Water', 
      item: 'Mystic Water', 
      desc: 'A playful crocodile Pokémon that loves biting things with its strong jaws.', 
      image: 'https://projectpokemon.org/images/normal-sprite/totodile.gif' },
  ]);

  hoenn = signal([
    { name: 'Blaziken', 
      type: 'Fire/Fighting', 
      item: 'Charcoal', 
      desc: 'A fiery martial-arts Pokémon that delivers blazing kicks and powerful punches.', 
      image: 'https://projectpokemon.org/images/normal-sprite/blaziken.gif' },
    { name: 'Absol', 
      type: 'Dark', 
      item: 'Scope Lens', 
      desc: 'A mysterious Pokémon said to appear before disasters, warning people of danger.', 
      image: 'https://projectpokemon.org/images/normal-sprite/absol.gif' },
    { name: 'Rayquaza', 
      type: 'Dragon/Flying', 
      item: 'Leftovers', 
      desc: 'A massive sky serpent that rules the atmosphere and soars above the clouds.', 
      image: 'https://projectpokemon.org/images/normal-sprite/rayquaza.gif' },
    { name: 'Groudon', 
      type: 'Ground', 
      item: 'Soft Sand', 
      desc: 'A colossal legendary Pokémon that expands land and commands volcanic power.', 
      image: 'https://projectpokemon.org/images/normal-sprite/groudon.gif' },
    { name: 'Deoxys', 
      type: 'Psychic', 
      item: 'Twisted Spoon', 
      desc: 'An alien-like Pokémon born from a mutated virus that can change its form in battle.', 
      image: 'https://img.pokemondb.net/sprites/ruby-sapphire/normal/deoxys-normal.png' },
    { name: 'Wailord', 
      type: 'Water', 
      item: 'Mystic Water', 
      desc: 'An enormous blue-whale Pokémon that drifts through the ocean with its massive body.', 
      image: 'https://projectpokemon.org/images/normal-sprite/wailord.gif' },
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