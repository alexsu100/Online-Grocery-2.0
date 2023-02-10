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
		category: 'Proteins',
		price: 12.00,
		img: "GroundBeef.png"
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		diabetic: true,
		category: 'Proteins',
		lactose: true,
		price: 10.00,
		img: "Salmon.png"
	},
	{
		name: "Bacon",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		diabetic: true,
		category: 'Proteins',
		lactose: true,
		price: 5.99,
		img: "bacon.png"
	},
	{
		name: "Chicken",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		diabetic: true,
		category: 'Proteins',
		lactose: true,
		price: 10.99,
		img: "chicken.png"
	},
	{
		name: "Eggs",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		diabetic: true,
		category: 'Proteins',
		lactose: true,
		price: 5.99,
		img: "Eggs.png"
	},
/*	{
		name: "Pink Sauce",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		diabetic: false,
		category: 'Snacks',
		lactose: false,
		price: 6.99,
		img: "PinkSauce.png"
	},*/
	{
		name: "Corn",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		diabetic: true,
		category: 'Vegetables',
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
		category: 'Dairy',
		lactose: false,
		price: 4.99,
		img: "milk.png"
	},
	{
		name: "Ice Cream",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		diabetic: true,
		category: 'Dairy',
		lactose: false,
		price: 9.99,
		img: "icecream.png"
	},
	{
		name: "Cheese",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		diabetic: true,
		category: 'Dairy',
		lactose: false,
		price: 7.99,
		img: "cheese.png"
	},
	// {
	// 	name: "creamcheese",
	// 	vegetarian: true,
	// 	glutenFree: true,
	// 	organic: false,
	// 	diabetic: true,
	// 	category: 'Dairy',
	// 	lactose: false,
	// 	price: 4.99,
	// 	img: "creamcheese.png"
	// },
	{
		name: "Yogurt",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		diabetic: true,
		category: 'Dairy',
		lactose: false,
		price: 3.99,
		img: "yogurt.png"
	},
	{
		name: "Spinach",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		diabetic: true,
		category: 'Vegetables',
		lactose: true,
		price: 2.99,
		img: "spinach.png"
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		diabetic: true,
		category: 'Carbs',
		lactose: true,
		price: 2.35,
		img: "Bread.png"
	},
	{
		name: "Baguette",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		diabetic: true,
		category: 'Carbs',
		lactose: true,
		price: 2.99,
		img: "baguette.png"
	},
	{
		name: "Banana Bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		diabetic: true,
		category: 'Carbs',
		lactose: true,
		price: 5.99,
		img: "bananabread.png"
	},
	{
		name: "Muffin",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		diabetic: true,
		category: 'Carbs',
		lactose: true,
		price: 5.99,
		img: "bagel.png"
	},
	{
		name: "Brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		diabetic: true,
		category: 'Vegetables',
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
		category: 'Vegetables',
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
		category: 'Vegetables',
		lactose: true,
		price: 1.99,
		img: "cauliflower.png"
	},
	{
		name: "KitKat",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		diabetic: false,
		category: 'Snacks',
		lactose: false,
		price: 0.99,
		img: "kitkat.png"
	}
];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction ) {
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
	console.log("productNames Length"+product_names.length);
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