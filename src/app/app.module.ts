import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';

import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeService } from './recipes/recipe.service';
import { DataStorageService } from './shared/data-storage.service';
import { RecipeCreateComponent } from './recipes/recipe-create/recipe-create.component';
import { IngredientCreateComponent } from './recipes/recipe-create/ingredient-create/ingredient-create.component';
import { RecipeEditComponent } from './recipes/recipe-detail/recipe-edit/recipe-edit.component';
import { RecipeIngredientComponent } from './recipes/recipe-ingredient/recipe-ingredient.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeCreateComponent,
    IngredientCreateComponent,
    RecipeEditComponent,
    RecipeIngredientComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ RecipeService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
