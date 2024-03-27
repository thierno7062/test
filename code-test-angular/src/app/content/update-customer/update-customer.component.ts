import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyServiceService } from '../../my-service.service';

@Component({
  selector: 'app-update-customer',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.css'
})
export class UpdateCustomerComponent {


  updateCustomerForm !: FormGroup;
  id: number = this.activatedRoute.snapshot.params["id"]

  constructor(private activatedRoute: ActivatedRoute, private service: MyServiceService,
    private fb: FormBuilder, private router: Router){}

  ngOnInit(){
    this.updateCustomerForm= this.fb.group({
      name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]]
    })

    this.getCustomerById();
  }

  getCustomerById(){
    this.service.getCustomerById(this.id).subscribe((res) =>{
      console.log(res);
      this.updateCustomerForm.patchValue(res);
    })
  }

  updateCustomer(){
    this.service.updateCustomer(this.id, this.updateCustomerForm.value).subscribe((res)=>{
      console.log(res);
      if (res.id != null) {
        this.router.navigateByUrl("");
      }
    })
  }
}
