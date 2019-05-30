import React, {Component} from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <header className="b-header-page">
                <div className="b-header">
                    <div className="b-logo">
                        <a className="link-logo"  href="/">BOOKCLUBZ</a>
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
                                <a className="link-item"  href="/">BLOG</a>
                            </li>
                            <li className="list-item">
                                <a className="link-item"  href="/">FAQ</a>
                            </li>
                            <li className="list-item">
                                <button className="btn-signin waves-effect waves-teal ">SIGN IN</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}

export default HeaderComponent;