import { ApplicationRef, ChangeDetectionStrategy, Component, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { toSignal } from '@angular/core/rxjs-interop';

import PokemonsListComponent from "../../pokemons/components/pokemons-list/pokemons-list.component";
import { PokemonListSkeletonComponent } from "./ui/pokemon-list-skeleton/pokemon-list-skeleton.component";

import { PokemonsService } from '../../pokemons/services/pokemons.service';

import { SimplePokemon } from '../../pokemons/interfaces/simple-pokemon.interface';
import { map, tap } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'pokemons-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, PokemonsListComponent, PokemonListSkeletonComponent],
  templateUrl: './pokemons-page.component.html',
  styles: ``
})
export default class PokemonsPageComponent {
  
  private pokemonService = inject(PokemonsService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private title = inject(Title);

  public pokemons = signal<SimplePokemon[]>([])

  public currentPage = toSignal(
    this.route.params.pipe(
      map(params => params['page'] ?? '1'),
      map(page => ( isNaN(+page) ? 1 : +page )),
      map(page => Math.max( 1, page ))
    )
  );


  // public isLoading = signal(true);
  
  // private appRef = inject(ApplicationRef);
  
  // private $appState = this.appRef.isStable.subscribe( isStable => {
  //   console.log(isStable);
  // });

  
  // ngOnInit(): void {
    // console.log(this.appRef.isStable);
    // setTimeout(() => {
    //   this.isLoading.set(false);
    // },5000)

  //   this.loadPokemon();

  // }

  public loadOnPageChange = effect( () => {
    this.loadPokemon( this.currentPage() );
  },{
    allowSignalWrites: true,
  });
  
  public loadPokemon( page = 0 ) {

    // const pageToLoad = this.currentPage()! + page;

    this.pokemonService.loadingPage(page)
    .pipe(
      // tap( () => this.router.navigate([], { queryParams: {page: pageToLoad }})),
      tap( () => this.title.setTitle(`Pokemons SSR - Page ${page}`) ),
    )
    .subscribe( pokemons =>  this.pokemons.set(pokemons) );
    
  }

  // ngOnDestroy(): void {
  //   this.$appState.unsubscribe();  
  // }

}
