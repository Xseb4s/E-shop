/* importo los hooks */
import { useEffect, useState } from "react";

/* metodo para cualquier API */
export function useFetch(url) {
    
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => setError(error))
    }, [url]);

    return { data, error }
}