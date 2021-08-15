import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { Products, NavBar } from "./components";
//^^this is a cleaner way to import the lines below
//import Products from "./components/products/Products";
//import NavBar from './components/NavBar/NavBar'
//for this abbreviation to work we must create an index.js file in our components directory
//and export all of the components from that file
const App = () => {
	const [products, setProducts] = useState([]);

	const fetchProducts = async () => {
		const { data } = await commerce.products.list();

		setProducts(data);
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<div>
			<NavBar />
			<Products products={products} />
		</div>
	);
};

export default App;
