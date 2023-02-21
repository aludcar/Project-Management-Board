import { useState, useEffect} from "react" ;

export default function useDataFetching(dataSourceURL){

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState("");

    useEffect(() =>{
        async function fetchData(){
            try {
                const data = await fetch(dataSourceURL);
                const result = await data.json();
                if(result){
                    setData(result);
                    setLoading(false);
                }
            } catch (error) {
                setLoading(false);
                setError(error);
            }
        }
        fetchData();
    },[dataSourceURL])

    return [loading, error, data];
}