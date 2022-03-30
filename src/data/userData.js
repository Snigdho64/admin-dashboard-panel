import { Button } from '@mui/material'

export const userColumns = [
    {
        field: 'id',
        headerName: 'ID',
        minWidth: 100,
        flex: 0.5,
    },
    {
        field: 'user',
        headerName: 'User',
        minidth: 200,
        flex: 0.5,
        cellClassName: 'userCell',
        renderCell: (params) => (
            <>
                <img
                    src={params.row.avatar}
                    alt={params.name}
                    width={'50%'}
                    height={'100%'}
                />
                <span>{params.row.name}</span>
            </>
        ),
    },
    {
        field: 'email',
        headerName: 'Email',
        flex: 0.5,
        minWidth: 150,
    },
    {
        field: 'age',
        headerName: 'Age',
        width: 100,
        type: 'number',
    },
    {
        field: 'gender',
        headerName: 'Gender',
        width: 150,
    },

    {
        field: 'actions',
        headerName: 'Actions',
        minWidth: 150,
        cellClassName: 'actionsCell',
        renderCell: (params) => (
            <>
                <Button color="primary">View</Button>
                <Button color="warning">Delete</Button>
            </>
        ),
    },
]

export const userRows = [
    {
        id: '126967553',
        name: 'Jhon Doe',
        age: 34,
        gender: 'male',
        email: 'jhon.doe@gmail.com',
        avatar: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
        bio: 'Hello my name is Jhon...',
    },
    {
        id: '43334400056',
        name: 'Jane Doe',
        age: 28,
        gender: 'female',
        email: 'janedoe@gmail.com',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        bio: 'Hello my name is Jane...',
    },
    {
        id: '1556688823',
        name: 'Jhon Doe',
        age: 34,
        gender: 'male',
        email: 'jhon.doe@gmail.com',
        avatar: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
        bio: 'Hello my name is Jhon...',
    },
    {
        id: '4533636',
        name: 'Jane Doe',
        age: 28,
        gender: 'female',
        email: 'janedoe@gmail.com',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        bio: 'Hello my name is Jane...',
    },
    {
        id: '1869623',
        name: 'Jhon Doe',
        age: 34,
        gender: 'male',
        email: 'jhon.doe@gmail.com',
        avatar: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
        bio: 'Hello my name is Jhon...',
    },
    {
        id: '49708896',
        name: 'Jane Doe',
        age: 28,
        gender: 'female',
        email: 'janedoe@gmail.com',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        bio: 'Hello my name is Jane...',
    },
    {
        id: '164123',
        name: 'Jhon Doe',
        age: 34,
        gender: 'male',
        email: 'jhon.doe@gmail.com',
        avatar: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
        bio: 'Hello my name is Jhon...',
    },
    {
        id: '49076856',
        name: 'Jane Doe',
        age: 28,
        gender: 'female',
        email: 'janedoe@gmail.com',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        bio: 'Hello my name is Jane...',
    },
    {
        id: '1288763',
        name: 'Jhon Doe',
        age: 34,
        gender: 'male',
        email: 'jhon.doe@gmail.com',
        avatar: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
        bio: 'Hello my name is Jhon...',
    },
    {
        id: '45346',
        name: 'Jane Doe',
        age: 28,
        gender: 'female',
        email: 'janedoe@gmail.com',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        bio: 'Hello my name is Jane...',
    },
    {
        id: '175823',
        name: 'Jhon Doe',
        age: 34,
        gender: 'male',
        email: 'jhon.doe@gmail.com',
        avatar: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
        bio: 'Hello my name is Jhon...',
    },
    {
        id: '456578',
        name: 'Jane Doe',
        age: 28,
        gender: 'female',
        email: 'janedoe@gmail.com',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        bio: 'Hello my name is Jane...',
    },
]
