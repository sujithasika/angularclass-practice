import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sampleproducts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sampleproducts.component.html',
  styleUrls: ['./sampleproducts.component.css']
})

export class sampleproducts{

constructor(public api:ApiService){}
heading:string="productdisplay";
  // sampleArr:any =
  // [
  //   { productname:"aaa",productprice:344},
  //   { productname:"aaa",productprice:344},
  //   { productname:"aaa",productprice:344},
  //   { productname:"aaa",productprice:344},
  //   { productname:"aaa",productprice:344},
  // ];
   prod:any;
  displayproduct(){
    console.log("sujitha");
    this.api.getproduct().subscribe((res:any)=>{
      this.prod=res;
     console.log("prod",this.prod);
    });
   }  
}

