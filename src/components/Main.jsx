import React from 'react'
import Header from './Header'
import Body from './Body';

function Main() {
  return (
    <div>
      <Header>
        <p style={{ marginTop: '20px', color: '#000000' }}>
          Experience the ultimate in carpet cleaning with Glow-Up Carpet Cleaners. Our expert team delivers fast, reliable service, leaving your carpets fresh and spotless. Book now for a cleaner home!
         </p>
      </Header>
      <main style={{ padding: '30px', textAlign: 'center' }}>
        <section>
          <Body/> 
          <h2>Welcome to Glow-Up Carpet Cleaners</h2>
          <p>
            Enjoy premium carpet cleaning services with fast booking, expert care, and a cleaner home.
          </p>
        </section>
      </main>
    </div>
  )
}

export default Main