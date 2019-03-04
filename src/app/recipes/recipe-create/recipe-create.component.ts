import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {Recipe} from "../recipe.model";
import {Ingredient} from "../../shared/ingredient.model";
import {DataStorageService} from "../../shared/data-storage.service";

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.css']
})
export class RecipeCreateComponent implements OnInit {

  recipe: Recipe;
  submitted = false;
  registerForm: FormGroup;
  ingredients: Ingredient[]=[];
  errorIngredient: boolean =  false;
  result: any;
  constructor( private formBuilder: FormBuilder, private router: Router, private dataSourceService: DataStorageService) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      imagePath: ['', Validators.required],
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid || this.ingredients.length < 1 ) {
      this.errorIngredient = true;
      return;
    } else {
      this.recipe = new Recipe(
        this.registerForm.controls['name'].value,
        this.registerForm.controls['description'].value,
        this.registerForm.controls['imagePath'].value, this.ingredients
      );
      this.dataSourceService.addRecipe(this.recipe).subscribe((data)=> {
        this.redirect();
      });
      console.log(this.result);
      this.registerForm.controls['name'].setValue('');
        this.registerForm.controls['description'].setValue('');
        this.registerForm.controls['imagePath'].setValue('');
        this.ingredients =[];


    }

  }
  addIngredient(ingredient){
    this.errorIngredient = false;
    this.ingredients.push(ingredient);
}
  redirect(){
    this.ingredients = [];
    this.router.navigate(['/recipes'])
  }

}
