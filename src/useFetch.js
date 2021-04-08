import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
    const getfetch = async(url, abortCont) =>{
        const res = await fetch(url, { signal: abortCont.signal });
        if(!res.ok){
            throw Error('Could not fetch data from source');
        }
        const val = await res.json()
        return val;
    };
    
    useEffect(() => {
        const abortCont = new AbortController();

        getfetch(url, abortCont)
            .then(data => {
                setIsPending(false);
                setData(data);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError'){
                    console.log('fetch aborted');
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            })

        return ()=> abortCont.abort();

    }, [url]);

    return { data, isPending, error };
}

export default useFetch;