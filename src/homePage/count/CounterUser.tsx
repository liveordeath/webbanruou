// import heroImg from '../../assets/img/hero-img.png';
export function CounterUser(props) {
    return <section id="stats-counter" className="stats-counter">
        <div className="container" data-aos="zoom-out">
            <div className="row gy-4">
                <div className="col-lg-3 col-md-6">
                    <div className="stats-item text-center w-100 h-100">
                        <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1"
                              className="purecounter"></span>
                        <p>Khách hàng thân thiết</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="stats-item text-center w-100 h-100">
                        <span data-purecounter-start="0" data-purecounter-end="21" data-purecounter-duration="1"
                              className="Loại rượu"></span>
                        <p>Projects</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="stats-item text-center w-100 h-100">
                        <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1"
                              className="purecounter"></span>
                        <p>Đơn đặt hàng</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="stats-item text-center w-100 h-100">
                        <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1"
                              className="purecounter"></span>
                        <p>Loại thảo mộc</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
export default CounterUser