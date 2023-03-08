import { useState } from "react";
import useFetchProducts from "../hooks/useFetchProducts";
import { Product } from "../common/types";
import ProductTable from "./ProductTable";

const Products = () => {
	const { products } = useFetchProducts("https://fakestoreapi.com/products");
	const [cart, setCart] = useState<Product[]>([]);

	const addToCart = (item: Product) => {
		setCart((prevItems) => [...prevItems, item]);
	};

	return <ProductTable products={products} handleAddToCart={addToCart} />;
};

export default Products;
