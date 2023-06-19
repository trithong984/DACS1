
const slides2 = document.querySelector('.slides');
			const slideWidth = document.querySelector('.slide').offsetWidth;
			let currentSlide = 0;
	
			function showSlide() {
				slides2.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
			}
	
			function previousSlide() {
				if (currentSlide > 0) {
					currentSlide--;
				} else {
					currentSlide = 4;
				}
				showSlide();
			}
	
			function nextSlide() {
				if (currentSlide < 4) {
					currentSlide++;
				} else {
					currentSlide = 0;
				}
				showSlide();
			}

// danhgia--------------------------------


//--------------LOC SAN PHAM-------------
function changeProductList(type, element) {

    let tabs = document.getElementsByClassName('tabtitle1');
    for (i = 0; i < tabs.length; i++) {
      tabs[i].style.borderBottom = 'none';
    }
    element.style.borderBottom = '2px solid #339538';

    document.getElementById(type).style.display='flex';

    switch (type){
        case 'noibat':
            document.getElementById('cuqua').style.display='none';
            document.getElementById('rau').style.display='none';
            document.getElementById('thucpham').style.display='none';
            document.getElementById('traicay').style.display='none';
            document.getElementById('hat').style.display='none';
            document.getElementById('gao').style.display='none';
           break;
           case 'cuqua':
            document.getElementById('noibat').style.display='none';
            document.getElementById('rau').style.display='none';
            document.getElementById('thucpham').style.display='none';
            document.getElementById('traicay').style.display='none';
            document.getElementById('hat').style.display='none';
            document.getElementById('gao').style.display='none';
           break;
           case 'rau':
            document.getElementById('noibat').style.display='none';
            document.getElementById('thucpham').style.display='none';
            document.getElementById('traicay').style.display='none';
            document.getElementById('cuqua').style.display='none';
            document.getElementById('hat').style.display='none';
            document.getElementById('gao').style.display='none';
           break;
           case 'thucpham':
            document.getElementById('cuqua').style.display='none';
            document.getElementById('rau').style.display='none';
            document.getElementById('noibat').style.display='none';
            document.getElementById('traicay').style.display='none';
            document.getElementById('hat').style.display='none';
            document.getElementById('gao').style.display='none';
           break;
           case 'traicay':
            document.getElementById('cuqua').style.display='none';
            document.getElementById('rau').style.display='none';
            document.getElementById('thucpham').style.display='none';
            document.getElementById('noibat').style.display='none';
            document.getElementById('hat').style.display='none';
            document.getElementById('gao').style.display='none';
           break;
           case 'gao':
            document.getElementById('cuqua').style.display='none';
            document.getElementById('rau').style.display='none';
            document.getElementById('thucpham').style.display='none';
            document.getElementById('noibat').style.display='none';
            document.getElementById('traicay').style.display='none';
             document.getElementById('hat').style.display='none';
           break;
           case 'hat':
            document.getElementById('cuqua').style.display='none';
            document.getElementById('rau').style.display='none';
            document.getElementById('thucpham').style.display='none';
            document.getElementById('noibat').style.display='none';
            document.getElementById('traicay').style.display='none';
            document.getElementById('gao').style.display='none';
           break;
    }
}
//--------------END LOC SAN PHAM-------------


//---------------SITE-NAV------------------
		const back_color_menu = document.querySelector('.site-nav');
		const back_color_menu2 = document.querySelector('.middle-header');
		const back_color_menu3 = document.querySelector('.drop-account');
		const slider = document.querySelector('.home');
    const slider2 = document.querySelector('.login-header');
    const slider3 = document.querySelector('.section_category');
    const slider4 = document.querySelector('.body');
	
	  window.addEventListener('scroll', function() {
		const sliderRect = slider.getBoundingClientRect();
		const windowHeight = window.innerHeight;
		const scrollPosition = window.scrollY;
		if (sliderRect.bottom <= windowHeight && scrollPosition >= sliderRect.top) {
		  down();
		} else {
	up();
		}
	  });
    window.addEventListener('scroll', function() {
      const sliderRect2 = slider2.getBoundingClientRect();
      const windowHeight2 = window.innerHeight;
      const scrollPosition2 = window.scrollY;
      if (sliderRect2.bottom <= windowHeight2 && scrollPosition2 >= sliderRect2.top) {
        down();
      } else {
    up();
      }
      });
	  function down() {
		back_color_menu.classList.add('menu-scroll-down');
		back_color_menu2.classList.add('menu-scroll-down2');
		back_color_menu3.classList.add('menu-scroll-down3');
		document.getElementById('header-nav').style.background='#fff';
		document.getElementById('header-nav').style.color='#636363';
		
	  }
    if (window.innerWidth < 992) {
      window.addEventListener('scroll', function() {
        const sliderRect3 = slider3.getBoundingClientRect();
        const windowHeight3 = window.innerHeight;
        const scrollPosition3 = window.scrollY;
        if (sliderRect3.bottom <= windowHeight3 && scrollPosition3 >= sliderRect3.top) {
          down();
        } else {
      up();
        }
        });
        window.addEventListener('scroll', function() {
          const sliderRect4 = slider4.getBoundingClientRect();
          const windowHeight4 = window.innerHeight;
          const scrollPosition4 = window.scrollY;
          if (sliderRect4.bottom <= windowHeight4 && scrollPosition4 >= sliderRect4.top) {
            down();
          } else {
        up();
          }
          });
    }
	  function up() {
		back_color_menu.classList.remove('menu-scroll-down');
		back_color_menu2.classList.remove('menu-scroll-down2');
		back_color_menu3.classList.remove('menu-scroll-down3');
		document.getElementById('header-nav').style.background='#339538';
		document.getElementById('header-nav').style.color='#fff';
	  }
