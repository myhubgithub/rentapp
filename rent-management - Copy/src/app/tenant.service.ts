import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TenantService {
  private apiUrl = 'https://myladoorinfotech.com/rentapp/api.php';

  constructor(private http: HttpClient) { }

  getTenants(): Observable<any> {
    return this.http.get(`${this.apiUrl}?action=getTenants`);
  }

  getTenantById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?action=getTenantById&id=${id}`);
  }

  addTenant(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}?action=addTenant`, formData);
  }

  updateTenant(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}?action=updateTenant`, formData);
  }

  deleteTenant(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?action=deleteTenant&id=${id}`);
  }
}

