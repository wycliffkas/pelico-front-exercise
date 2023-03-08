import { useParams } from "react-router-dom";
import useFetchProducts from "../hooks/useFetchProducts";

const Product = () => {
	const { id } = useParams();
	// const { products } = useFetchProducts(
	// 	`'https://fakestoreapi.com/products/${id}`
	// );

	return (
		<div>
			<p>products</p>
		</div>
	);
};

export default Product;
