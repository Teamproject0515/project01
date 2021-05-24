import React, { Component } from 'react';
import ApiService from "../../ApiService";
// import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import CreateIcon from '@material-ui/icons/Create';
// import DeleteIcon from '@material-ui/icons/Delete';


class ProductListComponent extends Component{

    constructor(props){
        super(props);

        this.state = {
            products : [],
            message : null
        }
    }

    componentDidMount(){
        this.reloadProductList();
    }

    reloadProductList = () => {
        ApiService.fetchProducts()
        .then( res => {
            this.setState({
                products : res.data
            });
        })
        .catch(err => {
            console.log('reloadProductList() Error!', err);
        })
    }

    // deleteUser = (userID) => {
    //     ApiService.deleteUser(userID)
    //     .then( res => {
    //         this.setState({
    //             message : 'User Deleted Successfully.'
    //         });
    //         this.setState({
    //             users : this.state.users.filter(user =>
    //                 user.id !== userID)
    //         });
    //     })
    //     .catch(err =>{
    //         console.log('deleteUser() Error!', err);
    //     })
    // }

    // editUser = (ID) => {
    //     window.localStorage.setItem("userID", ID);
    //     this.props.history.push('/edit-user');
    // }

    // addUser = () => {
    //     window.localStorage.removeItem("userID");
    //     this.props.history.push('/add-user');
    // }

    selectProduct = (SEQ) => {
        window.localStorage.setItem("ProductSEQ", SEQ);
        this.props.history.push('product-detail');
    }

    render(){
        return(
            <div>
                <div style={{marginLeft:'200px', marginRight:'200px'}}>
                <Grid container spacing={3}>
                <Grid item xs={12}> <Typography variant ="h4" style={style}>Product List2</Typography></Grid>
                {this.state.products.map(product =>
                <Grid item xs={6} sm={4}>
                    <Table style={{backgroundColor:'lightblue'}}>          
                                <div alingn="right" onClick = {() => {this.selectProduct(product.product_seq)}}>

                                <TableRow key={product.product_seq}>
                                    <TableCell component="th" scope="product"> {product.product_img} </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell alingn="right">{ product.product_title }</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell alingn="right">{ product.product_price }</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell alingn="right">                                    
                                    <div style={{marginRight:'3px', float : 'left', width:'15px', height:'15px', backgroundColor:product.color1}}></div>
                                    <div style={{marginRight:'3px', float : 'left', width:'15px', height:'15px', backgroundColor:product.color2}}></div>
                                    <div style={{marginRight:'3px', float : 'left', width:'15px', height:'15px', backgroundColor:product.color3}}></div>
                                    <div style={{marginRight:'3px', float : 'left', width:'15px', height:'15px', backgroundColor:product.color4}}></div>
                                    <div style={{marginRight:'3px', float : 'left', width:'15px', height:'15px', backgroundColor:product.color5}}></div>
                                    <div style={{marginRight:'3px', float : 'left', width:'15px', height:'15px', backgroundColor:product.color6}}></div>
                                    <div style={{marginRight:'3px', float : 'left', width:'15px', height:'15px', backgroundColor:product.color7}}></div>
                                    <div style={{marginRight:'3px', float : 'left', width:'15px', height:'15px', backgroundColor:product.color8}}></div>
                                    <div style={{marginRight:'3px', float : 'left', width:'15px', height:'15px', backgroundColor:product.color9}}></div>
                                    <div style={{marginRight:'3px', float : 'left', width:'15px', height:'15px', backgroundColor:product.color10}}></div>
                                    <div style={{marginRight:'3px', float : 'left', width:'15px', height:'15px', backgroundColor:product.color11}}></div>
                                    <div style={{marginRight:'3px', float : 'left', width:'15px', height:'15px', backgroundColor:product.color12}}></div>
                                    </TableCell>
                                </TableRow>
                                </div>
                    </Table>
                </Grid>
                )}
                </Grid>
                </div>
            </div>
        );
    }

}

const style = {
    display: 'flex',
    justifyContent: 'center'
}

// const root = {
//     root: {
//         flexGrow: 1,
//       },
// }

export default ProductListComponent;