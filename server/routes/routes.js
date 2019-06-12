const mysql = require('../config/mysql');

module.exports = (app) => {

	app.get('/database', async (req, res, next) => {

		let db = await mysql.connect();
		let [products] = await db.execute('SELECT * FROM products');
		db.end();

		// res.send(products);

		res.render('products', {
			'products': products
		});

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