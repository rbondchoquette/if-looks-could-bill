import useSWR from 'swr';
import axios from 'axios';

const TestChild = ({last_name, first_name}) => {

  const fetcher = url => fetch(url).then(res => res.json());

  const { data, error } = useSWR(`/api/${last_name}/${first_name}`, fetcher)

  if (data) {
    console.log(data)
    const results = data.data.results
    results.forEach(result => {

        console.log(result)
      
    });
    return (
        <div>
          <div>
            {data.data.result_count}
            {<ul>
              {results.map((result) => (
                <li>
                  
                    <div>
                      <p>{result.basic.last_name}, {result.basic.first_name}: {result.number}</p>
                    </div>

                </li>
              ))}
              </ul>}
          </div>
        </div>
    );
  } else {
    return (null)
  }
}

export default TestChild