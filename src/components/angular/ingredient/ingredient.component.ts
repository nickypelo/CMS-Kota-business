import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { CrudService } from "../../../services/crud.service";

interface Ingredient{
    id: string;
    ingrName: string;
    ingrCost: number;
    ingrQuantity: number;
    ingrTotalCost: number
};

@Component({
    selector: 'ingredient-selector',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './ingredient.component.html'
})

export class IngredientComponent{
    ingredientService: any;
    ingredients: Ingredient[] = [];
    dialogBox: string = 'hidden';

    constructor(){
        const baseUrl = 'http://localhost:3000/ingredients'
        this.ingredientService = new CrudService(baseUrl);
    }

    ngOnInit(): void{
        console.log('Palesa');
        this.getAllIngredients();
    }

    // reactive form details
    ingredientForm = new FormGroup({
        ingrNameControl : new FormControl(''),
        ingrCostControl : new FormControl(0),
        ingrQuantityControl : new FormControl(0),
        ingrTotalCostControl : new FormControl(0)
    });

    // component funtctions
    showDialog(){
        this.dialogBox == 'hidden'
        ? this.dialogBox = 'block'
        : this.dialogBox = 'hidden'
    }

    // create
    onSubmit(): void{
        const newItem: Ingredient = {
            id: uuidv4(),
            ingrName :this.ingredientForm.value.ingrNameControl ?? '',
            ingrCost: this.ingredientForm.value.ingrCostControl ?? 0,
            ingrQuantity: this.ingredientForm.value.ingrQuantityControl ?? 0,
            ingrTotalCost: this.ingredientForm.value.ingrTotalCostControl ?? 0,
        }

        this.ingredientService.createNewItem(newItem);
        this.dialogBox = 'hidden';
    }

    // read - all
    getAllIngredients(): Ingredient[]{
        return this.ingredientService.getAllItems()
        .then((response: Ingredient[])=> this.ingredients = response)
    }
    
    // read item by id
    getIngredient(id: string): Ingredient{
        return this.ingredientService.getItemById(id)
        .then((response: Ingredient)=> response);
    }

    // update an ingredient detail
    updateIngredient(id: string): void{
        const newItem: Ingredient = {
            id: id,
            ingrName :this.ingredientForm.value.ingrNameControl ?? '',
            ingrCost: this.ingredientForm.value.ingrCostControl ?? 0,
            ingrQuantity: this.ingredientForm.value.ingrQuantityControl ?? 0,
            ingrTotalCost: this.ingredientForm.value.ingrTotalCostControl ?? 0,
        };

        this.ingredientService.updateById(id, newItem);
        this.dialogBox = 'hidden';
    }

    deleteIngredient(id: string){
        this.ingredientService.deletebyId(id);
    }
}