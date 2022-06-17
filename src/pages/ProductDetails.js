import axios from "axios"
import { useEffect, useState } from "react"
import { initializeConnect } from 'react-redux/es/components/connect'
import Breadcrumbs from "../components/Breadcrumbs"

const url = "https://moveon-api-server.sbox.ali2bd.net/api/v1"

const ProductDetails = () => {
  const [productDetail, setProductDetail] = useState(null)
  const [mainImage, setMainImage] = useState("")



  const [isolatedData, setIsolatedData] = useState({
    color: productDetail?.variation?.skus[0].props[0],
    size: productDetail?.variation?.skus[0].props[1],
  })
  const [valueName, setValueName] = useState({
    color: "",
    size: "",
  })

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

  useEffect(() => {
    console.log('productDetail changed')
    const fetchMatchData = (isLoateData) => {
      var filter_product = productDetail?.variation?.skus.filter(
        (item) => item.props[0] === isLoateData.color && item.props[1] === isLoateData.size
      )
      return filter_product
    }
    let iniitialData = {
      color: productDetail?.variation?.skus[0].props[0],
      size: productDetail?.variation?.skus[0].props[1],
    }
    setSeletedData(fetchMatchData(iniitialData))
    setIsolatedData(iniitialData);
    if (productDetail) {
      setValueName({ color: getColorName(productDetail, iniitialData.color)[0].name, size: getSizeName(productDetail, iniitialData.size)[0].name })
    }
  }, [productDetail])

  const [selectedData, setSeletedData] = useState([])


  useEffect(() => {
    const fetchMatchData = (isLoateData) => {
      var filter_product = productDetail?.variation?.skus.filter(
        (item) => item.props[0] === isLoateData.color && item.props[1] === isLoateData.size
      )
      return filter_product
    }



    let match_data = fetchMatchData(isolatedData)
    setSeletedData(match_data)
  }, [isolatedData, productDetail?.variation?.skus])

  const setImage = (event) => {
    setMainImage(event.target.name)
  }

  function getSizeName(productDetail, id) {
    return productDetail?.variation?.props[1].values.filter((item) => item.id === id)
  }

  function getColorName(productDetail, id) {
    return productDetail?.variation?.props[0].values.filter((item) => item.id === id)
  }


  const onColorVariationChange = (id) => {
    setIsolatedData({
      ...isolatedData,
      color: id,
    })
    const colorName = getColorName(productDetail, id)
    console.log(colorName[0].title)
    setValueName({
      ...valueName,
      color: colorName[0].title,
    })
  }
  const onSizeVariationChange = (id) => {
    setIsolatedData({
      ...isolatedData,
      size: id,
    })
    const sizeName = getSizeName(productDetail, id)
    console.log(sizeName[0].title)
    setValueName({
      ...valueName,
      size: sizeName[0].title,
    })
  }
  const calculated_discount = (productDetail?.price?.discounted / productDetail?.price?.old) * 100 - 100
  const selected_calculated_discount =
    selectedData === undefined
      ? calculated_discount
      : (selectedData[0]?.price?.discounted / selectedData[0]?.price.old) * 100 - 100
  const discount = selectedData === undefined ? calculated_discount : selected_calculated_discount
  return (
    <div className='product-detail'>
      <Breadcrumbs />

      <div className='product-details-area'>
        <div className='container'>
          <div className='row g-0'>
            <div className='col-lg-5'>
              <div className='product-image-content'>
                <div className='product-main-img'>
                  <img src={mainImage === "" ? productDetail?.image : mainImage} alt='' />
                </div>
                <div className='product-img-gallery'>
                  <ul>
                    {productDetail?.gallery?.map((item, index) => {
                      return (
                        <li key={index}>
                          <img src={item?.thumb} alt='' onClick={setImage} name={item?.url} />
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
                      $
                      {selectedData === undefined
                        ? productDetail?.price?.discounted
                        : selectedData[0]?.price?.discounted}
                      <del>
                        $
                        {selectedData === undefined ? productDetail?.price?.old : selectedData[0]?.price?.old}
                      </del>
                      <span className='discount'>({Math.abs(Math.round(discount))}% OFF)</span>
                    </span>
                  </p>
                </div>
                <div className='product-variation'>
                  {productDetail?.variation?.props.map((item) => {
                    return (
                      <div className='variation' key={item.id}>
                        <p>
                          {item.name}: {" "}
                          <strong>{item.name === "Color" ? valueName?.color : valueName?.size}</strong>
                        </p>
                        {item.name === "Color" && (
                          <div className='color-gallery'>
                            <ul>
                              {item?.values.map((color) => {
                                return (
                                  <li
                                    key={color.id}
                                    onClick={() => onColorVariationChange(color.id)}
                                    className={
                                      selectedData === undefined
                                        ? ""
                                        : selectedData[0]?.props[0] === color.id
                                          ? "active"
                                          : ""
                                    }
                                  >
                                    <img src={color.image} alt={color.title} title={color.title} />
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
                                  <li
                                    key={size.id}
                                    className={
                                      selectedData === undefined
                                        ? ""
                                        : selectedData[0]?.props[1] === size.id
                                          ? "active"
                                          : ""
                                    }
                                    onClick={() => onSizeVariationChange(size.id)}
                                  >
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

