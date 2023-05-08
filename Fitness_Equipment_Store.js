<!DOCTYPE html>
<html>
<head>
	<title>Fitness Equipment Store</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script>
		$(document).ready(function(){
			var products = [
				{name: "Treadmill", description: "Stay active indoors with this high-quality treadmill.", price: 599.99, image: "treadmill.jpg"},
				{name: "Weight Bench", description: "Perfect for home gyms, this weight bench is durable and easy to use.", price: 249.99, image: "weight-bench.jpg"},
				{name: "Resistance Bands", description: "Get a full-body workout with these versatile resistance bands.", price: 39.99, image: "resistance-bands.jpg"}
			];

			products.forEach(function(product){
				var product_html = `
					<div class="product">
						<img src="${product.image}" alt="${product.name}">
						<h2>${product.name}</h2>
						<p>${product.description}</p>
						<p>Price: $${product.price.toFixed(2)}</p>
						<button class="add-to-cart" data-name="${product.name}" data-price="${product.price}">Add to Cart</button>
					</div>
				`;
				$("#product-list").append(product_html);
			});

			var cart = [];

			$("#product-list").on("click", ".add-to-cart", function(){
				var name = $(this).data("name");
				var price = $(this).data("price");
				cart.push({name: name, price: price});
				$("#cart-count").text(cart.length);
				$("#cart-total").text("$" + cart.reduce(function(total, product){ return total + product.price; }, 0).toFixed(2));
			});

			$("#view-cart").click(function(){
				var cart_html = "<h2>Shopping Cart</h2>";
				cart.forEach(function(item){
					cart_html += `
						<div class="cart-item">
							<h3>${item.name}</h3>
							<p>Price: $${item.price.toFixed(2)}</p>
						</div>
					`;
				});
				$("#cart").html(cart_html);
			});
		});
	</script>
	<style>
		.product {
			border: 1px solid black;
			padding: 10px;
			margin-bottom: 10px;
		}
		.add-to-cart {
			background-color: green;
			color: white;
			border: none;
			padding: 5px;
			margin-top: 10px;
			cursor: pointer;
		}
		.cart-item {
			border: 1px solid black;
			padding: 10px;
			margin-bottom: 10px;
		}
	</style>
</head>
<body>
	<h1>Fitness Equipment Store</h1>
	<div id="product-list"></div>
	<p><button id="view-cart">View Cart (<span id="cart-count">0</span> items) - Total: <span id="cart-total">$0.00</span></button></p>
	<div id="cart"></div>
</body>
</html>
