import reservation from '../../assets/img/reservation.jpg';
export function BookingComponent(props) {
    return <section id="book-a-table" className="book-a-table">
        <div className="container" data-aos="fade-up">
            <div className="section-header">
                <h2>Đặt hàng</h2>
                <p>Đặt <span>rượu quê</span> ngay bây giờ</p>
            </div>

            <div className="row g-0">
                <div className="col-lg-4 reservation-img" style={{backgroundImage: `url(${reservation})`}}
                     data-aos="zoom-out" data-aos-delay="200"></div>
                <div className="col-lg-8 d-flex align-items-center reservation-form-bg">
                    <form action="../../forms/book-a-table.php" method="post" role="form" className="php-email-form"
                          data-aos="fade-up" data-aos-delay="100">
                        <div className="row gy-4">
                            <div className="col-lg-4 col-md-6">
                                <input type="text" name="name" className="form-control" id="name"
                                       placeholder="Tên của bạn" data-rule="minlen:4"
                                       data-msg="Please enter at least 4 chars"/>
                                    <div className="validate"></div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <input type="email" className="form-control" name="email" id="email"
                                       placeholder="Email" data-rule="email" data-msg="Please enter a valid email"/>
                                    <div className="validate"></div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <input type="text" className="form-control" name="phone" id="phone"
                                       placeholder="Số điện thoại" data-rule="minlen:4"
                                       data-msg="Please enter at least 4 chars"/>
                                    <div className="validate"></div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <input type="text" name="date" className="form-control" id="date" placeholder="Ngày nhận hàng mong muốn"
                                       data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
                                    <div className="validate"></div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <input type="text" className="form-control" name="time" id="time" placeholder="Giờ nhận"
                                       data-rule="minlen:4" data-msg="Lưu ý khi giao hàng"/>
                                    <div className="validate"></div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <input type="number" className="form-control" name="people" id="people"
                                       placeholder="Số lượng (lít)" data-rule="minlen:1"
                                       data-msg="Please enter at least 1 chars"/>
                                    <div className="validate"></div>
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <textarea className="form-control" name="message" rows="5" placeholder="Lưu ý khi giao hàng"></textarea>
                            <div className="validate"></div>
                        </div>
                        <div className="mb-3">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">Your booking request was sent. We will call back or send an
                                Email to confirm your reservation. Thank you!
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit">Đặt ngay</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
}
export default BookingComponent