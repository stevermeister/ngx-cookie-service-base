import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'

@Component({
  selector: 'app-root',
  template: `
    Cookie test: {{cookieValue}}
  `,
  styles: []
})
export class AppComponent {

  cookieValue

  constructor( private cookieService: CookieService ) { 
    //this.cookieService.set( 'Test', 'Hello World' );
    this.cookieValue = this.cookieService.get('Test');
  }
}
