import React, {Component} from 'react';
import {Modal} from 'antd';
const confirm = Modal.confirm;
class ContentComponent extends Component {
    onChangerView = () => {
        this
            .props
            .onChangerView();
    }
    onDelete(id) {
        var self = this.props;
        confirm({
            title: 'Bạn chắc chắn muốn xóa? ',
            onOk(){
                self.onDelete(id)
            },
            onCancel(){
                console.log('cancel')
            }
        })
    }
    onEdit(id) {
        this.props.onEdit(id);       
    }
    render() {
        var {products} = this.props;
        return (
            <section className="b-content-page">    
            <div className="container">
                <div className="b-search">
                    <h1 className="b-title">
                        Recent Blog Posts
                    </h1>
                    <div className="b-create">
                        <button
                            className="btn-add waves-effect waves-teal"
                            onClick={this.onChangerView}>ADD</button>
                    </div>
                    <div className="b-input">
                        <span className="ficon ficon-search"/>
                        <input className="search" placeholder="SEARCH BLOG POSTS"/></div>
                </div>
                <div className="row">
                    {products.map((data) => (
                        <div className="col-md-4" key={data.id}>
                            <div className="card-product">
                                <div className="card-img">
                                    <img src={data.image} className="img" alt="img"/></div>
                                <div className="card-content">
                                    <p className="card-category">{data.category}</p>
                                    <h3 className="card-title">
                                        <a className="item-link" href="/">{data.title}</a>
                                    </h3>
                                    <p className="card-summary">{data.description}</p>
                                    <p className="card-time">{data.time}</p>
                                </div>
                                <div className="b-action text-center">
                                    <button
                                        className="btn-action  waves-effect waves-teal"
                                        onClick={this
                                        .onEdit
                                        .bind(this, data.id)}>Edit</button>
                                    <button
                                        className="btn-action  waves-effect waves-teal"
                                        onClick={this
                                        .onDelete
                                        .bind(this, data.id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
            </section>
        );
    }
}

export default ContentComponent;