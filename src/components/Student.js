import * as React from 'react';
import { useState } from 'react';
import { Box, Button, Paper, TextField } from '@mui/material';

export default function Student() {
    const myStyle = { padding: '40px 20px', width: 500, margin: '20px auto' }
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')

    const addStudent = (input) => {
        input.preventDefault();
        const student = { name, address }
        console.log(student)
        fetch("http://localhost:8080/student/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student)
        }).then(() => {
            console.log("Student has been added")
        })
    }



    return (
        <Paper elevation={3} style={myStyle}>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <h1>Add student</h1>

                <TextField id="outlined-basic" label="Student Name" variant="outlined"
                    value={name}
                    onChange={(input) => setName(input.target.value)}
                />
                <TextField id="outlined-basic" label="Address" variant="outlined"
                    value={address}
                    onChange={(input) => setAddress(input.target.value)}
                />
                <Button variant="contained" onClick={addStudent}>Add</Button>
            </Box>
        </Paper >
    );
}
