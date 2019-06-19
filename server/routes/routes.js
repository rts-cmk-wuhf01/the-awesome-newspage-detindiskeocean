const mysql = require('../config/mysql');

module.exports = (app) => {

	// app.get('/database', async (req, res, next) => {

	// 	let db = await mysql.connect();
	// 	let [products] = await db.execute('SELECT * FROM products');
	// 	db.end();

	// 	// res.send(products);

	// 	res.render('products', {
	// 		'products': products
	// 	});

	// });

	app.get('/categories-post/:category_id', async (req, res, next) => {
		
		res.send(req.params.category_id); 
	 
	 });

	app.get('/', (req, res, next) => {

		// let product = [
		// 	{
		// 		"product": "product 1",
		// 		"price": 200
		// 	},
		// 	{
		// 		"product": "product 2",
		// 		"price": 300
		// 	}
		// ]; 

    	res.render('home', {
			"title": "Home",
			"latestProducts": "products"
		});
	});

	app.get('/about', (req, res, next) => {
		res.render('about', {
			"title": "About"
		});
	});

	app.get('/contact', (req, res, next) => {
		res.render('contact');
	});

	// // app.post('/contact', (req, res, next) => {
		
	// 	res.render('contact');

	// // 	// res.send(req.body);

	// // 	 // indsamling af værdierne og oprettelse af de nødvendige variabler.
	// // 	 let name = req.body.name;
	// // 	 let email = req.body.email;
	// // 	 let subject = req.body.subject;
	// // 	 let message = req.body.message;
	// // 	 let contactDate = new Date();
	  
	// // 	 // håndter valideringen, alle fejl pushes til et array så de er samlet ET sted
	// // 	 let return_message = [];
	// // 	 if (name == undefined || name == '') {
	// // 		return_message.push('Navn mangler');
	// // 	 }
	// // 	 if (email == undefined || email == '') {
	// // 		return_message.push('Email mangler');
	// // 	 }
	// // 	 if (subject == undefined || subject == '') {
	// // 		return_message.push('Emne mangler');
	// // 	 }
	// // 	 if (message == undefined || message == '') {
	// // 		return_message.push('Beskedteksten mangler');
	// // 	 }
	  
	// // 	 // dette er et kort eksempel på strukturen, denne udvides selvfølgelig til noget mere brugbart
	// // 	 // hvis der er 1 eller flere elementer i `return_message`, så mangler der noget
	// // 	 if (return_message.length > 0) {
	// // 		// der er mindst 1 information der mangler, returner beskeden som en string.
	// // 		res.send(return_message.join(', '));
	// // 	 } else {
	// // 		// send det modtagede data tilbage, så vi kan se det er korrekt
	// // 		res.send(req.body);
	// // 	 }

	// //  });


	// EKSEMPEL PÅ ARRAY
	// app.get('/', (req, res, next) => {

	// 	let product = [
	// 		{
	// 			"name": "prodcut 1",
	// 			"price": 200
	// 		},
	// 		{
	// 			"name": "product 2",
	// 			"price": 300
	// 		}
	// 	];

    // 	res.render('home', {
	// 		title: "Home",
	// 		"latestProducts": products
	// 	});
	// });

	//ESEMPEL PÅ UDSKRIVELSE AF ARRAY i home.ejs
	// <%= latestProducts.forEach(product => { %>

	// <div class="products">
	//  	<h2><%= product.name %></h2>
	// 		<p><%= product.price %></p>
	// </div>

	// <% }) %>

};