import useFetch from './useFetch';
const DataFetch = ({ url, children })=> {
    
      const { data, loading, error } = useFetch(url);
    
      return children({ data, loading, error });
    };
export default DataFetch