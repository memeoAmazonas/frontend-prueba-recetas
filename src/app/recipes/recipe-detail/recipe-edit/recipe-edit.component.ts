import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../recipe.model";
import {DataStorageService} from "../../../shared/data-storage.service";
import {Router} from "@angular/router";
import {Ingredient} from "../../../shared/ingredient.model";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
@Input() recipe: Recipe;
@Input() id: number;
ingredient: Ingredient = new Ingredient("",null);
  constructor(private router: Router,private dataSourceService: DataStorageService) { }

  ngOnInit() {
  }
  edit(){
    this.dataSourceService.updateRecipe({
      "id": this.id,
      "name": this.recipe.name,
      "description": this.recipe.description,
      "imagePath": this.recipe.imagePath,
      "ingredients": this.recipe.ingredients
    }).subscribe((data)=> {
      this.redirect();
    });
  }
  redirect(){
    this.router.navigate(['/recipes'])
  }
  delete(id){
    this.recipe.ingredients.splice(id,1);
  }
  createIngredient(ingredient){
    this.recipe.ingredients.push(ingredient);
    this.ingredient = new Ingredient("",null);
  }

}
