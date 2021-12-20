import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any=[]
  public productList =new BehaviorSubject<any>([]);

  constructor() { }
  getProducts()
  {
    return this.productList.asObservable();
  }

  setProducts(product: any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }
  getTotalPrice(){
    let grandTotal =0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
  }

  removeCardItem(){
    this.cartItemList.map((a:any, index:any)=>{
    
    })
  }

}
