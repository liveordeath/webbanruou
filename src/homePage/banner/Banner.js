import heroImg from '../../assets/img/hero-img.png';
import food_0 from '../../assets/img/food_0.png';
import food_1 from '../../assets/img/food_1.png';
import food_2 from '../../assets/img/food_2.png';
import food_3 from '../../assets/img/food_3.png';
import food_4 from '../../assets/img/food_4.png';
import food_5 from '../../assets/img/food_5.png';
import food_7 from '../../assets/img/food_7.png';
import food_8 from '../../assets/img/food_8.png';
import banner from '../../assets/img/banner.png';
import location from '../../assets/img/location.png';
import list1 from '../../assets/img/list1.png';
import list2 from '../../assets/img/list2.png';
export function Banner(props) {
    return (
        <div id="hero" className="d-flex align-items-center section-bg">
            <div className="container">
                <div className="row justify-content-between" >
                    <div className="col-12">
                        <img
                            style={{
                                width: '100%',
                                minHeight: 0,
                                padding: 0
                            }}
                            src={banner} className="img-fluid" alt="" data-aos="zoom-out"
                             data-aos-delay="300"/>
                        <img
                            style={{
                                width: '100%',
                                minHeight: 0,
                                padding: 0
                            }}
                            src={list2} className="img-fluid" alt="" data-aos="zoom-out"
                             data-aos-delay="400"/>
                        <img
                            style={{
                                width: '100%',
                                minHeight: 0,
                                padding: 0
                            }}
                            src={list1} className="img-fluid" alt="" data-aos="zoom-out"
                             data-aos-delay="400"/>

                    </div>

                </div>
            </div>
        </div>
    )
}
export default Banner
