import { useState } from "react";
import { useEffect } from "react";

const useFetch = ({ url, dependency = [] }) => {
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setLoading(false)
				setData(data)
			})
			.catch((error) => {
				setLoading(false)
				setError(error)
				console.log(error)
			});
	}, dependency);

	return { data, error, loading }
};

export default useFetch;
