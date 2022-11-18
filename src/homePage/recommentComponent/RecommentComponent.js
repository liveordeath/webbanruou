import testimonials from '../../assets/img/testimonials/testimonials-1.jpg';
import testimonials2 from '../../assets/img/testimonials/testimonials-2.jpg';
import testimonials3 from '../../assets/img/testimonials/testimonials-3.jpg';
import testimonials4 from '../../assets/img/testimonials/testimonials-4.jpg';
import Slider from "react-slick";
export function RecommentComponent(props) {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
    };
    const data = [
        {
            image: testimonials,
            comment: 'viết cái gì vào đây',
            job: 'Cựu thiếu nhi',
            name: 'Huy Chó'
        },
        {
            image: testimonials2,
            comment: 'viết cái gì vào đây',
            job: 'Ceo &amp; Founder',
            name: 'Con chó'
        },
        {
            image: testimonials3,
            comment: 'viết cái gì vào đây',
            job: 'Giám đốc bốc phét dạo',
            name: 'Tiến Trần'
        },
        {
            image: testimonials4,
            comment: 'viết cái gì vào đây',
            job: 'Ceo &amp; Founder',
            name: 'Tiến Trần'
        },
    ]
    const renderComment = () => {
        let arr = [];
        for(const val of data){
            arr.push(<div className="swiper-slide">
                <div className="testimonial-item">
                    <div className="row gy-4 justify-content-center">
                        <div className="col-lg-6">
                            <div className="testimonial-content">
                                <p>
                                    <i className="bi bi-quote quote-icon-left"></i>
                                    {val.comment}
                                    <i className="bi bi-quote quote-icon-right"></i>
                                </p>
                                <h3>{val.name}</h3>
                                <h4>{val.job}</h4>
                                <div className="stars">
                                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i
                                    className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i
                                    className="bi bi-star-fill"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 text-center">
                            <img src={val.image}
                                 className="img-fluid testimonial-img" alt=""/>
                        </div>
                    </div>
                </div>
            </div>)
        }
        return arr;
    }
    return <section id="testimonials" className="testimonials section-bg">
        <div className="container" data-aos="fade-up">

            <div className="section-header">
                <h2>Khách hàng nhận xét</h2>
                <p>Họ nói gì <span>Về chúng tôi</span></p>
            </div>

            <div className="slides-1 swiper"
                 data-aos="fade-up" data-aos-delay="100"
            >
                <Slider {...settings} className="swiper-wrapper" data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'>
                    {renderComment()}
                </Slider>
                <div className="swiper-pagination"></div>
            </div>

        </div>
    </section>
}
export default RecommentComponent;