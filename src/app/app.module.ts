import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingAddComponent } from './shopping-add/shopping-add.component';
import { ShoppingDisplayComponent } from './shopping-display/shopping-display.component';
import { ShoppingListServiceService } from './shopping-list-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { CategoriesAddComponent } from './categories-add/categories-add.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoriesEditComponent } from './categories-edit/categories-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingAddComponent,
    ShoppingDisplayComponent,
    ShoppingEditComponent,
    CategoriesAddComponent,
    CategoriesListComponent,
    CategoriesEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ShoppingListServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
