import React from 'react'
import '../../assets/css/main.css';
import { Input, Button } from '@mui/material';

const SignUpSecond = ({ setPage, formData, setFormData }) => {
    return (
        <div className='signup-second'>
            <div className="name-group">
                <Input
                    className='name-group-input'
                    type='text' placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />

                <Input
                    className='name-group-input left'
                    type='text'
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
            </div>

            <Input
                type='text'
                placeholder="Country of Residence"
                value={formData.residence}
                onChange={(e) => setFormData({ ...formData, residence: e.target.value })}
            />

            <Input
                type='text'
                placeholder="Level of Education"
                value={formData.education}
                onChange={(e) => setFormData({ ...formData, education: e.target.value })}
            />

            <div className="btn-group">
                <Button
                    onClick={() => { setPage((currentPage) => currentPage - 1); }}
                    className='btn-group-input'
                    size='large'
                    variant="contained">
                    Previous
                </Button>

                <Button
                    onClick={() => { setPage((currentPage) => currentPage + 1); }}
                    className='btn-group-input left'
                    size='large'
                    variant="contained">
                    Next
                </Button>
            </div>
        </div>
    )
}

export default SignUpSecond;