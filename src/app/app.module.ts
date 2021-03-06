import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
// import { RecipesComponent } from './recipes/recipes.component';
// import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
// import { RecipeItemComponent } from './recipes/recipe-list/recipe-item.component';
// import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
// import { ShoppingListComponent } from './shopping-list/shopping-list.component';
// import { ShoppingListAddComponent } from './shopping-list/shopping-list-add.component';
// import { DropdownDirective } from './dropdown.directive';
import {ShoppingListService} from "./shopping-list/shopping-list.service";
import {routing} from "./app.routing";
// import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
// import { RecipeStartComponent } from './recipes/recipe-start.component';
// import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CoreModule} from "./core.module";
// import {ShoppingListModule} from "./shopping-list/shopping-list.module";
// import {RecipesModule} from "./recipes/recipes.module";
// import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // RecipesComponent,
    // RecipeListComponent,
    // RecipeItemComponent,
    // RecipeDetailComponent,
    // ShoppingListComponent,
    // ShoppingListAddComponent,
    // DropdownDirective,
    // HomeComponent,
    // RecipeEditComponent,
    // RecipeStartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // FormsModule,
    // ReactiveFormsModule,
    routing,
    CoreModule
    // ShoppingListModule,
    // RecipesModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
