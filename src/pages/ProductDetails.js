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
  return (
    <div className='product-detail'>
      <Breadcrumbs />

      <div className='product-details-area'>
        <div className='container'>
          <div className='row g-0'>
            <div className='col-lg-5'>
              <div className='product-image-content'>
                <div className='product-main-img'>
                  <img
                    src='https://ae01.alicdn.com/kf/S9bcc8656357f4cda8bff3aaf37325ec16/2022-New-Men-s-Shoes-Mesh-Sneakers-Gray-Tennis-Shoes-Moccasin-Shoes-Lace-Up-Loafers-Comfortable.jpg_Q90.jpg_.webp'
                    alt=''
                  />
                </div>
                <div className='product-img-gallery'>
                  <ul>
                    <li className='active'>
                      <img
                        src='https://ae01.alicdn.com/kf/S7e556daed6ec45e5b605cc8a024badf0d/2022-New-Men-s-Shoes-Mesh-Sneakers-Gray-Tennis-Shoes-Moccasin-Shoes-Lace-Up-Loafers-Comfortable.jpg_50x50.jpg_.webp'
                        alt=''
                      />
                    </li>
                    <li>
                      <img
                        src='https://ae01.alicdn.com/kf/S7e556daed6ec45e5b605cc8a024badf0d/2022-New-Men-s-Shoes-Mesh-Sneakers-Gray-Tennis-Shoes-Moccasin-Shoes-Lace-Up-Loafers-Comfortable.jpg_50x50.jpg_.webp'
                        alt=''
                      />
                    </li>
                    <li>
                      <img
                        src='https://ae01.alicdn.com/kf/S7e556daed6ec45e5b605cc8a024badf0d/2022-New-Men-s-Shoes-Mesh-Sneakers-Gray-Tennis-Shoes-Moccasin-Shoes-Lace-Up-Loafers-Comfortable.jpg_50x50.jpg_.webp'
                        alt=''
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-7'>
              <div className='product-details-info'>
                <div className='product-title'>
                  <h4>
                    2022 New Men's Shoes Mesh Sneakers Gray Tennis Shoes Moccasin Shoes Lace Up Loafers
                    Comfortable Walking Shoes Fashion Drive Shoe
                  </h4>
                </div>
                <div className='product-price'>
                  <p>
                    Price:
                    <span className='price'>
                      $40.2 <del>$50</del> <span className='discount'>(50% OFF)</span>
                    </span>
                  </p>
                </div>
                <div className='product-variation'>
                  <div className='variation color'>
                    <p>
                      color : <strong>Black</strong>
                    </p>
                    <div className='color-gallery'>
                      <ul>
                        <li className='active'>
                          <img
                            src='https://ae01.alicdn.com/kf/S5d242b090abb48299274f75f0822b703i/2022-New-Men-s-Shoes-Mesh-Sneakers-Gray-Tennis-Shoes-Moccasin-Shoes-Lace-Up-Loafers-Comfortable.jpg_50x50.jpg_.webp'
                            alt=''
                          />
                        </li>
                        <li>
                          <img
                            src='https://ae01.alicdn.com/kf/S5d242b090abb48299274f75f0822b703i/2022-New-Men-s-Shoes-Mesh-Sneakers-Gray-Tennis-Shoes-Moccasin-Shoes-Lace-Up-Loafers-Comfortable.jpg_50x50.jpg_.webp'
                            alt=''
                          />
                        </li>
                        <li>
                          <img
                            src='https://ae01.alicdn.com/kf/S5d242b090abb48299274f75f0822b703i/2022-New-Men-s-Shoes-Mesh-Sneakers-Gray-Tennis-Shoes-Moccasin-Shoes-Lace-Up-Loafers-Comfortable.jpg_50x50.jpg_.webp'
                            alt=''
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='variation size'>
                    <p>
                      Size : <strong>9</strong>
                    </p>
                    <div className='size-gallery'>
                      <ul>
                        <li>
                          <span>5</span>
                        </li>
                        <li>
                          <span>7</span>
                        </li>
                        <li className='active'>
                          <span>9</span>
                        </li>
                      </ul>
                    </div>
                  </div>
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
