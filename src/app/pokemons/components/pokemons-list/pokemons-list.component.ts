import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import PokemonsCardComponent from '../pokemons-card/pokemons-card.component';
import { SimplePokemon } from '../../interfaces/simple-pokemon.interface';

@Component({
  selector: 'pokemons-list',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PokemonsCardComponent],
  templateUrl: './pokemons-list.component.html',
  styles: ``
})
export default class PokemonsListComponent {

  public pokemons = input.required<SimplePokemon[]>();

}
