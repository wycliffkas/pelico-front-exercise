import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Product, Error } from "../common/types";

interface Response {
	products: Product[];
}

const useFetchProducts = (url: string): Response => {
	const [products, setProducts] = useState([]);
	const [error, setError] = useState<Error>();

	const fetchData = () => {
		return fetch(url)
			.then((response) => response.json())
			.then((data) => setProducts(data))
			.catch((error: Error) => setError(error));
	};

	useEffect(() => {
		fetchData();
	}, [url]);

	return { products };
};

export default useFetchProducts;
