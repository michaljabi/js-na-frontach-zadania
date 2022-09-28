/**
 * To tutaj mamy "START" programu.
 *
 * Przygotuj tutaj kawałek kodu potwierdzający poprawność działania koszyka.
 *
 * Np. Utwórz 3 różne koszyki — dodaj do nich różne produkty.
 * Potem wyświetl te produkty.
 * Wykaż, że koszyki mają różne produkty — inną ich ilość etc.
 * Przygotuj koszyki dla każdego rodzaju produktów.
 * - po prostu: wykaż, że przygotowana logika i modele danych — działają :)
 * */
import {Basket} from "./basket/basket";
import {AuctionProduct} from "./product/auction-product";
import {BuyNowProduct} from "./product/buy-now-product";
import {FreeProduct} from "./product/free-product";


{
    const auctionProductsBasket = new Basket<AuctionProduct>();
    console.log('====AUCTION=PRODUCTS=BASKET====');
    const auctionProducts = [
        new AuctionProduct({name: 'apple', amount: 10, price: 3}),
        new AuctionProduct({name: 'orange', amount: 7, price: 5}),
        new AuctionProduct({name: 'egg', amount: 3, price: 12.5})
    ];
    auctionProductsBasket.addProduct(auctionProducts[0]);
    auctionProductsBasket.addProduct(auctionProducts[1]);
    auctionProductsBasket.addProduct(auctionProducts[2]);

    console.log('all products');
    console.log(auctionProductsBasket.getAllProducts);

    console.log('number of products ', auctionProductsBasket.numberOfProducts);

    console.log('total price ', auctionProductsBasket.totalPrice);

    const sampleProductId = auctionProducts[0].id;
    console.log(`product with id ${sampleProductId}`, auctionProductsBasket.getProductById(sampleProductId));

    console.log('increase amount of apples by 12');
    auctionProductsBasket.increaseAmount(sampleProductId, 12);
    console.log(auctionProductsBasket.getProductById(sampleProductId));

    console.log('decrease amount of apples by 6');
    auctionProductsBasket.decreaseAmount(sampleProductId, 6);
    console.log(auctionProductsBasket.getProductById(sampleProductId));

    console.log('change price of apples to 123');
    auctionProductsBasket.getProductById(sampleProductId)?.changePrice(123);
    console.log(auctionProductsBasket.getProductById(sampleProductId));

    console.log('remove apples');
    auctionProductsBasket.removeProduct(sampleProductId);
    console.log(auctionProductsBasket.getAllProducts);
}
{
    const buyNowProductsBasket = new Basket<BuyNowProduct>();
    console.log('====BUY=NOW=BASKET====');
    const buyNowProducts = [
        new BuyNowProduct({name: 'apple', amount: 10, price: 3}),
        new BuyNowProduct({name: 'orange', amount: 7, price: 5}),
        new BuyNowProduct({name: 'egg', amount: 3, price: 12.5})
    ];

    buyNowProductsBasket.addProduct(buyNowProducts[0]);
    buyNowProductsBasket.addProduct(buyNowProducts[1]);
    buyNowProductsBasket.addProduct(buyNowProducts[2]);

    console.log('all products');
    console.log(buyNowProductsBasket.getAllProducts);

    console.log('number of products ', buyNowProductsBasket.numberOfProducts);

    console.log('total price ', buyNowProductsBasket.totalPrice);

    const sampleProductId = buyNowProducts[0].id;
    console.log(`product with id ${sampleProductId}`, buyNowProductsBasket.getProductById(sampleProductId));

    console.log('increase amount of apples by 12');
    buyNowProductsBasket.increaseAmount(sampleProductId, 12);
    console.log(buyNowProductsBasket.getProductById(sampleProductId));

    console.log('decrease amount of apples by 6');
    buyNowProductsBasket.decreaseAmount(sampleProductId, 6);
    console.log(buyNowProductsBasket.getProductById(sampleProductId));

    console.log('remove apples');
    buyNowProductsBasket.removeProduct(sampleProductId);
    console.log(buyNowProductsBasket.getAllProducts);
}
{
    const freeProductsBasket = new Basket<FreeProduct>();
    console.log('====FREE=PRODUCTS=BASKET====');
    const freeProducts = [
        new FreeProduct({name: 'apple', amount: 10, price: 3}),
        new FreeProduct({name: 'orange', amount: 7, price: 5}),
        new FreeProduct({name: 'egg', amount: 3, price: 12.5})
    ];

    freeProductsBasket.addProduct(freeProducts[0]);
    freeProductsBasket.addProduct(freeProducts[1]);
    freeProductsBasket.addProduct(freeProducts[2]);

    console.log('all products');
    console.log(freeProductsBasket.getAllProducts);

    console.log('number of products ', freeProductsBasket.numberOfProducts);

    console.log('total price ', freeProductsBasket.totalPrice);

    const sampleProductId = freeProducts[0].id;
    console.log(`product with id ${sampleProductId}`, freeProductsBasket.getProductById(sampleProductId));

    console.log('increase amount of apples by 12');
    freeProductsBasket.increaseAmount(sampleProductId, 12);
    console.log(freeProductsBasket.getProductById(sampleProductId));

    console.log('decrease amount of apples by 6');
    freeProductsBasket.decreaseAmount(sampleProductId, 6);
    console.log(freeProductsBasket.getProductById(sampleProductId));

    console.log('remove apples');
    freeProductsBasket.removeProduct(sampleProductId);
    console.log(freeProductsBasket.getAllProducts);
}
