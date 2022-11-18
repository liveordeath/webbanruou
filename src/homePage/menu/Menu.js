import image from '../../assets/img/binhruou.jpg'
import image2 from '../../assets/img/binhruou.jpg'
import image3 from '../../assets/img/about.jpg'
import image4 from '../../assets/img/binhruou.jpg'
export function Menu(props) {
    let data = [
        {
            name: "ba kichs",
            image: image,
            amount: '5,000,000 VND',
            content: 'Táo meof, nhân sâm, tam thất, cái đéo gì cũng được.'
        },
        {
            name: "tao meo",
            image: image2,
            amount: '5,000,000 VND',
            content: 'Táo meof, nhân sâm, tam thất, cái đéo gì cũng được.'
        },
        {
            name: "ba kichs",
            image: image3,
            amount: '5,000,000 VND',
            content: 'Táo meof, nhân sâm, tam thất, cái đéo gì cũng được.'
        },
        {
            name: "ba kichs",
            image: image4,
            amount: '5,000,000 VND',
            content: 'Táo meof, nhân sâm, tam thất, cái đéo gì cũng được.'
        },
        {
            name: "ba kichs",
            image: image,
            amount: '5,000,000 VND',
            content: 'Táo meof, nhân sâm, tam thất, cái đéo gì cũng được.'
        },

    ]
    const renderItem = () => {
        let arr = []
        for (let i = 0; i < data.length; i++){
            arr.push(<div className="col-lg-4 menu-item">
                <a href="" className="glightbox"><img
                    src={data[i].image} className="menu-img img-fluid" alt=""/></a>
                <h4>{data[i].name}</h4>
                <p className="ingredients">
                    {data[i].content}
                </p>
                <p className="price">
                    {data[i].amount}
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
                    <div className="row gy-5">
                        {renderItem()}
                    </div>
                </div>
            </div>
        </div>
    </section>
}
export default Menu
