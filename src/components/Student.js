import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, Button, Container, Paper, TextField } from '@mui/material';

export default function Student() {
    const myStyle = { padding: '40px 20px', width: 500, margin: '20px auto' }
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [students, setStudents] = useState([])

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

    useEffect(() => {
        fetch("http://localhost:8080/student/getAll")
            .then(response => response.json())
            .then((result) => {
                setStudents(result);
            })

    }, [])



    return (
        <Container>
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

            <Paper elevation={4} style={myStyle}>

                {students.map(student => (
                    <Paper elevation={5} style={{ margin: "15px", padding: "10px", textAlign: "left" }} key={student.id}>
                        Student Name: {student.name}<br />
                        Address: {student.address}<br />
                        Student ID: {student.id}<br />
                    </Paper>
                ))
                }
            </Paper>
        </Container >
    );
}
