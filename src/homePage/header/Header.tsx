// @ts-ignore
import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";

export function Header(props) {
    const [isRefreshing, setIsRefreshing] = useState(false);

    return (
        <header id="header" className={"header fixed-top d-flex align-items-center"}>
            <a href="index.html" className={"logo d-flex align-items-center me-auto me-lg-0"}></a>
            {/*<h1>Yummy<span>.</span></h1>*/}
            <div className="container d-flex align-items-center justify-content-between">
                <a href="index.html" className="logo d-flex align-items-center me-auto me-lg-0">
                    <h1>Rượu quê<span>.</span></h1>
                </a>
                <nav id="navbar" className="navbar">
                    <ul>
                        <li><a href="src/homePage/header/Header#hero">Trang chủ</a></li>
                        <li><a href="src/homePage/header/Header#about">Táo Mèo</a></li>
                        <li><a href="src/homePage/header/Header#menu">Ba kích</a></li>
                        <li><a href="src/homePage/header/Header#events">Rượu dứa</a></li>
                        <li><a href="src/homePage/header/Header#chefs">Rượu tắc kè</a></li>
                        <li><a href="src/homePage/header/Header#gallery">Rượu nếp cái hoa vàng</a></li>
                        <li className="dropdown"><a href="src/homePage/header/Header#"><span>Drop Down</span> <i
                            className="bi bi-chevron-down dropdown-indicator"></i></a>
                            <ul>
                                <li><a href="src/homePage/header/Header#">Drop Down 1</a></li>
                                <li className="dropdown"><a href="src/homePage/header/Header#"><span>Deep Drop Down</span> <i
                                    className="bi bi-chevron-down dropdown-indicator"></i></a>
                                    <ul>
                                        <li><a href="src/homePage/header/Header#">Deep Drop Down 1</a></li>
                                        <li><a href="src/homePage/header/Header#">Deep Drop Down 2</a></li>
                                        <li><a href="src/homePage/header/Header#">Deep Drop Down 3</a></li>
                                        <li><a href="src/homePage/header/Header#">Deep Drop Down 4</a></li>
                                        <li><a href="src/homePage/header/Header#">Deep Drop Down 5</a></li>
                                    </ul>
                                </li>
                                <li><a href="src/homePage/header/Header#">Drop Down 2</a></li>
                                <li><a href="src/homePage/header/Header#">Drop Down 3</a></li>
                                <li><a href="src/homePage/header/Header#">Drop Down 4</a></li>
                            </ul>
                        </li>
                        <li><a href="tel:0984768803">Contact</a></li>
                    </ul>
                </nav>
                <a className="btn-book-a-table" href="tel:0984768803">Đặt hàng ngay</a>
                <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
            </div>
        </header>
        // <Container>
        //     <Row>
        //         <Col>Tran tien</Col>
        //         <Col>Tien tran</Col>
        //     </Row>
        // </Container>
    )
}
export default Header