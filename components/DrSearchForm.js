import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DrSearchResults from './DrSearchResults'
import { useState } from 'react'
import styles from '../styles/Home.module.css'


const DrSearchForm = ({ }) => {

    const [last_name, setLast_Name] = useState('');
    const [first_name, setFirst_Name] = useState('');

    return (
        <div>
            <Formik
                initialValues={{ last_name: '', first_name: '' }}
                validationSchema={
                    Yup.object({
                        last_name: Yup.string()
                            .min(2, 'too short!')
                            .max(30, 'too long!')
                            .required('required'),
                        first_name: Yup.string()
                            .min(2, 'too short!')
                            .max(30, 'too long!')
                            .required('required'),
                    })
                }
                onSubmit={
                    async (values) => {
                        try {
                            setLast_Name(values.last_name);
                            setFirst_Name(values.first_name)
                        } catch (e) {
                            console.log(e)
                        }

                    }
                }
            >
                <Form>
                    <label htmlFor='last_name'>last name</label><br />
                    <Field name='last_name' type='text' className={styles.input}></Field><br />
                    <div className={styles.errorMessage}><ErrorMessage name='last_name' /></div><br />
                    <label htmlFor='first_name'>first name</label><br />
                    <Field name='first_name' type='text' className={styles.input}></Field><br />
                    <div className={styles.errorMessage}><ErrorMessage name='first_name'/></div>
                    <button type='submit' className={styles.button}>search</button>
                </Form>
            </Formik>
            <DrSearchResults last_name={last_name} first_name={first_name}/>
        </div> 
    );
}

export default DrSearchForm