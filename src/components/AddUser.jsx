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
    const navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({ ...user,[e.target.name] : e.target.value})
        console.log(user);
    }

    const addUserDetails = async () => {
    try {
        const response = await getUsers();

        const nextId = Math.max(
            0,
            ...response.data.map(user => Number(user.id) || 0)
        ) + 1;

        const newUser = {
            ...user,
            id: String(nextId)
        };

        console.log(newUser);

        await addUser(newUser);

        navigate('/all');

    } catch (error) {
        console.error('Error adding user:', error);
    }
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
            <Button onClick={addUserDetails} variant='contained'>Add User</Button>
        </FormControl>
         
       </Container>
    )
}

export default AddUser;