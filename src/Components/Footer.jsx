function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section">
          <h3>🔍 Lost & Found</h3>
          <p>
            Helping communities reconnect with their lost items.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Browse Items</li>
            <li>Report Lost</li>
            <li>Report Found</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>support@lostfound.com</p>
          <p>+91 9876543210</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Lost & Found. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;