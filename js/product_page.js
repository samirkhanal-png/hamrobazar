    // Product showcase code written by Samir Khanal
    let items=document.querySelectorAll(".product_img");
    let showcase=document.querySelector(".product_img_hero")
    items.forEach(function (item){
        item.addEventListener("mouseover",function showimage(){
            let imgSrc = this.querySelector("img").getAttribute("src");
            showcase.style.backgroundImage = "url('" + imgSrc + "') ";
            showcase.style.backgroundRepeat="no-repeat";
            showcase.style.backgroundSize="contain";
            showcase.style.backgroundPosition="center";
        })
    
    })
   
    //Order_size code written by Samir Khanal
    let input_order=document.querySelector("#input_order");
    let minus=document.querySelector(".minus");
    let plus=document.querySelector(".plus");
    let count=0;
    minus.addEventListener("click",()=>{
      if(count>0){
        count--;
      }
      input_order.value=count;
      p_quantity=count;
      localStorage.setItem("quantity",p_quantity);
    })
   
    let p_quantity;
    plus.addEventListener("click",()=>{
        count++;
        input_order.value=count;
        p_quantity=count;
        localStorage.setItem("quantity",p_quantity);
    })

   //Passing order details to add cart page written by Samir Khanal
    let p_img=document.querySelector(".img_1>img").getAttribute("src");
    let p_name=document.querySelector(".product-name").innerText;
    let p_price=document.querySelector(".product-price").innerText;
  
    
    let addcart=document.querySelector(".cart");
    addcart.addEventListener("click",()=>{
      localStorage.setItem("Product_Name",p_name);
      localStorage.setItem("Product_Price",p_price);
      localStorage.setItem("P_img_src",p_img);
    })

  
    let p_size;
    let size=document.querySelectorAll(".size");
    size.forEach(function (item){
      item.addEventListener("click",()=>{
        p_size=item.innerText;
        localStorage.setItem("size",p_size);
      })
    })

    let p_color=document.querySelectorAll(".clr_picker");
    p_color.forEach(function (item){
      item.addEventListener("click",()=>{
        p_color=item.getAttribute("data-color");
        console.log(p_color);
        localStorage.setItem("color",p_color);
      })
    })