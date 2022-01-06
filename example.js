var Table = require('./lib/table');

var data = [
    { id: 123123, desc: 'Something awesome', price: 1000.00 },
    { id: 245452, desc: 'Very interesting book', price: 11.45},
    { id: 232323, desc: 'Yet another product', price: 555.55 }
]

var t = new Table;

data.forEach(function (product) {
    t.cell('Product Id', product.id);
    t.cell('Description', product.desc);
    t.cell('Price, USD', product.price, function pricePrinter (price, width) {
    	return Table.padLeft(price.toFixed(2), width);
    });
    t.newLine();
});

t.sort(['Price, USD']);

console.log(t.toString());
