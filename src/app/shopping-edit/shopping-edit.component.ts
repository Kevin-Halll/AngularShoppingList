import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Items } from '../Models/interfaces';
import { ShoppingListServiceService } from '../shopping-list-service.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  addList:any;
  constructor( private ShoppingListServiceService:ShoppingListServiceService, private route: ActivatedRoute,
    private fb:FormBuilder,
    private routes:Router,) {}

  ngOnInit(): void {
    this.ShoppingListServiceService.getItemById(this.route.snapshot.params['_id'])
    .subscribe((results:any) => {
      console.log(results);
      console.log(this.route.snapshot.params['_id']);
      this.addList = this.fb.group ({
        item_name:[results.data.item_name ],
        category:[results.data.category],
        price:[results.data.price],
        quantity:[results.data.quantity]

      })
      
    })

  }
  onSubmit() {
    console.log(this.addList.value);
    this.ShoppingListServiceService.updateItem(this.route.snapshot.params['_id'], this.addList.value).subscribe();
    alert("Successful");
    this.routes.navigate(['/Display']);
  }

}
