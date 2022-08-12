import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ShoppingListServiceService } from '../shopping-list-service.service';

@Component({
  selector: 'app-categories-add',
  templateUrl: './categories-add.component.html',
  styleUrls: ['./categories-add.component.css']
})
export class CategoriesAddComponent implements OnInit {

  addGroup:any;
  constructor( private ShoppingListServiceService:ShoppingListServiceService,
    private fb:FormBuilder,
    private routes:Router,) {
      this.addGroup = fb.group ({
        category_name:['']
      })

    }

  ngOnInit(): void {

  }
  onSubmit() {

    console.log(this.addGroup.value);
    this.ShoppingListServiceService.createGroup(this.addGroup.value).subscribe();
    alert("Category Added");
    this.routes.navigate(['/categories']);
  }
}
