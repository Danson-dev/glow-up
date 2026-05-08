import React from 'react'

const Contact = () => {
  return (
    <div style={{ 
      padding: '40px 20px', 
      maxWidth: '900px', 
      margin: '0 auto',
      minHeight: 'calc(100vh - 200px)'
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        color: '#333', 
        marginBottom: '40px',
        fontSize: '2.5rem'
      }}>
        Contact Us
      </h1>

      <div style={{
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '15px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
      }}>
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ 
            color: 'rgb(218, 28, 176)', 
            fontSize: '1.8rem',
            marginBottom: '15px'
          }}>
            Phone Numbers
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgb(50, 50, 50)',
            margin: '10px 0',
            textDecoration: 'none'
          }}>
            📞 <strong>0706209021</strong> or <strong>0111599659</strong>
          </p>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ 
            color: 'rgb(218, 28, 176)', 
            fontSize: '1.8rem',
            marginBottom: '15px'
          }}>
            Service Areas
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgb(50, 50, 50)',
            margin: '10px 0',
            textDecoration: 'none'
          }}>
            🏘️ We provide carpet cleaning services in all areas of the Makongeni.
          </p>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ 
            color: 'rgb(218, 28, 176)', 
            fontSize: '1.8rem',
            marginBottom: '15px'
          }}>
            Operating Hours
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgb(50, 50, 50)',
            margin: '10px 0',
            textDecoration: 'none'
          }}>
            ⏰ We are open Monday to Sunday. <strong style={{ color: 'rgb(218, 28, 176)' }}>24/7</strong>
          </p>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ 
            color: 'rgb(218, 28, 176)', 
            fontSize: '1.8rem',
            marginBottom: '15px'
          }}>
            Complaints & Feedback
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgb(50, 50, 50)',
            margin: '10px 0',
            textDecoration: 'none'
          }}>
            📧 For complaints, please email us at: 
            <a href="mailto:dansonknjeri@gmail.com" style={{
              color: 'rgb(218, 28, 176)',
              textDecoration: 'none',
              fontWeight: 'bold',
              marginLeft: '8px'
            }}>
              dansonknjeri@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
