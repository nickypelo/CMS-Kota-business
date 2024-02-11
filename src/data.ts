export interface Ingredient{
    id: string;
    ingrName: string;
    ingrCost: number;
    ingrQuantity: number;
    ingrTotalCost: number
};


export interface Menu{
    id: string;
    prodName: string;
    prodPrice: number;
    prodIngredients: string;
    prodImage: string

};

