import { Injectable } from '@angular/core';
import { Recipe } from "./recipe";
import {Ingredient} from "../ingredient";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Iman', 'Sahebi', 'https://cdn.thingiverse.com/renders/6f/c4/ba/98/12/0caef2cb548d6a1bfb5241e7bfc4e411_preview_card.jpg', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('Ali', 'Tough', 'https://cdn.thingiverse.com/renders/6f/c4/ba/98/12/0caef2cb548d6a1bfb5241e7bfc4e411_preview_card.jpg', [])
  ];


  constructor() { }

  getRecipes () {
    return this.recipes;
  }
}