//------------------END-SITE-NAV------------------

//--------------FAVOURITE-------------
var favoriteButtons = document.querySelectorAll('.favorite-button');
var notification = document.querySelector('.notification');
favoriteButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    var heartIcon = this.querySelector('i');
    if (this.classList.contains('favorited')) {
      this.classList.remove('favorited');
      heartIcon.classList.add('far');
      showNotification('Thông báo\nBạn vừa xóa một sản phẩm khỏi danh sách yêu thích');
    } else {
      this.classList.add('favorited');
      heartIcon.classList.remove('far');
      showNotification('Tuyệt vời\nBạn vừa thêm một sản phẩm vào yêu thích');
    }
  });
});

function showNotification(message) {
  var notificationMessage = document.querySelector('.notification-message');
  notificationMessage.innerHTML = message.replace(/\n/g, "<br>");

  notification.classList.add('show');


  setTimeout(function () {
    notification.classList.remove('show');
  }, 3000);
}
//--------------END FAVOURITE-------------



//--------------POPUP-------------
		function openForm(formId) {
			document.getElementById(formId).style.display = "block";
		}
		function closeForm(formId) {
			document.getElementById(formId).style.display = "none";
		}
//--------------END POPUP-------------



//--------------BACK TO TOP-------------
let mybutton = document.getElementById("back-top");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//--------------END BACK TO TOP-------------

// open cart modal
const cart = document.querySelector('#cart');
const cartModalOverlay = document.querySelector('.cart-modal-overlay');

cart.addEventListener('click', () => {
  if (cartModalOverlay.style.transform === 'translateX(-200%)'){
    cartModalOverlay.style.transform = 'translateX(0)';
  } else {
    cartModalOverlay.style.transform = 'translateX(-200%)';
  }
})

const closeBtn = document.querySelector ('#close-btn');

closeBtn.addEventListener('click', () => {
  cartModalOverlay.style.transform = 'translateX(-200%)';
});

cartModalOverlay.addEventListener('click', (e) => {
  if (e.target.classList.contains('cart-modal-overlay')){
    cartModalOverlay.style.transform = 'translateX(-200%)'
  }
})

const addToCartButtons = document.querySelectorAll('.add-to-cart');
const productRow = document.getElementsByClassName('product-row');

for (var i = 0; i < addToCartButtons.length; i++) {
  const button = addToCartButtons[i];
  button.addEventListener('click', addToCartClicked);
}

function addToCartClicked(event) {
  const button = event.target;
  const cartItem = button.parentElement;
  const price = cartItem.querySelector('.price-box').innerText;
  const imageSrc = cartItem.querySelector('.product-image').src;
  addItemToCart(price, imageSrc);
  updateCartPrice();
}
function addItemToCart (price, imageSrc) {
  var productRow = document.createElement('div');
  productRow.classList.add('product-row');
  var productRows = document.getElementsByClassName('product-rows')[0];
  var cartImage = document.getElementsByClassName('cart-image');
  
  for (var i = 0; i < cartImage.length; i++){
    if (cartImage[i].src == imageSrc){
      alert ('Mặt hàng này đã có ở giỏ hàng')
      return;
    }
  }
  
  var cartRowItems = `
  <div class="product-row">
        <img class="col-2 cart-image" src="${imageSrc}" alt="">
        <span class ="col-3 cart-price">${price}</span>
        <input class="col-1 product-quantity" type="number" value="1">
        <button class="col-2 remove-btn">Remove</button>
        </div>
        
      `
  productRow.innerHTML = cartRowItems;
  productRows.append(productRow);
  productRow.getElementsByClassName('remove-btn')[0].addEventListener('click', removeItem)
  productRow.getElementsByClassName('product-quantity')[0].addEventListener('change', changeQuantity)
  updateCartPrice()
}

const removeBtn = document.getElementsByClassName('remove-btn');
for (var i = 0; i < removeBtn.length; i++) {
  button = removeBtn[i]
  button.addEventListener('click', removeItem)
}

function removeItem (event) {
  btnClicked = event.target
  btnClicked.parentElement.parentElement.remove()
  updateCartPrice()
}


var quantityInputs = document.querySelectorAll('.product-quantity');

for (var i = 0; i < quantityInputs.length; i++){
  var input = quantityInputs[i];
  input.addEventListener('change', changeQuantity);
}

function changeQuantity(event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0){
    input.value = 1
  }
  updateCartPrice()
}

function updateCartPrice() {
  var total = 0
  for (var i = 0; i < productRow.length; i += 2) {
    cartRow = productRow[i]
  var priceElement = cartRow.getElementsByClassName('cart-price')[0]
  var quantityElement = cartRow.getElementsByClassName('product-quantity')[0]
  var price = parseFloat(priceElement.innerText.replace('$', ''))
  var quantity = quantityElement.value
  total = total + (price * quantity )
    
  }
  document.getElementsByClassName('total-price')[0].innerText =total +'.000đ'

document.getElementsByClassName('cart-quantity')[0].textContent = i /= 2
}

const purchaseBtn = document.querySelector('.purchase-btn');

const closeCartModal = document.querySelector('.cart-modal');

purchaseBtn.addEventListener('click', purchaseBtnClicked)

function purchaseBtnClicked () {
  alert ('Cảm ơn bạn đã thanh toán');
  cartModalOverlay.style.transform= 'translateX(-100%)'
 var cartItems = document.getElementsByClassName('product-rows')[0]
 while (cartItems.hasChildNodes()) {
   cartItems.removeChild(cartItems.firstChild)
   
 }
  updateCartPrice()
}








