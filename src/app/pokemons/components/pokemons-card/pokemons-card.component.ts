import { ChangeDetectionStrategy, Component, computed, effect, input } from '@angular/core';
import { SimplePokemon } from '../../interfaces/simple-pokemon.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'pokemons-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './pokemons-card.component.html',
  styles: ``
})
export default class PokemonsCardComponent {

  public pokemon = input.required<SimplePokemon>();

  // logEffect = effect(() => {
  //   console.log('PokemonCard: ', this.pokemon());
  // });

  public pokemonImg = computed(() => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.pokemon().id}.png`)
}
