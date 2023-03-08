import { Product } from "../common/types";

interface Props {
	products: Product[];
	handleAddToCart: (item: Product) => void;
}

const ProductTable = ({ products, handleAddToCart }: Props) => {
	return (
		<table>
			<thead>
				<tr>
					<th>title</th>
					<th>price</th>
					<th>description</th>
					<th>Add to Cart</th>
				</tr>
			</thead>
			<tbody>
				{products.map((product) => (
					<tr key={product.id}>
						<td>{product.title}</td>
						<td>{product.price}</td>
						<td>{product.description}</td>
						<td>
							<button onClick={() => handleAddToCart(product)}>
								Add to Cart
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default ProductTable;
