
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { EmployerService } from '../shared/employer.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register-employer',
  templateUrl: './register-employer.component.html',
  styleUrls: ['./register-employer.component.css'],
  providers: [EmployerService]
})
export class RegisterEmployerComponent implements OnInit {

  constructor(private employerService: EmployerService, private toaster: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) 
      form.reset();
    this.employerService.selectedEmployer = {
      CompanyName: '',
      UserName: '',
      Password: '',
      ConfirmPassword: '',
      ContactName: '',
      ContactEmail: '',
      Address: '',
      PhoneNo: '',
      FaxNo: '',
      TxtSubscribe: ''};
  }
  onSubmit(form: NgForm) {
    this.employerService.postEmployer(form.value)
    .subscribe(data => {
      this.resetForm(form);
      this.toaster.success('Employer detail has been saved successfully', 'Employer Registration');
      this.toaster.error('Employer detail is incorrect! Kindly enter the valid detail.', 'Employer Registration');
    });
  }
}
