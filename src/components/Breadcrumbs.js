const Breadcrumbs = () => {
  return (
    <div className='container my-3'>
      <div className='row g-0 d-flex align-items-md-center'>
        <div className='col-lg-4 col-md-4'>
          <div className='related-categories'>
            <h4>Related Categories</h4>
          </div>
        </div>
        <div className='col-lg-4 col-md-8'>
          <div className='breadcrumbs'>
            <ul>
              <li>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='#'>Men Fashion</a>
              </li>
              <li>
                <a href='#'>Shoes</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Breadcrumbs
