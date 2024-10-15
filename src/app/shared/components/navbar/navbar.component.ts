import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'


@Component({
  selector: 'navbar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  public linksNavegator = signal([
    { link: '/pokemons/page/1', name: 'Prokemons' },
    { link: '/about', name: 'About' },
    { link: '/pricing', name: 'Pricing' },
    { link: '/contact', name: 'Contact' },
  ])

}
