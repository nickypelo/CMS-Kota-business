import { Component } from "@angular/core";
import { products, type Product } from "../../../data";


@Component({
    selector: 'menu-selector',
    standalone: true,
    templateUrl: './product.component.html'
})

export class ProductComponent{
    products: Product[] = products;

    deleteProduct(index: number){
        products.splice(index, 1);
    }

    lebitso: string = 'hidden';

    showDialog(){
        this.lebitso == 'hidden'
        ? this.lebitso = ''
        : this.lebitso = 'hidden'
    }

    addProduct(){
        const newItem: Product = {
            prodID: 5,
            prodName: 'Kota Burger',
            prodIngredients: 'Russian, burger, vienna',
            prodImage: 'picture',
            prodPrice: 115
        }
        products.push(newItem);
        this.lebitso = 'hidden'
    }
}