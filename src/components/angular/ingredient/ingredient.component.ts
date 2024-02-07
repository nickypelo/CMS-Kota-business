import { Component } from "@angular/core";
import { ingredients, type Ingredient } from "../../../data";


@Component({
    selector: 'ingredient-selector',
    standalone: true,
    templateUrl: './ingredient.component.html'
})

export class IngredientComponent{
    ingredients: Ingredient[] = ingredients;

    deleteIngredient(index: number){
        ingredients.splice(index, 1);
    }
    lebitso: string = 'hidden';

    showDialog(){
        this.lebitso == 'hidden'
        ? this.lebitso = ''
        : this.lebitso = 'hidden'
    }

    addIngredient(){
        const newItem: Ingredient = {
            ingrID: 5,
            ingrName: 'Burger Patty',
            ingrCost: 5,
            ingrQuantity: 150,
            ingrTotalCost: (ingrCost, ingrQuantity)=> ingrCost * ingrQuantity
        }

        ingredients.push(newItem);
        this.lebitso = 'hidden'
    }

    
}