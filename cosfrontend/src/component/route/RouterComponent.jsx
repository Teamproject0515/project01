import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ProductListComponent from "../product/ProductListCategoryComponent";
import ProductDetailComponent from "../product/ProductInfoComponet";
import MainComponent from "../../Maincomponent/Main";

const AppRouter = () => {
    return(
        <div style={style}>
            <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={MainComponent} />
                        <Route path="/product-list" component={ProductListComponent} />
                        <Route path="/product-detail" component={ProductDetailComponent} />
                    </Switch>
            </BrowserRouter>
        </div>
    );
}

const style = {
    marginTop: '20px'
}

export default AppRouter;