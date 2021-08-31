import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { Products, NavBar, Cart } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//^^this is a cleaner way to import the lines below
//import Products from "./components/products/Products";
//import NavBar from './components/NavBar/NavBar'
//for this abbreviation to work we must create an index.js file in our components directory
//and export all of the components from that file
const App = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState({});

	const fetchProducts = async () => {
		const { data } = await commerce.products.list();

		setProducts(data);
	};

	const fetchCart = async () => {
		const cart = await commerce.cart.retrieve();
		setCart(cart);
	};

	const handleAddToCart = async (productId, quantity) => {
		const { cart } = await commerce.cart.add(productId, quantity);
		setCart(cart);
	};

	const handleUpdateCartQty = async (productId, quantity) => {
		const { cart } = await commerce.cart.update(productId, { quantity });

		setCart(cart);
	};

	useEffect(() => {
		fetchProducts();
		fetchCart();
	}, []);

	console.log(products);
	console.log(cart);
	return (
		<Router>
			<div>
				<NavBar totalItems={cart.total_items} />
				<Switch>
					<Route exact path="/">
						<Products products={products} onAddToCart={handleAddToCart} />
					</Route>
					<Route exact path="/cart">
						<Cart cart={cart} />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
