import heroImg from '../../assets/img/hero-img.png';
export function Banner(props) {
    return (
        <section id="hero" className="hero d-flex align-items-center section-bg">
            <div className="container">
                <div className="row justify-content-between gy-5">
                    <div
                        className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
                        <h2 data-aos="fade-up">Mua rượu ở đây<br/> Uống say không đau đầu</h2>
                        <p data-aos="fade-up" data-aos-delay="100">Rượu của chúng tôi nấu bằng công thức từ đời ông cha truyền lại. Có vô vàn loại rượu ngâm dành cho bạn lựa chọn.</p>
                        <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
                            <a href="tel:0984768803" className="btn-book-a-table">Đặt hàng ngay</a>
                            <a href="https://www.youtube.com/watch?v=RlPLfAOYC2o"
                               className="glightbox btn-watch-video d-flex align-items-center"><i
                                className="bi bi-play-circle"></i><span>Tham quan khu nấu rượu</span></a>
                        </div>
                    </div>
                    <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
                        <img src={heroImg} className="img-fluid" alt="" data-aos="zoom-out"
                             data-aos-delay="300"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Banner
