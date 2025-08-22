import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Container, ListGroupItem } from 'react-bootstrap'
// import axios from 'axios'
import { productDetailAction } from '../../../action/productListAction'

import Header from '../../common/Header/Header'

const Product = () => {
  const { id } = useParams()

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const productDetail = useSelector((state) => state.productDetail)
  const { loading, product } = productDetail
  // const [product, setProduct] = useState({})
  useEffect(() => {
    dispatch(productDetailAction(id))
    // const sendRequest = async () => {
    //   const response = await axios.get(
    //     `http://localhost:8000/api/products/${id}`
    //   )
    //   setProduct(response.data)
    // }
    // sendRequest()
  }, [dispatch])

  const addToCartHandler = () => {
    navigate(`/cart/${id}`)
  }

  return (
    <>
      <Header />
      <Container>
        <div className='mb-34'>
          <Link to='/' className='btn btn-light mt-4 mb-9'>
            بازگشت به صفحه اصلی
          </Link>
          {loading ? (
            <h3 className='text-center animate-pulse'>.... در حال دریافت محصول مورد نظر</h3>
          ) : (
            <Row>
              <Col md={6}>
                <Image src={product.image} fluid />
              </Col>
              <Col md={3}>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <h3>{product.name}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>{product.price} $</ListGroup.Item>
                  <ListGroup.Item>{product.status}</ListGroup.Item>
                  <ListGroup.Item>{product.description}</ListGroup.Item>
                </ListGroup>
              </Col>
              <Col md={3}>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Button
                      onClick={addToCartHandler}
                      className='btn-black'
                      type='button'
                    >
                      افزودن به سبد خرید
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          )}
        </div>
      </Container>
    </>
  )
}

export default Product
