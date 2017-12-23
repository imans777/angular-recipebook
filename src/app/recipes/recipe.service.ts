import {EventEmitter, Injectable} from '@angular/core';
import { Recipe } from "./recipe";
import {Ingredient} from "../ingredient";
// import {Headers, Http} from "@angular/http"
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import "rxjs/Rx";
import "rxjs/add/operator/map"

@Injectable()
export class RecipeService {
  recipesChanged = new EventEmitter<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Iman', 'Sahebi', 'https://cdn.thingiverse.com/renders/6f/c4/ba/98/12/0caef2cb548d6a1bfb5241e7bfc4e411_preview_card.jpg', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('Ali', 'Tough', 'https://cdn.thingiverse.com/renders/6f/c4/ba/98/12/0caef2cb548d6a1bfb5241e7bfc4e411_preview_card.jpg', [])
  ];


  constructor(private http: HttpClient) { }

  getRecipes () {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://recipebook-51e95.firebaseio.com/recipes.json', body, {headers});
  }

  fetchData() {
    return this.http.get('https://recipebook-51e95.firebaseio.com/recipes.json')
      .map(response => response)
      .subscribe(
        data => {
          this.recipes = <Recipe[]>data;
          this.recipesChanged.emit(this.recipes);
        }
      );
  }
}








