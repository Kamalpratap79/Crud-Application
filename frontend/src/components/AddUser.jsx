import { useState } from 'react';

import { FormGroup, FormControl, InputLabel,Input, Typography,Button,styled} from '@mui/material';

import { useNavigate } from 'react-router-dom';

import { addUser , getUsers } from '../service/api.js';

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div {
        margin-top: 20px;
    }
`    

const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const AddUser = () => {

    const [user, setUser] = useState(initialValue);
    const { name, username, email, phone } = user;
    const navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({ ...user,[e.target.name] : e.target.value})
    }

     const addUserDetails = async() => {
        await addUser(user);
        navigate('/all');
    }


    return (
       <Container>
        <Typography variant='h4'>Add User</Typography>  
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="name" />
        </FormControl>
        <FormControl>
            <InputLabel>Username</InputLabel>
            <Input onChange={(e) => onValueChange(e)}name="username"/>
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e) => onValueChange(e)}name="email"/>
        </FormControl>
        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={(e) => onValueChange(e)}name="phone"/>
        </FormControl>
        <FormControl>
             <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add User</Button>
        </FormControl>
         
       </Container>
    )
}

export default AddUser;