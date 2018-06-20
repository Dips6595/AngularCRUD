import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ClientService } from '../shared/client.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent implements OnInit {

  constructor(private clientService: ClientService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)  
      form.reset();
    this.clientService.selectedClient = {
      LoginID: '',
      Pass: '',
      confirmPass: '',
      FirstName: '',
      LastName: '',
      Address: '',
      Email: '',
      HomePhoneNo: null,
      CellPhoneNo: null,
      TxtSubscribe: ''};
    }

  onSubmit(form: NgForm) {
    this.clientService.postClient(form.value)
    .subscribe(data => {
        this.resetForm(form);
        this.toastr.success('New Record Added Successfully', 'Client Register');
    });
  }

}
