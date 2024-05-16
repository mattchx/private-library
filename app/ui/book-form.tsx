"use client"

import React from 'react'
import { Button, TextField, Grid } from '@mui/material';

export default function BookForm() {
    const handleSubmit = () => {
        console.log("submit handled")
    }

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
               
            </Grid>
            <Button color="primary">Submit</Button>
        </form>
    )
}