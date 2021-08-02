import React from "react";
import Grid from "@material-ui/core/Grid";

import Product from "./Product/Product";
import useStyles from "./Product/styles";

const products = [
	{
		id: 1,
		name: "thingamajig",
		description: "the damn coolest thingamajig in town.",
		price: "$4",
	},
	{
		id: 2,
		name: "whatchamacallit",
		description: "its so awesome you will forget everything else.",
		price: "$7",
	},
];

const Products = () => {
	return (
		<main>
			<Grid container justify="center" spacing={4}>
				{products.map((product) => (
					<Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
						<Product product={product} />
					</Grid>
				))}
			</Grid>
		</main>
	);
};

export default Products;
