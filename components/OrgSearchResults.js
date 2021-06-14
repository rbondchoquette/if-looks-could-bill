import useSWR from 'swr';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const OrgSearchResults = ({org_name}) => {

  const fetcher = url => fetch(url).then(res => res.json());

  const { data, error } = useSWR(`/api/organization/${org_name}`, fetcher)

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
                <li className={styles.searchResults}>
                  <Link href={`/organization/${encodeURIComponent(result.number)}`}>
                    <div>
                      <p>{result.basic.organization_name}: {result.number}</p>
                    </div>
                    </Link>
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

export default OrgSearchResults