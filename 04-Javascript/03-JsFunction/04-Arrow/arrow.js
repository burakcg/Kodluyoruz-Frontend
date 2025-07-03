const names = () => {
    return "Burak";
}

const result = names();
console.log(result);

//fatura

const bill = (productPrice, tax) => {
    let totalPrice = 0;
    for (let counter = 0; counter < productPrice.length; counter++) {
        const price = productPrice[counter] * (1 + tax);
        console.log(`${counter+1}. ürünün fiyatı:${productPrice[counter]}`);
        console.log(`${counter+1}. ürünün KDV dahil fiyatı:${price}`);
        totalPrice += price;
    }
    return totalPrice;
}
TotalPrice = bill([20, 30, 40] , 0.25);
console.log(`Toplam KDV dahil ürün fiyatı:${TotalPrice}`);
console.log(`Toplam KDV tutarı:${TotalPrice - TotalPrice / 1.25}`); // Tprice = price + price*tax  Tprice = price(1 + 0.25)