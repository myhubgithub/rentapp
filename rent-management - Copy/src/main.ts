import { enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
 
import { AppComponent } from './app/app.component';
import { TenantListComponent } from './app/tenant-list/tenant-list.component';
import { TenantFormComponent } from './app/tenant-form/tenant-form.component';
import { routes } from './app/app.routes';

 

@NgModule({
  declarations: [
    AppComponent,
    TenantListComponent,
    TenantFormComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
