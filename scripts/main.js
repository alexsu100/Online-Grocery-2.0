// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i <= tabcontent.length-1; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i <= tablinks.length-1; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	btn = document.getElementsByClassName(tabName)[0];
	btn.className += " active";

}

// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices() {
	var s2 = document.getElementById("displayProduct");
	var cat = document.getElementById("category");
	s2.style.textAlign = "left"; 

	var vegetarian = document.getElementById("vegeterianYes");
	var glutenfree = document.getElementById("glutenfreeYes");
	var organic = document.getElementById("organicYes");
	var diabetic = document.getElementById("diabeticYes");
	var lactose = document.getElementById("lactoseYes");

	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
	s2.innerHTML = "";
	cat.innerHTML="";
	cat.style="";
	s2.style = "";

	// create an array of restrictions
	var restrictions = []
	if (vegetarian.checked) {
		restrictions.push("Vegetarian");
	}
	if (glutenfree.checked) {
		restrictions.push("GlutenFree");
	}
	if (organic.checked) {
		restrictions.push("Organic");
	}
	if (diabetic.checked) {
		restrictions.push("Diabetic");
	}
	if (lactose.checked) {
		restrictions.push("Lactose");
	}

	// obtain a reduced list of products based on restrictions
	// var optionArray = restrictListProducts(products, restrictions);
	
	
	var meatArray =[];
	var vegetableArray =[];
	var dairyArray=[];
	var snackArray=[];
	var carbArray=[];
	//array of all categories
	var productArray=[];

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
	for(i = 0;i<=products.length-1;i++){
		if(products[i].category == "Proteins"){
			meatArray.push(products[i]);
		}
		else if(products[i].category == "Carbs"){
			carbArray.push(products[i]);
		}
		else if(products[i].category == "Snacks"){
			snackArray.push(products[i]);
		}
		else if(products[i].category == "Vegetables"){
			vegetableArray.push(products[i]);
		}
		else if(products[i].category == "Dairy"){
			dairyArray.push(products[i]);
		}
	}	
	productArray.push(restrictListProducts(meatArray, restrictions));
	productArray.push(restrictListProducts(vegetableArray, restrictions));
	productArray.push(restrictListProducts(dairyArray, restrictions));
	productArray.push(restrictListProducts(carbArray, restrictions));
	productArray.push(restrictListProducts(snackArray, restrictions));
	console.log("meat:"+productArray[0].length);
	for(i = 0;i<productArray.length;i++){
		if(i==0){
			s2.innerHTML = "";
		}
		try{
		console.log("Product Array Length: "+productArray.length)
		var categoryName = productArray[i][0].category;
		}
		catch(e){
			categoryName="";
		}
		var category= document.createElement("div");
		category.className="displayProduct";
		category.style.width="100%"
		var categoryLabel= document.createElement("div");
		  categoryLabel.style.marginLeft = " 80px"
		  categoryLabel.style.fontSize = " 50px"
		  categoryLabel.style.textAlign = " left"
		  categoryLabel.style.alignSelf = "center"
		  categoryLabel.style.width= "350px"
		  categoryLabel.style.fontFamily= "Arial"
		  categoryLabel.innerHTML = categoryName; 
		  cat.appendChild(categoryLabel);
		  cat.appendChild(category);
		for(j = 0; j < productArray[i].length ;j++) {

			var product = productArray[i];
			// create the quantity
			var quantity = document.createElement("input");
			quantity.type = "number";
			quantity.name = product[j].name;
			quantity.value = 0;
			quantity.min = 0;
			quantity.oninput= function () {this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');};
			quantity.className = "quantity";

			// create a label for the checkbox, and also add in HTML DOM
			var label = document.createElement('label');
			label.htmlFor = product[j].name;
			label.style.padding = " 0px 0px"
			category.appendChild(label);
				
			// create a breakline node and add in HTML DOM
			category.appendChild(document.createElement("br"));
			

			//Add a photo to the products listed in HTML DOM
			var photo = document.createElement("img");
			photo.src = "styles/" + product[j].img;
			photo.alt = product[j].name; 


			var caption = document.createElement("figcaption");
			var figure = document.createElement("figure");
			caption.innerHTML = `${product[j].name} - $${product[j].price.toFixed(2)}`;
			photo.setAttribute('width', '100px');
			photo.setAttribute('length', '100px');
			photo.setAttribute('height', '70px');
			photo.style.padding = "0px 0px 20px";
			category.appendChild(photo);
			figure.appendChild(photo);
			figure.appendChild(caption);
			figure.appendChild(quantity);
			label.appendChild(figure);
		}

	}
	console.log(productArray.length);
}

// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems() {

	var ele = document.getElementsByClassName("quantity");
	var chosenProducts = [];

	var c = document.getElementById('displayCart');
	c.innerHTML = "";

	// build list of selected item
	var para = document.createElement("P");
	para.style.textAlign = "center";
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	c.appendChild(para);

	var priceTable = document.createElement("table");
	c.append(priceTable);

	var row = document.createElement("tr");
	priceTable.appendChild(row);
	var nameColumn = document.createElement("th");
	nameColumn.innerHTML = "Product";
	var quantityColumn = document.createElement("th");
	quantityColumn. innerHTML = "Quantity";
	var priceColumn = document.createElement("th");
	priceColumn. innerHTML = "Price";
	row.appendChild(nameColumn);
	row.appendChild(quantityColumn);
	row.appendChild(priceColumn);
	
	var totalPrice = 0;
	for (i = 0; i < ele.length; i++) {
		if (ele[i].value > 0) {
			var itemPrice = ele[i].value * getPrice(ele[i].name);
			totalPrice = totalPrice + itemPrice;

			var row = document.createElement("tr");
			priceTable.appendChild(row);
			var nameColumn = document.createElement("td");
			nameColumn.innerHTML = ele[i].name;
			var quantityColumn = document.createElement("td");
			quantityColumn. innerHTML = ele[i].value;
			var priceColumn = document.createElement("td");
			priceColumn. innerHTML = itemPrice.toFixed(2);
			row.appendChild(nameColumn);
			row.appendChild(quantityColumn);
			row.appendChild(priceColumn);
		}
	}

	// add paragraph and total price
	if(totalPrice == 0){
		c.appendChild(document.createTextNode("Your cart is empty."));
	}else{
		c.appendChild(document.createElement("br"))
		c.appendChild(document.createTextNode("Total Price is $" + totalPrice.toFixed(2)));
	}
}

function enlargeText() {
	var a = document.querySelector("#Enlarge");
	var b = document.getElementById("Client");
	var c = document.getElementById("Products");
	var d = document.getElementById("Cart");

	if (a.textContent == "Larger Text") {
		a.textContent = "Reset Text";
		b.style.fontSize = "150%";
		c.style.fontSize = "150%";
		d.style.fontSize = "150%";

	} else {
		a.textContent = "Larger Text";
		b.style.fontSize = "100%";
		c.style.fontSize = "100%";
		d.style.fontSize = "100%";
	}

}
