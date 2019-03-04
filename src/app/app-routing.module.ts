import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeCreateComponent } from "./recipes/recipe-create/recipe-create.component";
import { RecipeIngredientComponent} from "./recipes/recipe-ingredient/recipe-ingredient.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: ':id', component: RecipeDetailComponent },
      {path: 'recipe/add',component: RecipeCreateComponent},
      {path: 'recipe/edit',component: RecipeCreateComponent}
    ] },
  {path: 'ingredients', component: RecipeIngredientComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
