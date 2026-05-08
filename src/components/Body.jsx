import React from 'react'
import { Link } from 'react-router';

const Body = ({product,index}) => {
   const handleOrder = (product) => {
    console.log(`Ordered: ${product.name}`)
  }

  const products = [
    { 
      name: 'Small Carpets', 
      images: ['/pics/shopping.png', '/pics/Woo.png'],
      price: '70',
      currency: 'kes',
      offer: '4 small carpets at 200 kes'
    },
    { 
      name: 'Average Size', 
      images: ['/pics/Copilot.png', '/pics/flint.png'],
      price: '350',
      currency: 'kes',
      offer: 'and above',
      discount: '50 kes discount for signed-in users'
    },
    {
      name: 'Large Carpets',
      images: ['/pics/gray.png', '/pics/acd.jpg'],
      price: '550',
      currency: 'kes',
      discount: '50 kes discount for signed-in users'
    },
  ]
  return (
<>
<div>
 <div className='body-main-div'>
      <div className='body-div'>
        <h2>Place Your Order</h2>
        <hr />
        <div className='images-container'>
          <div className='images-track'>
            {products.map((product, index) => (
              <div className='product-card' key={index}>
                {product.images ? (
                  <div className='product-images'>
                    {product.images.map((img, imgIndex) => (
                      <img 
                        key={imgIndex}
                        className='ima' 
                        src={img} 
                        alt={`${product.name} ${imgIndex + 1}`} 
                      />
                    ))}
                  </div>
                ) : (
                  <img className='ima' src={product.image} alt={product.name} />
                )}
                <div className='product-info'>
                  <h3>{product.name}</h3>
                  <p className='price'>{product.price} {product.currency}</p>
                  {product.offer && <p className='offer'>{product.offer}</p>}
                  {product.discount && <p className='discount'>{product.discount}</p>}
                  <Link to="/order">
                    <button className='book-wash'>
                      Book a Wash
                    </button>
                  </Link>
                
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>


</div>

</>
  )
}

export default Body