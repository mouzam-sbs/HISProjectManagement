import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HisCustomerModel } from '../models/HisCustomerModel';
import { ProductserviceService } from '../services/productservice.service';
import { HisProductModel } from '../models/his-product-model';

@Component({
  selector: 'app-hisproduct-ui',
  templateUrl: './hisproduct-ui.component.html',
  styleUrls: ['./hisproduct-ui.component.css']
})
export class HISProductUIComponent implements OnInit {
   

  postProductForm: FormGroup;
  product: HisProductModel = new HisProductModel();
  productList: HisProductModel[] = [];
  buttonType: string;
  search: string;
  p: string;

  constructor(private fb: FormBuilder, private service: ProductserviceService) { }


  ngOnInit() {
    this.postProductForm = this.fb.group(
      {
        Name: ['', [Validators.required]],
        Description: ['', [Validators.required]]
        
      });
    this.getAllProducts();
  }

  get Name() {
    return this.postProductForm.get('Name');
  }

  get Description() {
    return this.postProductForm.get('Description');
  }
    
  postProduct() {
    if (this.postProductForm.valid) {
      this.service.postProduct(this.product).subscribe(res => {
        alert("Customer Posted Successfully!");
        this.postProductForm.reset();
        this.getAllProducts();
      });
    }
  }

  putProduct() {
    if (this.postProductForm.valid) {
      this.service.putProduct(this.product).subscribe(res => {
        alert("Customer Update Successfully");
        this.postProductForm.reset();
        this.getAllProducts();
      })
    }
  }

  deleteProduct(id: number) {
    if (confirm('Are you sure?')) {
      this.service.deleteProduct(id).subscribe(res => {
        alert("Record deleted successfully!");
        this.getAllProducts();
      });
    }
  }

  onSubmit(buttonType): void {
    if (buttonType === "Create") {
      this.postProduct()
    }
    if (buttonType === "Update") {
      this.putProduct();
    }

  }

  getAllProducts() {
    debugger;
    this.service.getAllProducts().subscribe(res => {
      this.productList = res;
    })
  }
  imageToShow: any;
  getCustomerbyId(id: number) {
    debugger;
    this.service.getProductbyId(id).subscribe(res => {

      this.product = res;
    })

  }
}
