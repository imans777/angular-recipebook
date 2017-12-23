import {RouterModule, Routes} from "@angular/router";
// import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {HomeComponent} from "./home.component";
// import {RECIPE_ROUTES} from "./recipes/recipes.routes";

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  // {path: 'recipes', component: RecipesComponent},
  {path: 'recipes', loadChildren: 'app/recipes/recipes.module#RecipesModule'},
  // {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'shopping-list', loadChildren: 'app/shopping-list/shopping-list.module#ShoppingListModule'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
