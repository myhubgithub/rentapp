import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Rent Management</h1>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent { }
