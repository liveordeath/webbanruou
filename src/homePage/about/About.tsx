// @ts-ignore
import about from "../../assets/img/about.png";
import about2 from "../../assets/img/about-2.jpg";
export function About(props) {
    return (<section id="about" className="about">
        <div className="container" data-aos="fade-up">

            <div className="section-header">
                <h2>Về chúng tôi</h2>
                <p>Tìm hiểu thêm về <span>Rượu quê</span></p>
            </div>

            <div className="row gy-4">
                <div className="col-lg-7 position-relative about-img"
                     style={{backgroundImage: `url(${about})`}} data-aos="fade-up" data-aos-delay="150">
                    <div className="call-us position-absolute">
                        <h4>Gọi để đặt hàng</h4>
                        <p>0984768803</p>
                    </div>
                </div>
                <div className="col-lg-5 d-flex align-items-end" data-aos="fade-up" data-aos-delay="300">
                    <div className="content ps-0 ps-lg-5">
                        <p className="fst-italic">
                            Rượu của người Việt Nam đã có một lịch sử rất lâu đời, không kém gì lịch sử của nhiều loại rượu nổi danh trên Thế Giới.

                            Sự kết hợp tuyệt vời giữa men cổ truyền và gạo đặc sản đã tạo ra một loại rượu có hương vị rất đặc trưng,  thêm vào đó là khả năng pha trộn nhuần nhuyễn  các loại thảo mộc, hoa quả, mà rượu của người việt có thể trở thành những phương thuốc hỗ trợ sức khỏe, thậm chí chữa được nhiều bệnh.

                            Rượu góp mặt trong những bữa tiệc, rượu thờ cúng ông bà ngày tết, rượu họp mặt anh em và cả rượu trong những bữa tiệc ly.... rượu là một phần không thể thiếu trong văn hóa ẩm thực Việt Nam.
                        </p>
                        <ul>
                            <li><i className="bi bi-check2-all"></i>
                                Chữa xương khớp
                            </li>
                            <li><i className="bi bi-check2-all"></i>
                                Cường dương bổ thận
                            </li>
                            <li><i className="bi bi-check2-all"></i> Khiến cơ thể khoan khoái
                            </li>
                        </ul>
                        <p>
                            Nhưng tại sao rượu gạo Việt Nam, vẫn chưa có tên trên bản đồ rượu trên thế giới?Tại sao những nước châu Á gần gũi chúng ta lại có những dòng rượu gạo nổi tiếng được cả thế giới biết đến như Sochu của Hàn Quốc, Sake của Nhật Bản, hay Mao Đài của Trung Quốc mà chúng ta thì không?
                        </p>

                        <div className="position-relative mt-4">
                            <img src={about2} className="img-fluid" alt=""/>
                                <a href="https://www.youtube.com/watch?v=RlPLfAOYC2o"
                                   className="glightbox play-btn"></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>)
}
export default About;