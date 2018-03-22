import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'; // .. = move up one folder

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test',
      'https://photos.smugmug.com/Thai-Recipes-2017/i-cbT2RpB/0/f743dc95/X3/thai-cashew-chicken-recipe-30-X3.jpg'),
      new Recipe('A test Recipe', 'This is simply a test',
      'https://photos.smugmug.com/Thai-Recipes-2017/i-cbT2RpB/0/f743dc95/X3/thai-cashew-chicken-recipe-30-X3.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
