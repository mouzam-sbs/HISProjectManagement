import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { HisProductModel } from '../models/his-product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
   

  private baseURL: string = environment.apiURL;

  baseUrl2: string = this.baseURL + "HISProduct";

  constructor(private api: HttpClient) { }

  //Customer Services Start
  postProduct(product: HisProductModel) {
    return this.api.post<HisProductModel>(this.baseUrl2, product);
  }
  //postProduct(formData: FormData) {
  //  return this.api.post<HisProductModel>(this.baseUrl2, formData);
  //}


  getAllProducts() {
    return this.api.get<HisProductModel[]>(this.baseUrl2);
  }

  putProduct(product: HisProductModel) {
    return this.api.put<HisProductModel>(this.baseUrl2 + "/" + product.Id, product);
  }

  getProductbyId(id: number) {
    return this.api.get<HisProductModel>(this.baseUrl2 + "/" + id);
  }

  deleteProduct(id: number) {
    return this.api.delete<HisProductModel>(this.baseUrl2 + "/" + id);
  }
  
}
