import {Component, OnDestroy, OnInit} from '@angular/core';
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DataStorageService} from "../../shared/data-storage.service";
import {Ingredient} from "../../shared/ingredient.model";
import {Subscription} from "rxjs";
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-ingredient',
  templateUrl: './recipe-ingredient.component.html',
  styleUrls: ['./recipe-ingredient.component.css']
})
export class RecipeIngredientComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  ingredients: Ingredient[];

  constructor( private recipeService: RecipeService,
               private router: Router,
               private route: ActivatedRoute, private dataSourceService: DataStorageService) { }

  ngOnInit() {
    this.subscription = this.recipeService.ingredientChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
    this.ingredients = this.recipeService.getIngredients();

    this.dataSourceService.getIngredients();
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
