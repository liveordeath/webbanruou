// import about from "../../assets/img/about.png";
// import about2 from "../../assets/img/about-2.jpg";
export function chooseComponent(props) {
    return <section id="why-us" className="why-us section-bg">
        <div className="container" data-aos="fade-up">
            <div className="row gy-4">
                <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                    <div className="why-box">
                        <h3>Tại sao nên chọn chúng tôi?</h3>
                        <p>
                            Chúng tôi, những nhà sản xuất của Rượu quê, chỉ có một khát khao cháy bỏng đó là góp chút công sức nhỏ bé của mình vào việc giữ gìn, bảo tồn và phát triển những dòng rượu gạo tuyệt vời mà cha ông chúng ta đã từng làm ra trong quá khứ, dần lấy lại niềm tin và sự tự hào của người tiêu dùng đối với rượu gạo Việt Nam.
                        </p>
                        <div className="text-center">
                            <a href="#" className="more-btn">Tìm hiểu thêm <i className="bx bx-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 d-flex align-items-center">
                    <div className="row gy-4">

                        <div className="col-xl-4" data-aos="fade-up" data-aos-delay="200">
                            <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                                <i className="bi bi-clipboard-data"></i>
                                <h4>Đéo biết viết gì</h4>
                                <p>Cạn ý tưởng</p>
                            </div>
                        </div>
                        <div className="col-xl-4" data-aos="fade-up" data-aos-delay="300">
                            <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                                <i className="bi bi-gem"></i>
                                <h4>cái này tương tự</h4>
                                <p>Cũng cạn cmn ý tưởng</p>
                            </div>
                        </div>

                        <div className="col-xl-4" data-aos="fade-up" data-aos-delay="400">
                            <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                                <i className="bi bi-inboxes"></i>
                                <h4>Cái này cũng thế</h4>
                                <p>Éo nghĩ ra gì</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>
}
export default chooseComponent