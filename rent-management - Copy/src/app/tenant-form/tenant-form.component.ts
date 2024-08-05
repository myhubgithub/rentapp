import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TenantService } from '../tenant.service';

@Component({
  selector: 'app-tenant-form',
  templateUrl: './tenant-form.component.html',
  styleUrls: ['./tenant-form.component.css']
})
export class TenantFormComponent implements OnInit {
  tenantForm: FormGroup;
  tenantId: number | null = null;
  months: number[] = Array.from({ length: 12 }, (_, i) => i + 1);

  constructor(
    private fb: FormBuilder,
    private tenantService: TenantService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.tenantForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      mobile: ['', Validators.required],
      agreement_details: ['', Validators.required],
      rent_amount: ['', Validators.required],
      paid_amount: ['', Validators.required],
      renewal_date: ['', Validators.required],
      payment_date: ['', Validators.required],
      rent_tenure: ['', Validators.required],
      agreement_upload: [null],
      aadhar_upload: [null]
    });
  }

  ngOnInit(): void {
    this.tenantId = this.route.snapshot.params['id'];
    if (this.tenantId) {
      this.tenantService.getTenantById(this.tenantId).subscribe(tenant => {
        this.tenantForm.patchValue(tenant);
      });
    }
  }

  onFileChange(event: any, field: string): void {
    const file = event.target.files[0];
    const control = this.tenantForm.get(field);
    if (control) {
      control.setValue(file);
    }
  }

  onSubmit(): void {
    const formData = new FormData();
    for (const key in this.tenantForm.value) {
      if (this.tenantForm.value.hasOwnProperty(key)) {
        formData.append(key, this.tenantForm.value[key]);
      }
    }

    if (this.tenantId) {
      formData.append('id', this.tenantId.toString());
      this.tenantService.updateTenant(formData).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.tenantService.addTenant(formData).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
