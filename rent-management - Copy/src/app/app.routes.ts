import { Routes } from '@angular/router';
import { TenantListComponent } from './tenant-list/tenant-list.component';
import { TenantFormComponent } from './tenant-form/tenant-form.component';

export const routes: Routes = [
  { path: '', component: TenantListComponent }, // Home page shows tenant list
  { path: 'add', component: TenantFormComponent },
  { path: 'edit/:id', component: TenantFormComponent }
];
