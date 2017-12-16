import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from "../recipe";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  // testRecipe = new Recipe('Dummy', 'DummyDesc', 'https://cdn.thingiverse.com/renders/6f/c4/ba/98/12/0caef2cb548d6a1bfb5241e7bfc4e411_preview_card.jpg');

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
