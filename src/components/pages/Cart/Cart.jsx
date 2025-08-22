import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Image, Button, Card } from 'react-bootstrap'
import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

import { addToCart, removeFromCart } from '../../../action/cartAction'

import Header from '../../common/Header/Header'

const Cart = () => {
  const navigate = useNavigate()

  const { id } = useParams()
  const productId = id

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId))
    }
  }, [dispatch, productId])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const loginHandler = () => {
    navigate('/login')
  }

  return (
    <>
      <Header />
      <Container>
        <div>
          <Row>
            <Col md={8}>
              <h3 className='items-center justify-center mt-4 pb-7'>
                {' '}
                <ShoppingCartOutlinedIcon
                  sx={{
                    width: '3rem',
                    height: '3rem',
                    paddingRight: '1rem',
                    color: '#141313',
                  }}
                />
                سبد خرید
              </h3>
              {cartItems.length === 0 ? (
                <h5 className='mt-5 animate-pulse'>
                  {' '}
                  !سبد خرید شما خالی می باشد{' '}
                </h5>
              ) : (
                <ListGroup variant='flush'>
                  {cartItems.map((item) => (
                    <ListGroup.Item key={item.product}>
                      <Row>
                        <Col md={2}>
                          <h6 className='animate-pulse'>تصویر</h6>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col md={3}>
                          <h6 className='animate-pulse'>نام محصول</h6>
                          {item.name}
                        </Col>
                        <Col md={2} className='items-center justify-center'>
                          {' '}
                          <h6 className='animate-pulse'>قیمت</h6>
                          {item.price} $
                        </Col>

                        <Col md={2}>
                          {' '}
                          <h6 className='animate-pulse'>وضعیت</h6>
                          {item.status}
                        </Col>
                        <Col md={2} className='pt-5'>
                          <Button
                            type='button'
                            variant='light'
                            onClick={() => removeFromCartHandler(item.product)}
                          >
                            <DeleteIcon />
                          </Button>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                  <ListGroup.Item className='text-center pt-5 pb-5'>
                    <Button type='button' variant='info' onClick={loginHandler}>
                      ورود به حساب کاربری
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              )}
            </Col>
            <Col md={4}>
              <Card className='mt-4'>
                <ListGroup variant='flush'>
                  <ListGroup.Item className='px-2 py-3 text-center'>
                    مجموع قیمت :${' '}
                    {cartItems.reduce((acc, item) => acc + item.price, 0)}
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  )
}

export default Cart
