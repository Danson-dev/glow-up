import React, { useState } from 'react';

const PlaceOrder = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceType: 'basic',
    roomCount: 1,
    specialInstructions: '',
    preferredDate: '',
    preferredTime: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>
        Place Your Carpet Cleaning Order
      </h1>

      <form action='https://formspree.io/f/xnjwgnnj' method='POST' style={{ backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        {/* Hidden inputs for Formspree */}
        <input type="hidden" name="_subject" value="New Carpet Cleaning Order" />
        <input type="hidden" name="_next" value={window.location.origin + '/'} />
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#333', marginBottom: '15px' }}>Contact Information</h3>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '16px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '16px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="phone" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '16px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="address" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Your Area:</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              rows="3"
              style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '16px' }}
            />
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#333', marginBottom: '15px' }}>Service Details</h3>

        

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="roomCount" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Number of Carpets</label>
            <input
              type="number"
              id="roomCount"
              name="roomCount"
              value={formData.roomCount}
              onChange={handleChange}
              min="1"
              max="20"
              style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '16px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="preferredDate" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Preferred Date:</label>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '16px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="preferredTime" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Preferred Time:</label>
            <select
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '16px' }}
            >
              <option value="">Select time</option>
              <option value="morning">Morning (9 AM - 12 PM)</option>
              <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
              <option value="evening">Evening (5 PM - 8 PM)</option>
            </select>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="specialInstructions" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Special Instructions:</label>
            <textarea
              id="specialInstructions"
              name="specialInstructions"
              value={formData.specialInstructions}
              onChange={handleChange}
              rows="4"
              placeholder="Any specific instructions or notes about your carpets..."
              style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '16px' }}
            />
          </div>
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '15px',
            backgroundColor: '#FF9900',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '18px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#e68a00'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#FF9900'}
        >
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default PlaceOrder;
