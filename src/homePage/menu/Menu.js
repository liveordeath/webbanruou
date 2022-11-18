import image from '../../assets/img/binhruou.jpg'
export function Menu(props) {
    const renderItem = () => {
        let arr = []
        for (let i = 0; i < 6; i++){
            arr.push(<div className="col-lg-4 menu-item">
                <a href="" className="glightbox"><img
                    src={image} className="menu-img img-fluid" alt=""/></a>
                <h4>Rượu táo mèo</h4>
                <p className="ingredients">
                    Táo meof, nhân sâm, tam thất, cái đéo gì cũng được.
                </p>
                <p className="price">
                    200,000 vnd
                </p>
            </div>)
        }
        return arr
    }
    // @ts-ignore
    return <section id="menu" className="menu">
        <div className="container" data-aos="fade-up">

            <div className="section-header">
                {/*<h2>Danh sách rượu nổi bật</h2>*/}
                <p>Danh sách <span>rượu nổi bật</span></p>
            </div>

            <ul className="nav nav-tabs d-flex justify-content-center" data-aos="fade-up" data-aos-delay="200">

                <li className="nav-item">
                    <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#menu-starters">
                        <h4>Rượu thông dụng</h4>
                    </a>
                </li>
            </ul>
            <div className="tab-content" data-aos="fade-up" data-aos-delay="300">

                <div className="tab-pane fade active show" id="menu-starters">

                    {/*<div className="tab-header text-center">*/}
                    {/*    <p>Menu</p>*/}
                    {/*    <h3>Starters</h3>*/}
                    {/*</div>*/}

                    <div className="row gy-5">
                        {renderItem()}
                    </div>
                </div>
            </div>
        </div>
    </section>
}
export default Menu
