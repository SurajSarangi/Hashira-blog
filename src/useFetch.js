import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const getfetch = async(url) =>{
        const res = await fetch(url);
        if(!res.ok){
            throw Error('Could not fetch data from source');
        }
        const val = await res.json()
        return val;
    };

    useEffect(() => {
        setTimeout(() => {
            getfetch(url)
                .then(data => {
                    setIsPending(false);
                    setData(data);
                    setError(null);
                })
                .catch(err => {
                    setIsPending(false);
                    setError(err.message);
                })
        }, 200);
    }, [url]);

    return { data, isPending, error };
}

export default useFetch;