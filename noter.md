
/// ROUTE.JS ///

EKSEMPEL PÅ ARRAY
	
	app.get('/', (req, res, next) => {

	 	let product = [
	 		{
	 			"name": "prodcut 1",
	 			"price": 200
	 		},
	 		{
	 			"name": "product 2",
	 			"price": 300
	 		}
	 	];

     	res.render('home', {
	 		title: "Home",
	 		"latestProducts": products
	 	});
	});

/// HOME.JS ///

	ESEMPEL PÅ UDSKRIVELSE AF ARRAY i home.ejs

	<%= latestProducts.forEach(product => { %>

	<div class="products">
	  	<h2><%= product.name %></h2>
	 	<p><%= product.price %></p>
	</div>

	<% }) %>



