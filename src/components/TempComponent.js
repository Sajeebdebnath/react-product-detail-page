const TempComponent = ({ productDetail }) => {
  const variation = productDetail?.variation?.props
  return (
    <div>
      <h2 className='text-center'>Product Detail Page</h2>
      <h3>{productDetail?.title}</h3>
      <p>
        Price : ${productDetail?.price?.discounted} <del>${productDetail?.price?.old}</del>
      </p>

      {variation === undefined
        ? "Loading"
        : variation.map((type, index) => {
            return (
              <div key={index}>
                <h5>Variation: {type.name}</h5>
                <ul>
                  {type?.values.map((item) => {
                    return <li key={item.id}>{item.name}</li>
                  })}
                </ul>
              </div>
            )
          })}
    </div>
  )
}

export default TempComponent
