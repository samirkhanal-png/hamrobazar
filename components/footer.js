class footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<footer>
    <div class="footer-item footer-Exclusive">
        <h2>Exclusive</h2>
        <ul>
            <li><a href="#">Subscribe</a></li>
            <li><a href="#">Get 10% off your order</a></li>
            <li>
                <label for="email">Enter your order</label>
                <input type="email" id="email" name="email" pattern="[0-9]{10}" placeholder="Enter your order">
            </li>
        </ul>
    </div>
  
    <div class="footer-item footer-section-links">
        <h2>Quick Links</h2>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </div>
  
    <div class="footer-item footer-section-about">
        <h2>About Us</h2>
        <img src="image/icons/company_logo.png" alt="Company Logo" class="company-logo">
        <p>HamroBazar is a leading provider of high-quality products, serving customers worldwide. Our mission is to
            provide exceptional service and top-notch products to meet our customers' needs.</p>
    </div>
  
    <ul class="socials">
        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
        <li><a href="#"><i class="fa fa-instagram"></i></a></li>
    </ul>
  </footer>     `
  }
}

customElements.define('footer-component', footer);