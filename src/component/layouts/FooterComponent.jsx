import React, {Component} from 'react';

class FooterComponent extends Component {
    render() {
        return (
            <footer className="b-footer-page">
                <div className="b-footer">
                    <div className="b-logo">
                        <a  href="/" className="link-logo">BOOKCLUBZ</a>
                    </div>
                    <div className="b-menu">
                        <ul className="sub-menu">
                            <li className="list-item list-1">
                                <a className="link-item"  href="/">BOOK</a>
                            </li>
                            <li className="list-item">
                                <a className="link-item"  href="/">ABOUT</a>
                            </li>
                            <li className="list-item list-2">
                                <a className="link-item" href="/">BLOG</a>
                            </li>
                            <li className="list-item">
                                <a className="link-item"  href="/">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="b-social">
                        <a className="link-social"  href="/"><i className="fab fa-facebook-f"/></a>
                        <a className="link-social"  href="/"><i className="fab fa-instagram"/></a>
                        <a className="link-social"  href="/"><i className="fab fa-twitter-square"/></a>
                    </div>
                </div>
                <div className="b-copyright">
                    <p className="copyright text-center">© 2019 Bookclubz. All rights reserved</p>
                </div>
            </footer>
        );
    }
}

export default FooterComponent;