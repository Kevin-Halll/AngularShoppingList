import { Component, OnInit } from '@angular/core';
import { Category } from '../Models/interfaces';
import { ShoppingListServiceService } from '../shopping-list-service.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
  categories:Category[] = [];

  constructor(private shoppingService:ShoppingListServiceService) { }

  ngOnInit(): void {
    this.shoppingService.getAllGroups().subscribe(results => {
      this.categories = results.data
      
    })
  }

  removeGroup(id:string){
    this.shoppingService.deleteGroup(id).subscribe({
      next(value) {
        
      },
    })
  }
}
