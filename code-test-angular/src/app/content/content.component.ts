import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MenuComponent } from '../menu/menu.component';
import { MyServiceService } from '../my-service.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [ HeaderComponent, MenuComponent,RouterLink,CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  customers: any = [];

  constructor(private customerService: MyServiceService){}

  ngOnInit(){
    this.getAllCustomer();
  }

  getAllCustomer(){
    this.customerService.getAllCustomer().subscribe((res)=>{
      console.log(res);
      this.customers= res;

    })
  }

  deleteCustomer(id: number){


    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        this.customerService.deleteCustomer(id).subscribe((res)=>{
          console.log(res);
          this.getAllCustomer();
        })
      }
    });


  }

}
