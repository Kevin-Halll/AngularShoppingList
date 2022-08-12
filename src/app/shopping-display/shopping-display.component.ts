import { Items } from './../Models/interfaces';
import { Component, OnInit } from '@angular/core';
import { ShoppingListServiceService } from '../shopping-list-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-display',
  templateUrl: './shopping-display.component.html',
  styleUrls: ['./shopping-display.component.css']
})
export class ShoppingDisplayComponent implements OnInit {
  items: Items[] = []
  // Item:Items= {
  //   "_id":"0001",
  //   "category":"Dairy",
  //   "item_name":"Milk",
  //   "quantity": 2,
  //   "price": 300
  // };
  // Items: Items[] = [this.Item,
  //     {
  //       "_id":"0002",
  //       "category":"Dairy",
  //       "item_name":"Yogurt",
  //       "quantity": 10,
  //       "price": 500
  //     },
  //     {
  //       "_id":"0003",
  //       "category":"Vegetable",
  //       "item_name":"Carrott",
  //       "quantity": 4,
  //       "price": 430,
  //     },
  //     {
  //       "_id":"0004",
  //       "category":"Vegetable",
  //       "item_name":"Tomato",
  //       "quantity": 5,
  //       "price": 100,
  //     },

  // ]

  constructor(private shoppingListService:ShoppingListServiceService, private urlRoute : Router) { }

  ngOnInit(): void {
    this.getlist();
  }
  getlist() {
    this.shoppingListService.getAllItems().subscribe(results=>{this.items = results.data})
  }

  removeItem(id:string) {
    console.log(id);
    this.shoppingListService.deleteItem(id).subscribe(
      {
      next:(res) => {
        alert(`${this.items[0].item_name} has been deleted `)
        this.getlist()
        // this.items.filter(i => i._id !== id)
        // this.urlRoute.navigate(['/Display'])
      },
      error:(err) => {
        alert('error deleting student ' + err)
        console.log(err);
        
      }
    }
    )
    
  }
}
