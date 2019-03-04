import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeIngredientComponent } from './recipe-ingredient.component';

describe('RecipeIngredientComponent', () => {
  let component: RecipeIngredientComponent;
  let fixture: ComponentFixture<RecipeIngredientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeIngredientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
