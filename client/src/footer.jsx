import React from 'react';

function Footer() {
  return (
    <footer style={{ padding: '20px', backgroundColor: '#e0f7fa', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <div style={{ flex: '1', margin: '10px' }}>
          <h4>Explore</h4>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <a href="#" style={{ textDecoration: 'none', color: '#333' }}>Home</a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="#" style={{ textDecoration: 'none', color: '#333' }}>Questions</a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="#" style={{ textDecoration: 'none', color: '#333' }}>Articles</a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="#" style={{ textDecoration: 'none', color: '#333' }}>Tutorials</a>
            </li>
          </ul>
        </div>
        <div style={{ flex: '1', margin: '10px' }}>
          <h4>Support</h4>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <a href="#" style={{ textDecoration: 'none', color: '#333' }}>FAQs</a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="#" style={{ textDecoration: 'none', color: '#333' }}>Help</a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="#" style={{ textDecoration: 'none', color: '#333' }}>Contact Us</a>
            </li>
          </ul>
        </div>
        <div style={{ flex: '1', margin: '10px' }}>
          <h4>Stay Connected</h4>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 15px', color: '#3b5998', fontSize: '24px', textDecoration: 'none' }}>
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 15px', color: '#1da1f2', fontSize: '24px', textDecoration: 'none' }}>
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 15px', color: '#e4405f', fontSize: '24px', textDecoration: 'none' }}>
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        <p>DEV@Deakin 2022</p>
        <p style={{ textAlign: 'center' }}>
          <a href="#" style={{ 
            textDecoration: 'none', 
            color: '#333', 
            margin: '0 15px' 
          }}>Privacy Policy</a>
          <a href="#" style={{ 
            textDecoration: 'none', 
            color: '#333', 
            margin: '0 15px' 
          }}>Terms</a>
          <a href="#" style={{ 
            textDecoration: 'none', 
            color: '#333', 
            margin: '0 15px' 
          }}>Code of Conduct</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
