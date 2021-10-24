import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const Details = () => {
  const { key } = useParams();
  let { data, isPending, error } = useFetch(
    `https://openlibrary.org/works/${key}.json`
  );

  return (
    <div className="container">
      <h1>Book Details</h1>
      {isPending && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {data && (
        <>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </>
      )}
    </div>
  );
};

export default Details;
