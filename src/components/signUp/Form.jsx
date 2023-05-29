import React, { useState } from 'react'
import SignUpHeader from './SignUpHeader'
import SignUpFirst from './SignUpFirst';
import SignUpSecond from './SignUpSecond';
import FormValue from './FormValue';
import SignUpConfirm from '../done/SignUpConfirm';

const Form = () => {

    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        residence: "",
        education: "",
    });

    /* const pageDisplay = () => {
        if (page === 0) {
            return (
                <div>
                    <SignUpHeader />
                    <SignUpFirst setPage={setPage} formData={formData} setFormData={setFormData} />
                </div>
            )
        }
        else if (page === 1) {
            return (
                <div>
                    <SignUpHeader />
                    <SignUpSecond setPage={setPage} formData={formData} setFormData={setFormData} />
                </div>
            )
        }
        else if (page === 2) {
            return (
                <div>
                    <SignUpHeader />
                    <FormValue setPage={setPage} formData={formData} />
                </div>
            )
        }
        else if (page === 3) {
            return <SignUpConfirm />
        }
    } */

    const pageDisplay = () => {
        const pageComponents = {
            0: <SignUpFirst setPage={setPage} formData={formData} setFormData={setFormData} />,
            1: <SignUpSecond setPage={setPage} formData={formData} setFormData={setFormData} />,
            2: <FormValue setPage={setPage} formData={formData} />,
            3: <SignUpConfirm />,
        };

        const componentToDisplay = pageComponents[page];

        return (
            <div>
                {page <= 2 && <SignUpHeader />}
                {componentToDisplay}
            </div>
        );
    };

    return (
        <div className='form-body'>
            {pageDisplay()}
        </div>
    )
}

export default Form;