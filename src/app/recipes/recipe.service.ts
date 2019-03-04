import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';


@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  ingredientChanged =  new Subject<Ingredient[]>();
  private recipes: Recipe[] = [];
  private ingredients: Ingredient[] = [];


  constructor() {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
  setIngredients(ingredients: Ingredient[]) {
    console.log(ingredients);
    this.ingredients = ingredients;
    this.ingredientChanged.next(this.ingredients.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }
  getIngredients() {
    return this.ingredients.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
