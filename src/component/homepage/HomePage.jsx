import React, {Component} from 'react';
import {ContentComponent, SubcribeComponent, FormComponent} from '../pages';
import {message} from 'antd';
import 'antd/dist/antd.css';
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            views: 'LIST',
            products: [],
            edit: false,
            taskEdit: null
        }
    }
    componentDidMount(){
        if(localStorage && localStorage.getItem('products')){
            var products = JSON.parse(localStorage.getItem('products'));
            this.setState({
                products: products
            })
        }
    }
    onChangerView = () =>{
        this.setState({
            views: 'FORM'
        })
    }
    findIndex = (id) =>{
        let products = JSON.parse(localStorage.getItem('products'));
        var resulf = -1;
        products.forEach((product,index) => {
            if(product.id === id){
                resulf = index;
            }
        });
        return resulf;
    }
    onAdd = (data) => {
        let products = JSON.parse(localStorage.getItem('products'));
        data.id = Math.random();
        products.push(data);
        this.setState({
            products: products,
            views: 'LIST',
        });
        localStorage.setItem('products', JSON.stringify(products));
        message.success('Thêm thành công!');
    }
    onUpdate = (data)=>{    
        let products = JSON.parse(localStorage.getItem('products'));
        if(data.id !== ''){
            var index = this.findIndex(data.id);
            products[index] = data;
        }
        this.setState({
            products: products,
            views: 'LIST',
            edit: false,
            taskEdit: null
        })
        localStorage.setItem('products', JSON.stringify(products));
        message.success('Sửa thành công!');
    }
    onDelete = (id) => {
        let products = JSON.parse(localStorage.getItem('products'));
        let productNew = products.filter(data => data.id !== id);
        this.setState({
          products: productNew
        })
        localStorage.setItem('products', JSON.stringify(productNew));
        message.error('Xóa thành công!');
    }
    onEdit = (id) =>{
        var {products} =this.state;
        var index = this.findIndex(id);
        var taskEdit = products[index];
        this.setState({
            taskEdit : taskEdit,
            views: 'FORM',
            edit: true,
        });
    }
    render() {
        const mainContent = () =>{
            switch(this.state.views){
                case 'LIST' :
                    return (
                        <ContentComponent products={products} onChangerView={this.onChangerView} onDelete={this.onDelete} onEdit={this.onEdit}></ContentComponent>
                    )
                case 'FORM':
                    return (
                        <FormComponent onAdd={this.onAdd} edit={this.state.edit}  taskEdit={taskEdit} onUpdate={this.onUpdate}></FormComponent>
                    )
                default:
                    return(
                        <></>
                    )
            }
        }
        var {products,taskEdit} = this.state;
        return (
            <div>
                {mainContent()}   
                <SubcribeComponent></SubcribeComponent>
            </div>
        );
    }
}

export default HomePage;