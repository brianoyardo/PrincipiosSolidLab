// class Product {
//     id: number;
//     name: string;
//     price: number;

//     constructor(id: number, name: string, price: number) {
//         this.id = id;
//         this.name = name;
//         this.price = price;
//     }
// }

// class Cart {
//     products: Product[] = [];

//     addProduct(product: Product) {
//         this.products.push(product);
//     }

//     calculateTotal(): number {
//         let total = this.products.reduce((acc, product) => acc + product.price, 0);

//         // Descuento: 10% si hay más de 5 productos
//         if (this.products.length > 5) {
//             total *= 0.9;
//         }

//         // Envío: $10 si la compra es menor a $50
//         if (total < 50) {
//             total += 10;
//         }

//         return total;
//     }
// }


class Product {
    id: number;
    name: string;
    price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart {
    products: Product[] = [];

    addProduct(product: Product) {
        this.products.push(product);
    }

    calculateTotal(): number {
        let total = this.products.reduce((acc, product) => acc + product.price, 0);

        const discountThreshold = 5;
        const discountRate = 0.9;
        const shippingCost = 10;
        const freeShippingThreshold = 50;

        if (this.products.length > discountThreshold) {
            total *= discountRate;
        }

        if (total < freeShippingThreshold) {
            total += shippingCost;
        }

        return total;
    }
}

