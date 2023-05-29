import React from 'react'
import '../../assets/css/main.css';
import { Button, Typography } from '@mui/material';

const FormValue = ({ setPage, formData }) => {
    return (
        <div className='submit-info'>
            <div className="signup-info">
                <div className="email-info">
                    <Typography align='left' variant="h6">
                        Email
                    </Typography>
                    <Typography className='input-value' align='left' >
                        {formData.email}
                    </Typography>
                </div>
                <div className="username-info">
                    <Typography align='left' variant="h6">
                        Username
                    </Typography>
                    <Typography className='input-value' align='left' >
                        {formData.username}
                    </Typography>
                </div>
                <div className="password-info">
                    <Typography align='left' variant="h6">
                        Password
                    </Typography>
                    <Typography className='input-value' align='left' >
                        {formData.password}
                    </Typography>
                </div>
                <div className="firstName-info">
                    <Typography align='left' variant="h6">
                        First Name
                    </Typography>
                    <Typography className='input-value' align='left' >
                        {formData.firstName}
                    </Typography>
                </div>
                <div className="lastName-info">
                    <Typography align='left' variant="h6">
                        Last Name
                    </Typography>
                    <Typography className='input-value' align='left' >
                        {formData.lastName}
                    </Typography>
                </div>
                <div className="residence-info">
                    <Typography align='left' variant="h6">
                        Country of Residence
                    </Typography>
                    <Typography className='input-value' align='left' >
                        {formData.residence}
                    </Typography>
                </div>
                <div className="Education-info">
                    <Typography align='left' variant="h6">
                        Level of Education
                    </Typography>
                    <Typography className='input-value' align='left' >
                        {formData.education}
                    </Typography>
                </div>
            </div>
            <div className="btn-group">
                <Button
                    onClick={() => {
                        setPage((currentPage) => currentPage - 1);
                    }}
                    className='btn-group-input' size='large' variant="contained">Previous</Button>
                <Button
                    onClick={() => {
                        setPage((currentPage) => currentPage + 1);
                    }}
                    className='btn-group-input left' size='large' variant="contained">Confirm & Continue</Button>
            </div>
        </div>

    )
}

export default FormValue;