 import React, { useState, useEffect } from 'react'

const Header = ({children}) => {
  // We turned the object keys into an array so we can actually map over them
  const PICS_DATA = [
    {
      photos: [
        '/pics/download.jfif',
        '/pics/acd.jpg',
        '/pics/hh.avif',
        '/pics/BSB.webp',
        '/pics/cute.jpg'
      ]
    }
  ];

  const photos = PICS_DATA[0].photos
  const [activeIndex, setActiveIndex] = useState(0)
  const [detailsOpen, setDetailsOpen] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % photos.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [photos.length])

  // This function handles the visual "vibe" of your gallery
  function PhotoCarousel() {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          justifyContent: 'center',
          margin: '10px auto',
          marginTop: '-49px',
          width: '100%'
        }}
      >
        {/* Left Side - Details and Heading */}
        <div style={{
          width: '45%',
          paddingRight: '20px'
        }}>
          <h2 style={{ margin: '0 0 20px 0', fontSize: '2rem' }}>Carpet Cleaning Services</h2>
          <div className='more-about-us' style={{
            marginLeft: '0px',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            padding: '25px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <div 
              style={{ 
                cursor: 'pointer', 
                fontWeight: 'bold', 
                color: '#333', 
                fontSize: '1.5rem',
                marginBottom: '15px',
                userSelect: 'none'
              }}
              onClick={() => setDetailsOpen(!detailsOpen)}
            >
              ▼ More about us
            </div>
            {detailsOpen && (
              <div style={{ marginTop: '15px' }}>
                <p style={{ color: 'black', textDecoration: 'none', fontSize: '1.3rem', margin: '15px 0', lineHeight: '1.6' }}>
                  Contact us :<a href="tel:0706209021" style={{ color: 'rgb(218, 28, 176)', textDecoration: 'none', fontWeight: 'bold' }}>0706209021 or 0111599659</a>
                </p>
                <p style={{ color: 'black', textDecoration: 'none', fontSize: '1.3rem', margin: '15px 0', lineHeight: '1.6' }}>
                  We carpet cleaning services in all areas of the Makongeni.
                </p>
                <p style={{ color: 'black', textDecoration: 'none', fontSize: '1.3rem', margin: '15px 0', lineHeight: '1.6' }}>
                  We are open Monday to Sunday. <a href=" " style={{ color: 'rgb(218, 28, 176)', textDecoration: 'none', fontWeight: 'bold' }}>24/7</a>
                </p>
                <p style={{ color: 'black', textDecoration: 'none', fontSize: '1.3rem', margin: '15px 0', lineHeight: '1.6' }}>
                  For complaints, please <a href="mailto:dansonknjeri@gmail.com" style={{ color: 'rgb(218, 28, 176)', textDecoration: 'none', fontWeight: 'bold' }}>click here</a>.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right Side - Carousel */}
        <div
          className="carousel-container"
          style={{
            position: 'relative',
            width: '47%',
            height: '400px',
            overflow: 'hidden',
            borderRadius: '25px',
            boxShadow: '0 18px 45px rgba(0,0,0,0.18)',
            flexShrink: 0
          }}
        >
          {photos.map((photo, photoIndex) => (
            <img
              key={photoIndex}
              src={photo}
              alt={`Clean carpet vibe ${photoIndex}`}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '25px',
                opacity: photoIndex === activeIndex ? 1 : 0,
                transition: 'opacity 1s ease-in-out'
              }}
            />
          ))}

          <div
            style={{
              position: 'absolute',
              bottom: '16px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '10px'
            }}
          >
            {photos.map((_, dotIndex) => (
              <span
                key={dotIndex}
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: dotIndex === activeIndex ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.5)',
                  boxShadow: '0 0 8px rgba(0,0,0,0.18)'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <header style={{ textAlign: 'center', padding: '50px 20px', position: 'relative' }}>
        <div className='marquee-wrapper'>
          <div className='marquee-track'>
            <span className='marquee-text'>50 kes/ discount for signed in users</span>
            <span className='marquee-text'>50 kes/ discount for signed in users</span>
            <span className='marquee-text'>50 kes/ discount for signed in users</span>
            <span className='marquee-text'>50 kes/ discount for signed in users</span>
            <span className='marquee-text'>50 kes/ discount for signed in users</span>
          </div>
        </div>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}></h1>
 
        <PhotoCarousel />

        {children}
      </header>
    </>
  )
}

export default Header