export interface Ingredient{
    ingrID: number;
    ingrName: string;
    ingrCost: number;
    ingrQuantity: number;
    ingrTotalCost: (num1: number, num2: number)=> number;

};

export const ingredients: Ingredient[] = [
    {
        ingrID: 1,
        ingrName: 'Russian',
        ingrCost: 7,
        ingrQuantity: 150,
        ingrTotalCost: (ingrCost, ingrQuantity) => ingrCost * ingrQuantity
    },
    {
        ingrID: 2,
        ingrName: 'Vienna',
        ingrCost: 5,
        ingrQuantity: 150,
        ingrTotalCost: (ingrCost, ingrQuantity) => ingrCost * ingrQuantity
    },
    {
        ingrID: 3,
        ingrName: 'Special',
        ingrCost: 1.5,
        ingrQuantity: 150,
        ingrTotalCost: (ingrCost, ingrQuantity) => ingrCost * ingrQuantity
    },
    {
        ingrID: 4,
        ingrName: 'Polony',
        ingrCost: 0.2,
        ingrQuantity: 150,
        ingrTotalCost: (ingrCost, ingrQuantity) => ingrCost * ingrQuantity
    }

]

export interface Product{
    prodID: number;
    prodName: string;
    prodPrice: number;
    prodIngredients: string;
    prodImage: string

};

export const products: Product[] = [
    {
        prodID: 1,
        prodName: 'Chip Roll Kota',
        prodPrice: 40,
        prodIngredients: 'image',
        prodImage: 'image'
    },
    {
        prodID: 2,
        prodName: 'Lovie Wam',
        prodPrice: 70,
        prodIngredients: 'image',
        prodImage: 'image'
    },
    {
        prodID: 3,
        prodName: 'The Bae',
        prodPrice: 90,
        prodIngredients: 'image',
        prodImage: 'image'
    },
    {
        prodID: 4,
        prodName: 'The Veggie Monate',
        prodPrice: 105,
        prodIngredients: 'image',
        prodImage: 'image'
    }

]