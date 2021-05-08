const Provider = ( { provider } ) => {

    const oneProvider = provider.results

    const thisProvider = oneProvider[0]

    console.log(thisProvider)

    const providerAddress = thisProvider.addresses

    const providerTaxonomies = thisProvider.taxonomies

    console.log(providerAddress)

    return (
        <div>
            <h1>{thisProvider.basic.first_name} {thisProvider.basic.last_name}, {thisProvider.basic.credential}  </h1>
            <h2>NPI: {thisProvider.number}</h2>
            <h3>ADDRESSES</h3>
            {<p>
                {providerAddress.map((address) => (
                    <div>
                        
                        <p>{address.address_1}</p>
                        <p>{address.address_2}</p>
                        <p>{address.address_2}</p>
                        <p>{address.city}, {address.state}</p>
                    </div>
                ))}
            </p>}
            <h3>TAXONOMIES</h3>
            {<p>
                {providerTaxonomies.map((tax) => (
                    <div>
                        
                        <p>{tax.desc}</p>
                        <p>{tax.state} LICENSE: {tax.license}</p>
                    </div>
                ))}
            </p>}
            <button>FSMB</button>
        </div>
    )

}

export async function getServerSideProps(context) {

    const NPI = context.query.number;

    const res = await fetch (`https://npiregistry.cms.hhs.gov/api/?number=${NPI}&enumeration_type=&taxonomy_description=&first_name=&use_first_name_alias=&last_name=&organization_name=&address_purpose=&city=&state=&postal_code=&country_code=&limit=1&skip=&version=2.1`)

    const provider = await res.json()

    return {
        props: {
            provider
        }
    }


}

export default Provider