import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Ingredient } from "../../../shared/ingredient.model";

@Component({
  selector: 'app-ingredient-create',
  templateUrl: './ingredient-create.component.html',
  styleUrls: ['./ingredient-create.component.css']
})
export class IngredientCreateComponent implements OnInit {
 ingredient: Ingredient = {name: "", amount: null};
 ingredients:Ingredient[] = [];
 @Input() errorIngredient;
 @Output() sendIngredient: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  createIngredient() {
    this.sendIngredient.emit(this.ingredient);
    this.ingredients.push(this.ingredient);
    this.ingredient = {name: "", amount: null};
  }

}
