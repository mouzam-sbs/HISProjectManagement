import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HisCustomerModel } from '../models/HisCustomerModel';
import { CustomeserviceService } from '../services/customeservice.service';

@Component({
  selector: 'app-hiscustomer-ui',
  templateUrl: './hiscustomer-ui.component.html',
  styleUrls: ['./hiscustomer-ui.component.css']
})
export class HISCustomerUIComponent implements OnInit {
 
  postCustomerForm: FormGroup;
  customer: HisCustomerModel = new HisCustomerModel();
  customerList: HisCustomerModel[] = [];
  buttonType: string;
  search: string;
  p: string;

  constructor(private fb: FormBuilder, private service: CustomeserviceService) { }


  ngOnInit() {
    this.postCustomerForm = this.fb.group(
      {
        customerName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: ['', [Validators.required]],
        address: ['', [Validators.required]]
      });
    this.getAllCustomers();
  }

  get customerName() {
    return this.postCustomerForm.get('customerName');
  }

  get email() {
    return this.postCustomerForm.get('email');
  }

  get phoneNumber() {
    return this.postCustomerForm.get('phoneNumber');
  }

  get address() {
    return this.postCustomerForm.get('address');
  }
  customer2Send = {}; user = {};
  formData = new FormData();
  upload(files: FileList) {
    this.formData.append(files.item(0).name, files.item(0));
  }
  postCustomer() {
    if (this.postCustomerForm.valid) {
      this.customer2Send = this.postCustomerForm.value;
      this.formData.append('myModel', JSON.stringify(this.customer2Send));
      this.service.postCustomer(this.formData).subscribe(res => {
        alert("Customer Posted Successfully!");
        this.postCustomerForm.reset();
        this.getAllCustomers();
      });
    }
  }

  putCustomer() {
    if (this.postCustomerForm.valid) {
      this.service.putCustomer(this.customer).subscribe(res => {
        alert("Customer Update Successfully");
        this.postCustomerForm.reset();
        this.getAllCustomers();
      })
    }
  }

  deleteCustomer(id: number) {
    if (confirm('Are you sure?')) {
      this.service.deleteCustomer(id).subscribe(res => {
        alert("Record deleted successfully!");
        this.getAllCustomers();
      });
    }
  }

  onSubmit(buttonType): void {
    if (buttonType === "Create") {
      this.postCustomer()
    }
    if (buttonType === "Update") {
      this.putCustomer();
    }

  }

  getAllCustomers() {
    debugger;
    this.service.getAllCustomers().subscribe(res => {
      this.customerList = res;
    })
  }
  imageToShow: any;
  getCustomerbyId(id: number) {
    debugger;
    this.service.getCustomerId(id).subscribe(res => {
      
      this.customer = res;
    })

  }

}
