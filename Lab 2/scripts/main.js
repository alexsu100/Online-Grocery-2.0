// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
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
	s2.style.textAlign = "left";

	var vegetarian = document.getElementById("vegeterianYes");
	var glutenfree = document.getElementById("glutenfreeYes");
	var organic = document.getElementById("organicYes");
	var diabetic = document.getElementById("diabeticYes");
	var lactose = document.getElementById("lactoseYes");

	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
	s2.innerHTML = "";

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
	var optionArray = restrictListProducts(products, restrictions);

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>

	for (i = 0; i < optionArray.length; i++) {

		var product = optionArray[i];
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = product.name;
		s2.appendChild(checkbox);

		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label');
		label.htmlFor = product.name;
		label.appendChild(document.createTextNode(product.name));
		s2.appendChild(label);

		label = document.createElement('label');
		label.htmlFor = product.price;
		label.style.float = "right";
		/*label.style.padding = " 0px 10px"*/
		label.appendChild(document.createTextNode("$" + product.price.toFixed(2)));
		s2.appendChild(label);

		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));

		//Add a photo to the products listed in HTML DOM
		var photo = document.createElement("img");
		photo.src = "styles/" + product.img;

		photo.setAttribute('width', '100px');
		photo.setAttribute('length', '100px');
		photo.setAttribute('height', '70px');
		photo.style.padding = "0px 0px 20px";
		s2.appendChild(photo);
	}
}

// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems() {

	var ele = document.getElementsByName("product");
	var chosenProducts = [];

	var c = document.getElementById('displayCart');
	c.innerHTML = "";

	// build list of selected item
	var para = document.createElement("P");
	para.style.textAlign = "left";
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	
	for (i = 0; i < ele.length; i++) {
		if (ele[i].checked) {

			para.appendChild(document.createTextNode(ele[i].value + " $" + getPrice(ele[i].value)));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}

	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(chosenProducts)));

}

function enlargeText() {
	var a = document.querySelector("#Enlarge");
	var b = document.getElementById("Client");
	var c = document.getElementById("Products");
	var d = document.getElementById("Cart");

	if (a.textContent == "Larger Text") {
		a.textContent = "Reset Text";
		b.style.fontSize = "120%";
		c.style.fontSize = "120%";
		d.style.fontSize = "120%";

	} else {
		a.textContent = "Larger Text";
		b.style.fontSize = "100%";
		c.style.fontSize = "100%";
		d.style.fontSize = "100%";
	}

}
