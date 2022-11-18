import gallery from '../../assets/img/gallery/gallery-1.jpg';
import gallery2 from '../../assets/img/gallery/gallery-2.jpg';
import gallery3 from '../../assets/img/gallery/gallery-3.jpg';
import gallery4 from '../../assets/img/gallery/gallery-4.jpg';
import gallery5 from '../../assets/img/gallery/gallery-5.jpg';
import gallery6 from '../../assets/img/gallery/gallery-6.jpg';
import gallery7 from '../../assets/img/gallery/gallery-7.jpg';
import gallery8 from '../../assets/img/gallery/gallery-8.jpg';
import Slider from "react-slick";

export function GalleryComponent(props) {
    const settings = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: true,
    };
    let data = [gallery, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8,]
    const renderSlide = () => {
        let arr = [];
        for(const val of data){
            arr.push(
                <div>
                    <div style={{
                        width: 243.2,
                        marginRight: 30}}>
                        <a href="assets/img/gallery/gallery-1.jpg">
                            <img
                                src={val} className="img-fluid" alt=""
                                style={{borderRadius: 20}}
                            />
                        </a>
                    </div>
                </div>
            )
        }
        return arr
    }

    return <section id="gallery" className="gallery section-bg">
        <div className="container" data-aos="fade-up">

            <div className="section-header">
                <h2>Kỷ niệm</h2>
                <p>Check-in cùng<span> rượu quê</span></p>
            </div>

            <div className="gallery-slider swiper">
                <Slider {...settings}>
                    {renderSlide()}
                </Slider>
                <div className="swiper-pagination"></div>
            </div>
        </div>
    </section>
}
export default GalleryComponent
