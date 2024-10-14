import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'pricing',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './pricing-page.component.html',
  styles: ``
})
export default class PricingPageComponent implements OnInit {
  
  private title = inject(Title);
  private meta = inject(Meta);

  private platform = inject(PLATFORM_ID);

  ngOnInit(): void {
    // Cuando estamos en SSR en tiempo de desarrollo se ejecuta el codigo tanto en el navegador
    // como en NodeJS (servidor). Para determinar si podemos ejecutar window, document, navigator, o location 

    console.log( isPlatformServer(this.platform) );
    console.log( isPlatformBrowser(this.platform) );

    // Esto no cambia el titulo en el html como la sentencia de abajo
    if (isPlatformBrowser(this.platform)) {
      document.title = 'Pricing Page';
    }

    // this.title.setTitle('Pricing Page');
    this.meta.updateTag({ name: 'decripcion', content: 'Esta es mi Pricing page' });
    this.meta.updateTag({ name: 'og:title', content: 'Pricing Page' });
    this.meta.updateTag({ name: 'keywords', content: 'Pricing,Page,Angular,Angular 18,SSR,ssr' });
  }


}
