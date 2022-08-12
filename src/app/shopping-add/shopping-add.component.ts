import { Items } from './../Models/items';

import { Component, OnInit } from '@angular/core';
import { ShoppingListServiceService } from '../shopping-list-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../Models/interfaces';

@Component({
  selector: 'app-shopping-add',
  templateUrl: './shopping-add.component.html',
  styleUrls: ['./shopping-add.component.css']
})
export class ShoppingAddComponent implements OnInit {

  addList:any;
  categories:Category[] = [];

  constructor( private ShoppingListServiceService:ShoppingListServiceService,
    private fb:FormBuilder,
    private routes:Router,) {
      this.addList = fb.group ({
        item_name:['' ],
        category:[''],
        price:[],
        quantity:[]

      })

    }

  ngOnInit(): void {
    this.ShoppingListServiceService.getAllGroups().subscribe(results => {
      this.categories = results.data
    })
  }
  onSubmit() {

    console.log(this.addList.value);
    this.ShoppingListServiceService.createItem(this.addList.value).subscribe();
    alert("Successful");
    this.routes.navigate(['/Display']);
  }
}
