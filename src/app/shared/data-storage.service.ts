import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import {RecipesResponse} from '../recipes/recipe.response.model';
import {HttpErrorResponse} from "@angular/common/http";
import {Body} from "@angular/http/src/body";
import {Ingredient} from "./ingredient.model";

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService) {}


  getRecipes() {
    this.http.get('http://localhost:8080/api/recipe/all')
      .map(
        (response: Response) => {
          const recipesResponse: RecipesResponse = response.json();
          const recipes = recipesResponse.recipes;
          for (const recipe of recipesResponse.recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
  addRecipe(recipe: Recipe) {
    const result = this.http.post('http://localhost:8080/api/recipe/add',recipe)
    return result;
  }

  updateRecipe(recipe: any){
    return this.http.post('http://localhost:8080/api/recipe/update',recipe);
  }
  getIngredients(){

    this.http.get('http://localhost:8080/api/recipe/ingredients').map(
      (response: Response) =>{
        const result: Ingredient[]=[];
        const r = response.json();
        r.body.map((item)=>{
          result.push({name: item.name, amount: item.amount})
        })
        return result;
      }
    ).subscribe(
      (result: Ingredient[])=>{
        //console.log(result);
        this.recipeService.setIngredients(result);
      }

    )


  }


}
