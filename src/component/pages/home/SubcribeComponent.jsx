import React, {Component} from 'react';

class SubcribeComponent extends Component {
    render() {
        return (
            <section className="b-blog-page">
                <div className="container">
                    <div className="b-blog text-center">
                        <h1 className="b-title">Subscribe to the blog to receive email updates of new blog posts
                        </h1>
                        <form className="form-subscribe">
                            <input className="input-form" placeholder="Enter your email"/>
                            <button className="btn-submit waves-effect waves-light btn-large" type="submit">SUBSCRIBE TO THE BLOG</button>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default SubcribeComponent;