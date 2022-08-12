import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingListServiceService } from '../shopping-list-service.service';

@Component({
  selector: 'app-categories-edit',
  templateUrl: './categories-edit.component.html',
  styleUrls: ['./categories-edit.component.css']
})
export class CategoriesEditComponent implements OnInit {

  addGroup:any;
  constructor( private ShoppingListServiceService:ShoppingListServiceService, private route: ActivatedRoute,
    private fb:FormBuilder,
    private routes:Router,) {}

  ngOnInit(): void {
    this.ShoppingListServiceService.getGroupById(this.route.snapshot.params['_id'])
    .subscribe(results => {
      this.addGroup = this.fb.group ({
        category_name:[results.data.category_name]
      })
    })
  }
  onSubmit() {

    console.log(this.addGroup.value);
    this.ShoppingListServiceService.updateGroup(this.route.snapshot.params['_id'],this.addGroup.value).subscribe();
    alert("Category Updated");
    this.routes.navigate(['/categories']);
  }

}
