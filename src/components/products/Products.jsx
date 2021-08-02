import React from "react";
import Grid from "@material-ui/core";

const Products = () => {

    const products = [
        { id: 1, name: "thingamajig", description: "the damn coolest thingamajig in town." },
        { id: 2, name: "whatchamacallit", description: "its so awesome you will forget everything else."}
    ]
	<main>
		<Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product />
                </Grid>
            ))}
        </Grid>
	</main>;
};

export default Products