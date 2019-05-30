import React, {Component} from 'react';

class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            image: '',
            category: '',
            title: '',
            description: '',
            time: '',
        }
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    componentDidMount() {
        if (this.props.taskEdit) {
          this.setState({
            id: this.props.taskEdit.id,
            image: this.props.taskEdit.image,
            category: this.props.taskEdit.category,
            title: this.props.taskEdit.title,
            description: this.props.taskEdit.description,
            time: this.props.taskEdit.time,
          })
        }
      }
    onSubmit = (event) => {
        event.preventDefault();
        if (this.props.edit) {
            this
                .props
                .onUpdate(this.state);           
        } else {
            this
                .props
                .onAdd(this.state);    
        }
    }
  
    render() {
        var {id} = this.state;
        return (
            <section className="b-form-page">
                <div className="container">
                    <form className="b-form" onSubmit={this.onSubmit}>
                        <h1 className="b-title text-center">{id !== '' ? 'Cập nhật sản phẩm' : 'Thêm sản phẩm'}</h1>
                        <div className="form-group">
                            <h5 className="title-form">Image:</h5>
                            <input
                                className="b-input"
                                placeholder="Image"
                                name="image"
                                value={this.state.image}
                                onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <h5 className="title-form">Category:</h5>
                            <input
                                className="b-input"
                                placeholder="Category"
                                name="category"
                                value={this.state.category}
                                onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <h5 className="title-form">Title:</h5>
                            <input
                                className="b-input"
                                placeholder="Title"
                                name="title"
                                value={this.state.title}
                                onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <h5 className="title-form">Description:</h5>
                            <input
                                className="b-input"
                                placeholder="Description"
                                name="description"
                                value={this.state.description}
                                onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <h5 className="title-form">Date:</h5>
                            <input
                                type="date"
                                className="b-input"
                                placeholder="Time"
                                name="time"
                                value={this.state.time}
                                onChange={this.onChange}/>
                        </div>
                        <div className="form-group text-center">
                            <button type="submit" className="btn-submit  waves-effect waves-teal">Save</button>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}

export default FormComponent;