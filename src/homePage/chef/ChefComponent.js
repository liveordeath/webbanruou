import chef3 from '../../assets/img/testimonials/testimonials-1.jpg';
import chef2 from '../../assets/img/testimonials/testimonials-2.jpg';
import chef1 from '../../assets/img/testimonials/testimonials-3.jpg';
export function ChefComponent(props) {
    let data = [
        {
            image: chef1,
            type: 'Rượu trắng',
            job: 'Bố của đầu bếp',
            slogan: 'rượu là từ gạo mà ra, chúng ta uống rượu cũng là ăn cơm'
        },
        {
            image: chef2,
            type: 'Rượu trắng',
            job: 'Bố của đầu bếp',
            slogan: 'rượu là từ gạo mà ra, chúng ta uống rượu cũng là ăn cơm'
        },
        {
            image: chef3,
            type: 'Rượu trắng',
            job: 'Bố của đầu bếp',
            slogan: 'rượu là từ gạo mà ra, chúng ta uống rượu cũng là ăn cơm'
        }
    ];
    const renderChef = () => {
        let arr = [];
        for(const val of data){
            arr.push(<div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                    <div className="chef-member">
                        <div className="member-img">
                            <img src={val.image} className="img-fluid" alt=""/>
                            <div className="social">
                                <a href=""><i className="bi bi-twitter"></i></a>
                                <a href=""><i className="bi bi-facebook"></i></a>
                                <a href=""><i className="bi bi-instagram"></i></a>
                                <a href=""><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                        <div className="member-info">
                            <h4>{val.type}</h4>
                            <span>{val.job}</span>
                            <p>{val.slogan}</p>
                        </div>
                    </div>
                </div>)
        }
        return arr
    }
    return <section id="chefs" className="chefs section-bg">
        <div className="container" data-aos="fade-up">

            <div className="section-header">
                <h2>Đầu bếp</h2>
                <p>Đầu bếp <span> chuyên nghiệp </span> của chúng tôi</p>
            </div>

            <div className="row gy-4">
                {renderChef()}
            </div>
        </div>
    </section>
}
export default ChefComponent;