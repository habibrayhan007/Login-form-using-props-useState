import React from 'react'
import '../../assets/css/main.css';
import { Input, Button } from '@mui/material';

const SignUpFirst = ({ setPage, formData, setFormData }) => {
    return (
        <div className='signup-first'>
            <Input type='email' placeholder="Email Address" value={formData.email}
                onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })} />

            <Input type='text' placeholder="Username" value={formData.username}
                onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })} />

            <Input type='password' placeholder="Password" value={formData.password}
                onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })} />

            <Button
                onClick={() => {
                    setPage((currentPage) => currentPage + 1);
                }}
                size='large' variant="contained">Next</Button>
        </div>
    )
}

export default SignUpFirst;