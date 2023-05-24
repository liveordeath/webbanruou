export function ListMenu(props) {
    return <footer id="footer" className="footer">

        <div className="container">
            <div className="row gy-3">
                <div className="col-lg-3 col-md-6 d-flex">
                    <i className="bi bi-geo-alt icon"></i>
                    <div>
                        <h4>Địa chỉ</h4>
                        <p>
                            188 Khương Thượng <br/>
                            Đống Đa - Hà Nội<br/>
                        </p>
                    </div>

                </div>

                <div className="col-lg-3 col-md-6 footer-links d-flex">
                    <i className="bi bi-telephone icon"></i>
                    <div>
                        <h4>Đặt hàng</h4>
                        <p>
                            <strong>Phone:</strong> 0984768803<br/>
                            <strong>Email:</strong> tien.th1901@gmail.com<br/>
                        </p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 footer-links d-flex">
                    <i className="bi bi-clock icon"></i>
                    <div>
                        <h4>Giờ mở cửa</h4>
                        <p>
                            <strong>Sáng từ: 6AM - 11AM</strong> Chiều từ : 13PM - 23PM<br/>
                            Tất cả các ngày trong tuần
                        </p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Thông tin thêm</h4>
                    <div className="social-links d-flex">
                        <a href="https://www.facebook.com/jokeritme/" className="twitter"><i className="bi bi-twitter"></i></a>
                        <a href="https://www.facebook.com/jokeritme/" className="facebook"><i className="bi bi-facebook"></i></a>
                        <a href="https://www.facebook.com/Huyit862" className="instagram"><i className="bi bi-instagram"></i></a>
                        <a href="https://www.facebook.com/Huyit862" className="linkedin"><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>

            </div>
        </div>

        <div className="container">
            <div className="copyright">
                &copy; web tự làm <strong><span>TienTran</span></strong>.
            </div>
            <div className="credits">
                Designed by <a href="https://bootstrapmade.com/">TienTran</a>
            </div>
        </div>

    </footer>
}
export default ListMenu;
