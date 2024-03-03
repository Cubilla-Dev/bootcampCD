'use client'
import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import Link from "next/link";
import axios from "axios";

export default function Home() {

  const [authors, setauthors] = useState([]);

  const getAuthors = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/author");
      const result = await response.data;
      setauthors(result);
    } catch (error) {
      console.log(error);
    }
  }


  const deleteAuthor = async(id) =>{
    try {
      const response = await axios.delete(`http://localhost:8000/api/author/${id}`);
      const result = await response.data;
      console.log(result)
      setauthors((prevValue) =>{
        const filtered = prevValue.filter((item) => item._id != id)
        return([...filtered])
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getAuthors();
  },[])
  return (
    <Fragment>
      <Typography variant="h4" sx={{ mb: 4 }}>
        <Link href={"/new"}>Add an Author</Link>
      </Typography>
      <Typography variant="h5">
        We have quotes by:
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Author</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              authors.map((item, idx)=>{
                return(
                  <TableRow key={idx}>
                  <TableCell align="center">{item.name}</TableCell>
                  <TableCell align="center" sx={{display: "flex", justifyContent:"center"}}>
                    <Stack direction={"row"} spacing={2} >
                      <Link href={`/edit/${item._id}`}>
                      <Button variant="contained"  color="info">
                        Edit
                      </Button>
                      </Link>
                      <Link href={""}>
                      <Button variant="contained"  color="error" onClick={()=> deleteAuthor(item._id)}>
                        Delete
                      </Button>
                      </Link>
                    </Stack>
                  </TableCell>
                </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
}
