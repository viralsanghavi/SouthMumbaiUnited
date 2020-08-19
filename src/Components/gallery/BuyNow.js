import React from 'react'
import './BuyNow.css'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import { toast } from "react-toastify";
export const BuyNow = () => {

    const notAvailable = () => {
        toast("Contact : 91-8080626605", { type: "info" });

    }

    return (


        <div className="container">
            <h3 className="h3"> </h3>
            <Breadcrumb>
                <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Shop</BreadcrumbItem>
            </Breadcrumb>
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <div className="product-grid2">
                        <div className="product-image2">
                            <button onClick={notAvailable}>
                                <img className="pic-1" src="https://scontent.fbom8-1.fna.fbcdn.net/v/t1.0-9/72719684_2670518026333924_999891287274422272_o.jpg?_nc_cat=110&_nc_sid=9267fe&_nc_ohc=6zAfOwuEK7kAX-36C_-&_nc_ht=scontent.fbom8-1.fna&oh=b1e6b6b6d36e52ab30568436255f8a31&oe=5F4FA68C" alt="product" />
                                <img className="pic-2" src="https://scontent.fbom8-1.fna.fbcdn.net/v/t1.0-9/72719684_2670518026333924_999891287274422272_o.jpg?_nc_cat=110&_nc_sid=9267fe&_nc_ohc=6zAfOwuEK7kAX-36C_-&_nc_ht=scontent.fbom8-1.fna&oh=b1e6b6b6d36e52ab30568436255f8a31&oe=5F4FA68C" alt="product" />
                            </button>
                            <button className="add-to-cart" >Add to cart</button>
                        </div>
                        <div className="product-content">
                            <h3 className="title">Boys Home Kit</h3>
                            <span className="price">Rs 599.99</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="product-grid2">
                        <div className="product-image2">
                            <button onClick={notAvailable}>
                                <img className="pic-1" src="https://scontent.fbom8-1.fna.fbcdn.net/v/t1.0-9/72719684_2670518026333924_999891287274422272_o.jpg?_nc_cat=110&_nc_sid=9267fe&_nc_ohc=6zAfOwuEK7kAX-36C_-&_nc_ht=scontent.fbom8-1.fna&oh=b1e6b6b6d36e52ab30568436255f8a31&oe=5F4FA68C" alt="product" />
                                <img className="pic-2" src="https://scontent.fbom8-1.fna.fbcdn.net/v/t1.0-9/72719684_2670518026333924_999891287274422272_o.jpg?_nc_cat=110&_nc_sid=9267fe&_nc_ohc=6zAfOwuEK7kAX-36C_-&_nc_ht=scontent.fbom8-1.fna&oh=b1e6b6b6d36e52ab30568436255f8a31&oe=5F4FA68C" alt="product" />
                            </button>
                            <button className="add-to-cart" >Add to cart</button>
                        </div>
                        <div className="product-content">
                            <h3 className="title"><a href="/">Boys Away Kit</a></h3>
                            <span className="price">Rs 699.99</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="product-grid2">
                        <div className="product-image2">
                        <button onClick={notAvailable}>
                                <img className="pic-1" src="https://scontent.fbom8-1.fna.fbcdn.net/v/t1.0-9/72719684_2670518026333924_999891287274422272_o.jpg?_nc_cat=110&_nc_sid=9267fe&_nc_ohc=6zAfOwuEK7kAX-36C_-&_nc_ht=scontent.fbom8-1.fna&oh=b1e6b6b6d36e52ab30568436255f8a31&oe=5F4FA68C" alt="product" />
                                <img className="pic-2" src="https://scontent.fbom8-1.fna.fbcdn.net/v/t1.0-9/72719684_2670518026333924_999891287274422272_o.jpg?_nc_cat=110&_nc_sid=9267fe&_nc_ohc=6zAfOwuEK7kAX-36C_-&_nc_ht=scontent.fbom8-1.fna&oh=b1e6b6b6d36e52ab30568436255f8a31&oe=5F4FA68C" alt="product" />
                            </button>
                            <button className="add-to-cart" >Add to cart</button>
                        </div>
                        <div className="product-content">
                            <h3 className="title"><a href="/">Girls Home Kit</a></h3>
                            <span className="price">Rs 599.99</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="product-grid2">
                        <div className="product-image2">
                        <button onClick={notAvailable}>
                                <img className="pic-1" src={require('../../assets/awaykitG.jpg')} alt="product" />
                                <img className="pic-2" src={require('../../assets/awaykitG.jpg')} alt="product" />
                            </button>
                            <button className="add-to-cart" >Add to cart</button>
                        </div>
                        <div className="product-content">
                            <h3 className="title"><a href="/">Girls Away Kit</a></h3>
                            <span className="price">Rs 599.99</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
