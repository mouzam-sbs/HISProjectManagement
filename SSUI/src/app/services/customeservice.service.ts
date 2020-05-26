import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { HisCustomerModel } from '../models/HisCustomerModel';
import { debug } from 'util';

@Injectable({
  providedIn: 'root'
})
export class CustomeserviceService {
   

  private baseURL: string = environment.apiURL;

  baseUrl2: string = this.baseURL + "HISCustomer";

  constructor(private api: HttpClient) { }

  //Customer Services Start
  //postCustomer(customer: HisCustomerModel) {
  //  return this.api.post<HisCustomerModel>("http://localhost:7000/api/HISCustomer/", customer);
  //}
  postCustomer(formData: FormData) {
    return this.api.post<HisCustomerModel>("http://localhost:7000/api/HISCustomer/", formData);
  }
  

  getAllCustomers() {
    debugger;
    return this.api.get<HisCustomerModel[]>("http://localhost:7000/api/HISCustomer/");
  }

  putCustomer(customer: HisCustomerModel) {
    return this.api.put<HisCustomerModel>(this.baseUrl2 + "/" + customer.id, customer);
  }

  getCustomerId(id: number) {
    return this.api.get<HisCustomerModel>(this.baseUrl2 + "/" + id);
  }

  deleteCustomer(id: number) {
    return this.api.delete<HisCustomerModel>(this.baseUrl2 + "/" + id);
  }

  getCustomerLogo(customerId: number) {    
    return this.api.get("http://localhost:7000/api/HISCustomer/getCustomerLogo/" + customerId, { responseType: "blob" });
  }
}
