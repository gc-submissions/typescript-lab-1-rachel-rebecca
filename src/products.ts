export interface Product {
    name: string;
    price: number;
}

let products: Product[] = [{name:"strawberry",price:3},{name:"cookies",price:4},{name:"pickles",price:3.5}];

export function calcAverageProductPrice (array:Product[]): number {
    let sum: number = 0;
    if(array.length == 0) {
        return sum;
    }
    for(let i = 0; i < array.length; i++) {
        sum += array[i].price;
    }

    return sum / array.length;

}

let calledFunctionAverage = calcAverageProductPrice(products);
console.log(calledFunctionAverage);