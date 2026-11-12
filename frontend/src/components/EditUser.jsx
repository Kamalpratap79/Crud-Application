import { useState, useEffect } from 'react';

import { FormGroup, FormControl, InputLabel,Input, Typography,Button,styled} from '@mui/material';

import { useNavigate, useParams} from 'react-router-dom';

import { getUsers, editUser } from '../service/api.js';

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

const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {
        const response = await getUsers(id);
        setUser(response.data);
    }

    const editUserDetails = async() => {
        const response = await editUser(id, user);
        navigate('/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }


    return (
       <Container>
        <Typography variant='h4'>Edit User</Typography>  
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="name" value={user.name}/>
        </FormControl>
        <FormControl>
            <InputLabel>Username</InputLabel>
            <Input onChange={(e) => onValueChange(e)}name="username" value={user.username}/>
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e) => onValueChange(e)}name="email" value={user.email}/>
        </FormControl>
        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={(e) => onValueChange(e)}name="phone" value={user.phone}/>
        </FormControl>
        <FormControl>
            <Button onClick={editUserDetails} variant='contained'>Edit User</Button>
        </FormControl>
         
       </Container>
    )
}

export default EditUser;