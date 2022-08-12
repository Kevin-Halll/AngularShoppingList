import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesAddComponent } from './categories-add/categories-add.component';
import { CategoriesEditComponent } from './categories-edit/categories-edit.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { ShoppingAddComponent } from './shopping-add/shopping-add.component';
import { ShoppingDisplayComponent } from './shopping-display/shopping-display.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

const routes: Routes = [
  {path:'Display', component:ShoppingDisplayComponent},
  {path:'Add', component:ShoppingAddComponent},
  {path:'edit-item/:_id', component:ShoppingEditComponent},
  {path:'add-category', component:CategoriesAddComponent},
  {path:'categories', component:CategoriesListComponent},
  {path:'edit-category/:_id', component:CategoriesEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
