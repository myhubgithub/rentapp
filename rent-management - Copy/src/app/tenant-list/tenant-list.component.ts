import { Component, OnInit } from '@angular/core';
import { TenantService } from '../tenant.service';

@Component({
  selector: 'app-tenant-list',
  templateUrl: './tenant-list.component.html',
  styleUrls: ['./tenant-list.component.css']
})
export class TenantListComponent implements OnInit {
  tenants: any[] = [];

  constructor(private tenantService: TenantService) {}

  ngOnInit(): void {
    this.fetchTenants();
  }

  fetchTenants(): void {
    this.tenantService.getTenants().subscribe(data => {
      this.tenants = data;
    });
  }

  isRenewalNear(date: string): boolean {
    const renewalDate = new Date(date);
    const oneMonthBefore = new Date();
    oneMonthBefore.setMonth(oneMonthBefore.getMonth() + 1);
    
    return renewalDate <= oneMonthBefore;
  }

  confirmDelete(id: number): void {
    if (confirm('Are you sure you want to delete this tenant?')) {
      this.tenantService.deleteTenant(id).subscribe(() => {
        this.fetchTenants();
      });
    }
  }
}
