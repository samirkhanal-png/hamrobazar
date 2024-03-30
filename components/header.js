class header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<nav class="nav">
    <div class="nav_container">
        <img class="nav-logo" src="image/icons/nav_logo.png" alt=""> <label class="navbar_logo" for="logo">Hamro Bazar</label>
        <ul class="nav_list">
         <li class="nav_item"><a href="index.html" class="nav_link">Home</a></li>
         <li class="nav_item"><a href="aboutus.html" class="nav_link">About</a></li>
         <li class="nav_item"><a href="login_page.html" class="nav_link">Login</a></li>
         <li class="nav_item"><a href="create_acc.html" class="nav_link">Sign Up</a></li>
        </ul>
        <div class="nav_items">
         <form action="#" class="nav_form">
            <input type="text" class="nav_input" placeholder="What You looking for?">
            <img src="./image/search.png" alt="" class="nav_search" >
         </form>
         <img src="./image/heart.png" alt="" class="nav_heart">
         <img src=".image/cart.png" alt="" class="nav_cart">
        </div>
            <div class="hamburger_btn">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
            </div>
  </div>
  </nav> 
  
  <!-- Code for Hamburger Menu written by Samir Khanal -->
            
  <div class="hamburger_menu">
    <img src="image/about_us/companylogo_nav.png" alt="" srcset="">
    <div class="hamburger_menu_content">
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="aboutus.html">About</a></li>
        <li><a href="login_page.html">Login</a></li>
        <li><a href="create_acc.html">SignUp</a></li>
      </ul>
    </div>
  </div> `
  }
}

customElements.define('header-component', header);
