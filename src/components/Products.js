import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useDispatch, useSelector } from 'react-redux'
import { add } from './../store/reducer/cartSlice'
import { getProducts } from './../store/reducer/productSlice'

function Products() {
  const dispatch = useDispatch()
  const { data: products } = useSelector((state) => state.product)

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  const addToCart = (product) => {
    dispatch(add(product))
  }

  const cards = products.map((product) => {
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
            <Button variant="primary" onClick={() => addToCart(product)}>
              Add to cart
            </Button>
          </Card.Footer>
        </Card>
      </div>
    )
  })

  return (
    <>
      <h1 className="mt-5 mb-5">Product Dashboard</h1>
      <div className="container row w-100">{cards}</div>
    </>
  )
}

export default Products
