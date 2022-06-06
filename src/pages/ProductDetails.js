import axios from "axios"
import { useEffect, useState } from "react"
import Breadcrumbs from "../components/Breadcrumbs"

const url = process.env.REACT_APP_BACKEND_SERVER

const ProductDetails = () => {
  const [productDetail, setProductDetail] = useState([])

  useEffect(() => {
    const loadSingleProduct = async () => {
      await axios
        .get(`${url}/customer/dummy-product`)
        .then((response) => {
          setProductDetail(response.data)
        })
        .catch((error) => console.log(error.response))
    }
    loadSingleProduct()
  }, [])

  console.log(productDetail)
  const calculated_discount = (productDetail?.price?.discounted / productDetail?.price?.old) * 100 - 100
  return (
    <div className='product-detail'>
      <Breadcrumbs />

      <div className='product-details-area'>
        <div className='container'>
          <div className='row g-0'>
            <div className='col-lg-5'>
              <div className='product-image-content'>
                <div className='product-main-img'>
                  <img src={productDetail?.image} alt='' />
                </div>
                <div className='product-img-gallery'>
                  <ul>
                    {productDetail?.gallery?.map((item, index) => {
                      return (
                        <li key={index}>
                          <img src={item?.thumb} alt='' />
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-7'>
              <div className='product-details-info'>
                <div className='product-title'>
                  <h4>{productDetail?.title}</h4>
                </div>
                <div className='product-price'>
                  <p>
                    Price:
                    <span className='price'>
                      ${productDetail?.price?.discounted} <del>${productDetail?.price?.old}</del>{" "}
                      <span className='discount'>({Math.abs(Math.round(calculated_discount))}% OFF)</span>
                    </span>
                  </p>
                </div>
                <div className='product-variation'>
                  {productDetail?.variation?.props.map((item) => {
                    return (
                      <div className='variation' key={item.id}>
                        <p>
                          {item.name} : <strong></strong>
                        </p>
                        {item.name === "Color" && (
                          <div className='color-gallery'>
                            <ul>
                              {item?.values.map((color) => {
                                return (
                                  <li key={color.id}>
                                    <img src={color.image} alt={color.name} title={color.name} />
                                  </li>
                                )
                              })}
                            </ul>
                          </div>
                        )}
                        {item.name === "Shoe Size" && (
                          <div className='size-gallery'>
                            <ul>
                              {item?.values.map((size) => {
                                return (
                                  <li key={size.id}>
                                    <span>{size.name}</span>
                                  </li>
                                )
                              })}
                            </ul>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
