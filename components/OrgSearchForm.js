import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import OrgSearchResults from './OrgSearchResults'
import { useState } from 'react'
import styles from '../styles/Home.module.css';


const DrSearchForm = ({ }) => {

    const [org_name, setOrg_Name] = useState('');

    return (
        <div className={styles.OrgSearchField}>
            <Formik
                initialValues={{ org_name: '' }}
                validationSchema={
                    Yup.object({
                        org_name: Yup.string()
                            .min(2, 'too short!')
                            .max(50, 'too long!')
                            .required('required')
                    })
                }
                onSubmit={
                    async (values) => {
                        try {
                            setOrg_Name(values.org_name);
                        } catch (e) {
                            console.log(e)
                        }

                    }
                }
            >
                <Form >
                    <div className={styles.searchOrganizations}>
                    <label htmlFor='org_name'>organization name</label><br />
                    <Field name='org_name' type='text' className={styles.input}></Field><br />
                    <div className={styles.errorMessage}><ErrorMessage name='org_name' /></div>
                    <button type='submit' className={styles.button}>search</button>
                    </div><br/>
                </Form>
            </Formik><br/>
            <OrgSearchResults org_name={org_name}/>
        </div> 
    );
}

export default DrSearchForm