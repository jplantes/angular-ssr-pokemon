import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'about',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './about-page.component.html',
  styles: ``
})
export default class AboutPageComponent implements OnInit {
  
  private title = inject(Title);
  private meta = inject(Meta);


  ngOnInit(): void {
    this.title.setTitle('About Page');
    this.meta.updateTag({ name: 'decripcion', content: 'Esta es mi about page' });
    this.meta.updateTag({ name: 'og:title', content: 'About Page' });
    this.meta.updateTag({ name: 'keywords', content: 'About,Page,Angular,Angular 18,SSR,ssr' });
  }


}
