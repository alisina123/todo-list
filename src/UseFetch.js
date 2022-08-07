import { useState, useEffect } from "react";

const UseFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setPending] = useState(true);
    const [error, setError] = useState(null);

 
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error("Can not fetch data");
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setPending(false);
                })
                .catch(err => {
                    setError(err.message);
                    setPending(false);
                })
        }, 1000);
    }, [url])
    return {data ,isPending ,error};
}

export default UseFetch;