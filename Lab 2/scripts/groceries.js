// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Ground Beef",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		diabetic: false,
		lactose: true,
		price: 12.00,
		img: "GroundBeef.png"
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		diabetic: true,
		lactose: true,
		price: 10.00,
		img: "Salmon.png"
	},
	{
		name: "Eggs",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		diabetic: true,
		lactose: true,
		price: 8.99,
		img: "Eggs.png"
	},
	{
		name: "Pink Sauce",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		diabetic: false,
		lactose: false,
		price: 6.99,
		img: "PinkSauce.png"
	},
	{
		name: "Corn",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		diabetic: true,
		lactose: true,
		price: 4.99,
		img: "Corn.png"
	},
	{
		name: "Milk",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		diabetic: true,
		lactose: false,
		price: 4.99,
		img: "Milk.png"
	},
	{
		name: "Spinach",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		diabetic: true,
		lactose: true,
		price: 2.99,
		img: "Spinach.png"
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		diabetic: true,
		lactose: true,
		price: 2.35,
		img: "Bread.png"
	},
	{
		name: "Brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		diabetic: true,
		lactose: false,
		price: 1.99,
		img: "Brocoli.png"
	},
	{
		name: "Oranges",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		diabetic: true,
		lactose: true,
		price: 1.99,
		img: "Orange.png"
	},
	{
		name: "Cauliflower",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		diabetic: true,
		lactose: true,
		price: 1.99,
		img: "Cauliflower.png"
	},
	{
		name: "Tomato",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		diabetic: true,
		lactose: true,
		price: 0.99,
		img: "Tomato.png"
	},
	{
		name: "KitKat",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		diabetic: false,
		lactose: false,
		price: 0.99,
		img: "KitKat.png"
	}
];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i = 0; i < prods.length; i += 1) {
		if (restriction.includes("Vegetarian") && (prods[i].vegetarian != true)) {
			continue;
		}
		else if (restriction.includes("GlutenFree") && (prods[i].glutenFree != true)) {
			continue;
		}
		else if (restriction.includes("Organic") && (prods[i].organic != true)) {
			continue;
		}
		else if (restriction.includes("Diabetic") && (prods[i].diabetic != true)) {
			continue;
		}
		else if (restriction.includes("Lactose") && (prods[i].lactose != true)) {
			continue;
		}

		product_names.push(prods[i]);
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i = 0; i < products.length; i += 1) {
		if (chosenProducts.indexOf(products[i].name) > -1) {
			totalPrice += products[i].price;
		}
	}
	return totalPrice.toFixed(2);
}

function getPrice(itemName){
	for (let i = 0; i < products.length; i += 1) {
		if (itemName == products[i].name){
			return products[i].price
		}
	}
	return 0;
}