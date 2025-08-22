import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Container } from 'react-bootstrap'
// import axios from 'axios'
import { productListAction } from '../../../action/productListAction'

import Header from '../../common/Header/Header'
import Product from '../../common/Product/Product'

const Home = () => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, products } = productList
  // const [products, setProducts] = useState([])
  useEffect(() => {
    dispatch(productListAction())
    // const sendRequest = async() => {
    //   const response = await axios.get('http://localhost:8000/api/products')
    //   setProducts(response.data)
    // }
    // sendRequest()
  }, [dispatch])

  return (
    <>
      <Header />
      <div className='mb-10 rounded-md' id='overview'></div>
      <Container>
        <div>
          <h3 className='text-center mb-4'>'Novin Tech' محصولات فروشگاهی </h3>
          {loading ? (
            <h4 className='text-center animate-pulse'>
              {' '}
              .... در حال دریافت محصولات{' '}
            </h4>
          ) : (
            <Row>
              {products.map((product) => {
                return (
                  <Col key={product._id} sm={12} md={6} lg={4}>
                    <Product product={product} />
                  </Col>
                )
              })}
            </Row>
          )}
        </div>
      </Container>
    </>
  )
}

export default Home
