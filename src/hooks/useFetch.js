import { useEffect, useState } from "react";

const useFetch = (path) =>  {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/data.json")
            .then(resp => { return resp.json() })
            .then(apiData => setData(apiData[path]))
    }, [path])

    return data
}

export default useFetch;