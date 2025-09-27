import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { remove } from './../store/reducer/cartSlice'

function Cart() {
  const cartProducts = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const cards = cartProducts.map((product) => {
    return (
      <div className="col-md-3" style={{ marginBottom: '10px' }}>
        <Card key={product.id} className="h-100">
          <div className="text-center my-3">
            <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>LKR: {product.price}</Card.Text>
          </Card.Body>
          <Card.Footer style={{ background: 'white' }}>
            <Button variant="primary" className="btn-danger" onClick={() => removeFromCart(product.id)}>
              remove
            </Button>
          </Card.Footer>
        </Card>
      </div>
    )
  })

  const removeFromCart = (productId) => {
    dispatch(remove(productId))
  }

  return (
    <>
      <h1 className="mt-5 mb-5">Cart</h1>
      <div className="container row w-100">{cards}</div>
    </>
  )
}

export default Cart
