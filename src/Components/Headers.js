import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box, Button, IconButton, Rating, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import { ADD, REMOVE } from '../Redux/actions/action'
import { useNavigate } from 'react-router-dom';

function Headers() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [total, setTotal] = React.useState(0);
    const dispatch = useDispatch();
    const handleClose = () => {
        setAnchorEl(null);
    };
    const navigate = useNavigate();

    const items = useSelector((state) => state.cartReducer.carts)
    const handleClick = (event) => {
        console.log(items, "vvvvvvvvvvvvvvvvv");
        setAnchorEl(event.currentTarget);
    };


    useEffect(() => {
        getTotal();
    }, [items])

    const getTotal = () => {
        // Use reduce to calculate the total sum of item prices
        let total = items.reduce((acc, item) => {
            console.log(item.price, item.qnty, "current total:", acc);
            return acc + Number(item.price * item.qnty); // Convert price to number if it's in string form
        }, 0); // 0 is the initial value of the accumulator

        setTotal(total); // Update the state with the total sum
    };


    const handleRemove = (row) => {
        console.log(row);
        dispatch(REMOVE(row))
    }

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={NavLink} to="/">Home</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/add">Add To Cart</Nav.Link>
                    </Nav>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <Badge badgeContent={items.length} color="primary">
                            <ShoppingCartIcon />
                        </Badge>
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >

                        {items.length ?
                            <Paper>
                                <TableContainer component={Paper}>
                                    <Table aria-label="simple table">
                                        {/* Table Header */}
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>
                                                    Photo
                                                </TableCell>
                                                <TableCell>Name</TableCell>
                                                <TableCell>Price</TableCell>
                                                <TableCell>Rating</TableCell>
                                                <TableCell>
                                                    <IconButton onClick={handleClose} > <CloseIcon /></IconButton> </TableCell>
                                            </TableRow>
                                        </TableHead>

                                        {/* Table Body */}
                                        <TableBody>
                                            {items.map((row, index) => (
                                                <TableRow key={`${row.id}-${index}`} >
                                                    <TableCell>
                                                        <img onClick={() => navigate(`cart/${row.id}`)} src={row.imgdata} alt={row.name} style={{ width: '50px', height: '50px' }} />
                        
                                                    </TableCell>
                                                    <TableCell>{row.rname}</TableCell>
                                                    <TableCell>{row.price}₹</TableCell>
                                                    <TableCell>
                                                        <Rating name="read-only" value={Number(row.rating)} readOnly /></TableCell>
                                                    <TableCell>
                                                        <IconButton onClick={() => handleRemove(row.id)}>
                                                            <DeleteIcon />
                                                        </IconButton>
                                                    </TableCell>
                                                    <TableCell>{row.qnty}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <Typography>Total: {total}</Typography>
                                <Paper />
                            </Paper> :
                            <Box display="flex" flexDirection="row" alignItems='center' padding={2}>
                                <Typography>Your carts is empty</Typography>
                                <img src="./cart.gif" alt="" className='emptycart_img' style={{ width: "5rem", padding: 10 }} />
                            </Box>
                        }

                        {/* <MenuItem onClick={handleClose}>Your Cart is Empty</MenuItem> */}
                        {/* <CloseIcon/> */}
                    </Menu>
                </Container>
            </Navbar>
        </>
    );
}

export default Headers;
