import axios from 'axios'

export default async (req, res) => {

    const { param } = req.query

    const last_name = param[0]
    
    const first_name = param[1]

    console.log(`query: ${last_name}`)

    console.log(`query: ${first_name}`)
    
    const url = `https://npiregistry.cms.hhs.gov/api/?number=&enumeration_type=&taxonomy_description=&first_name=${first_name}&use_first_name_alias=&last_name=${last_name}&organization_name=&address_purpose=&city=&state=&postal_code=&country_code=&limit=200&skip=&version=2.1`

    await axios
        .get(url)
        .then(({data}) => {
            res.status(200).json({ data }),
            console.log(data)
        })
        .catch(({ err }) => {
            res.status(400).json({ err })
        })
}; 