import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { v4 as uuidv4 } from 'uuid';
import { CrudService } from "../../../services/crud.service";

interface Menu{
    id: string;
    prodName: string;
    prodPrice: number;
    prodIngredients: string;
    prodImage: string

};

@Component({
    selector: 'menu-selector',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './menu.component.html'
})

export class MenuComponent{
    menuService: any;
    products: Menu[] = [];
    dialogBox: string = 'hidden';


    constructor(){
        const baseUrl = 'http://localhost:3000/menu';
        this.menuService = new CrudService(baseUrl); 
    }

    ngOnInit(): void{
        console.log('brother');
        this.getMenu();
    }

    // reactive form details
    productForm = new FormGroup({
        prodNameControl: new FormControl(''),
        prodIngredientsControl: new FormControl(''),
        prodPriceControl: new FormControl(0),
        prodImageControl: new FormControl(''),
    })

    // component functions
    showDialog(){
        this.dialogBox == 'hidden'
        ? this.dialogBox = ''
        : this.dialogBox = 'hidden'
    }


    // create 
    onSubmit(): void{
        const newItem: Menu = {
            id: uuidv4(),
            prodName :this.productForm.value.prodNameControl ?? '',
            prodIngredients: this.productForm.value.prodIngredientsControl ?? '',
            prodImage: this.productForm.value.prodImageControl ?? '',
            prodPrice: this.productForm.value.prodPriceControl ?? 0,
        }

        this.menuService.createNewItem(newItem);
        this.dialogBox = 'hidden'
    }

    // read - all
    getMenu(): Menu[]{
        return this.menuService.getAllItems()
        .then((response: Menu[])=> this.products = response);
    }

    // read by id
    getMenuItem(id: string): Menu{
        return this.menuService.getItemById(id)
        .then((response: Menu) => response);
    }

    // update a menu item
    updateMenuItem(id: string): void{
        const newItem: Menu = {
            id: id,
            prodName :this.productForm.value.prodNameControl ?? '',
            prodIngredients: this.productForm.value.prodIngredientsControl ?? '',
            prodImage: this.productForm.value.prodImageControl ?? '',
            prodPrice: this.productForm.value.prodPriceControl ?? 0,
        };

        this.menuService.updateById(id, newItem);
    }

    // delete item
    deleteMenuItem(id: string) {
        this.menuService.deletebyId(id);    
    }
    
}