let $ = document


const cartItems = $.querySelectorAll('.shopping-cart')
const countProductsElem = $.querySelector('.header-down .container .menu .menu-right .icon-menu .count-products-purchased')
const countProductsMobileElem = $.querySelector('.mobile-fix-option .cart-btn .count-products-purchased')
const containerTable = $.querySelector('.cart-section .section-container')
const mainHeader = $.querySelector('.header-down .container')


window.addEventListener('scroll',()=>{
    if(window.pageYOffset > 50){

    mainHeader.className = 'container header-position'
    }else{
        mainHeader.className = 'container'
    }
})

//    //////////////////////////////////////////////////Tap Top\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let scrollToTop = $.querySelector('.tap-top');
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollToTop.style.display = "block"
    } else {
        scrollToTop.style.display = "none"
    }
});

scrollToTop.addEventListener('click', function() {
    window.scrollTo({
        top: 0 ,
        behavior: 'smooth'
    });
});




function basketMenusGenerator(userBasketArray){
    cartItems.forEach(cartItem => {
        if(userBasketArray.length){
            cartItem.innerHTML = ''
            
            userBasketArray.forEach(function(watch){
                cartItem.insertAdjacentHTML('beforeend', `<li class="ng-star-inserted">
                        <div class="media">
                            <a href="#"><img class="me-3" src="${watch.colorImage[0].image}" alt="silver"></a>
                            <div class="media-body">
                                <a href="#"><h4>${watch.watchName}</h4></a>
                                <h4 ><span> ${watch.count} x ${formatPrice(watch.PriceAfterDiscount)} </span></h4>
                            </div>
                        </div>
                        <div class="close-circle" onclick="removeMenuFromBasket(${watch.id})"><a href="#"><i class="fa fa-times"></i></a></div>
                    </li>`)
                    })
                    cartItem.insertAdjacentHTML('beforeend',`<li>
                    <div class="total">
                        <h5>subtotal : <span>$00.00</span></h5>
                    </div>
                </li>
                <li>
                    <div class="buttons">
                        <a class="view-cart" href="cartpage.html">view cart</a>
                        <a class="checkout" href="" onclick="removeAllCart()">checkout</a></div>
                </li>`)

               }else{
                    cartItem.innerHTML = ''
                    cartItem.insertAdjacentHTML('beforeend','<h5>Your cart is currently empty.</h5>')
            }
    })


    if(userBasketArray.length){
        containerTable.innerHTML = ''
        containerTable.insertAdjacentHTML('afterbegin',`<div class="row ng-star-inserted">
        <div class="col-sm-12">
            <table class="table cart-table table-responsive-xs">
                <thead>
                    <tr class="table-head">
                        <th scope="col">image</th>
                        <th scope="col">product name</th>
                        <th scope="col">price</th>
                        <th scope="col">quantity</th>
                        <th scope="col">action</th>
                        <th scope="col">total</th>
                    </tr>
                </thead>
                <tbody class="ng-star-inserted">
                    
                </tbody>
            </table>
            <table class="table cart-table table-responsive-md">
                <tfoot>
                    <tr>
                        <td>total price :</td>
                        <td><h2> $00.00</h2></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
    <div class="row cart-buttons ng-star-inserted">
        <div class="col-6">
            <a class="btn btn-solid" href="">continue shopping</a>
        </div>
        <div class="col-6">
            <a class="btn btn-solid" href="" onclick="removeAllCart()">check out</a>
        </div>
    </div>`)}else{
        containerTable.innerHTML = `<div class="col-sm-12 empty-cart-cls text-center ng-star-inserted">
        <img src="../image/icon-empty-cart.png" class="img-fluid mb-4">
        <h3>
            <strong>Your Cart is Empty</strong>
        </h3>
        <h4>Add something to make me happy :)</h4>
    </div>`
    }


const tableBody = $.querySelector ('.table tbody')

    userBasketArray.forEach(watch => {
                tableBody.insertAdjacentHTML('beforeend', `<tr>
                        <td><a  href="#"><img src="${watch.colorImage[0].image}"></a></td>
                        <td>
                            <a href="#">${watch.watchName}</a>
                        </td>
                        <td>
                            <h2> ${formatPrice(watch.PriceAfterDiscount)} </h2>
                        </td>
                        <td>
                            <div class="qty-box">
                                <div class="input-group">
                                    <span class="input-group-prepend">
                                        <button type="button" data-type="minus" class="btn quantity-left-minus" onclick="reduceNumberProduct(${watch.id})"><i class="ti-angle-left"></i></button>
                                    </span>
                                    <input type="text" data-product-id="${watch.id}" value="${watch.count}" name="quantity" class="form-control input-number ng-untouched ng-pristine" ng-reflect-name="quantity" ng-reflect-is-disabled="" ng-reflect-model="1" disabled="">
                                    <span class="input-group-prepend">
                                        <button type="button" data-type="plus" class="btn quantity-right-plus" onclick="addCountProduct(${watch.id})"><i class="ti-angle-right"></i></button>
                                    </span>
                                </div>
                            </div>
                        </td>
                        <td class="end-table">
                            <a href="" class="icon" onclick=removeMenuFromBasket(${watch.id})><i class="ti-close"></i></a>
                        </td>
                        <td><h2 class="td-color"> ${formatPrice(watch.PriceAfterDiscount * watch.count)} </h2></td>
                    </tr>`)
    
    })
}



function setLocalStorage(selectedWatches){
    localStorage.setItem('cart', JSON.stringify(selectedWatches))
}
function getLocalStorage(){
    let localStorageWatches = JSON.parse(localStorage.getItem('cart'))
    if(localStorageWatches){
        userBasket = localStorageWatches
    } else {
        userBasket = []
    }
    countProductsElem.innerHTML = userBasket.length
    countProductsMobileElem.innerHTML = userBasket.length
    basketMenusGenerator(userBasket)
    calcTotalPrice(userBasket)
}

function addCountProduct(productId) {
    const inputElement = document.querySelector(`input[name="quantity"][data-product-id="${productId}"]`);
    let localStorageWatches = JSON.parse(localStorage.getItem('cart'));
    userBasket = localStorageWatches;
    if (inputElement) {
        let currentValue = parseInt(inputElement.value);
        currentValue++;
        inputElement.value = currentValue;
        
        setLocalStorage(userBasket)
        calcTotalPrice(userBasket)
        updateCount(productId,inputElement.value)
    }
}
function reduceNumberProduct (productId){
    const inputElement = document.querySelector(`input[name="quantity"][data-product-id="${productId}"]`);
    let localStorageWatches = JSON.parse(localStorage.getItem('cart'));
    userBasket = localStorageWatches;
    if (inputElement) {
        let currentValue = parseInt(inputElement.value);
        currentValue--;
        inputElement.value = currentValue;
        
        setLocalStorage(userBasket)
        calcTotalPrice(userBasket)
        updateCount(productId,inputElement.value)
    }
}
function removeMenuFromBasket (watchID){
    let localStorageWatches = JSON.parse(localStorage.getItem('cart'));
    userBasket = localStorageWatches;
    userBasket = userBasket.filter(function(watch){
        return watch.id !== watchID
    })
    countProductsElem.innerHTML = userBasket.length
    countProductsMobileElem.innerHTML = userBasket.length
    setLocalStorage(userBasket)
    basketMenusGenerator(userBasket)
    calcTotalPrice(userBasket)
    location.reload();
}
function removeAllCart(){
    userBasket = []
    localStorage.removeItem('cart')
    getLocalStorage(userBasket)
    location.reload();
}
function formatPrice (price){
    let formatted = parseFloat(price).toFixed(2);
    formatted = formatted.toString().replace('/\B(?=(\d{3})+(?!\d)',',')
    formatted = '$' + formatted
    return formatted;
}
function calcTotalPrice(userBasketArray) {
    let totalPriceValue = 0;
    userBasketArray.forEach(function (watch) {
        totalPriceValue += watch.PriceAfterDiscount * watch.count;
    });
    const cartTotalPriceElemTable = $.querySelector('.cart-section tfoot tr td h2')
    if(cartTotalPriceElemTable){
        cartTotalPriceElemTable.innerHTML = formatPrice(totalPriceValue);
        
    }
    const cartTotalPriceElem = $.querySelectorAll('.total h5 span');
    cartTotalPriceElem.forEach(price => {
        if (price) {
            price.innerHTML = formatPrice(totalPriceValue);
        }
    })
}
function updateCount (watchID,newCount){
    userBasket.forEach(function(watch){
        if(watch.id === watchID){
            watch.count = newCount
            if(watch.count == 0){
                removeMenuFromBasket(watchID)
            }
        }
    })
    let localStorageWatches = JSON.parse(localStorage.getItem('cart'));
    userBasket = localStorageWatches;
    const productIndex = userBasket.findIndex(item => item.id === watchID);
    if (productIndex !== -1) {
        userBasket[productIndex].count = newCount;
        localStorage.setItem('cart', JSON.stringify(userBasket));
    }
    calcTotalPrice(userBasket)
    location.reload();
}




window.addEventListener('load', getLocalStorage)




const menubarLinkHome = $.querySelector(' .header-down .container .menu .menu-right .link-menu .home')
const menubarLinkHomechoose = $.querySelector(' .header-down .container .menu .menu-right .link-menu .home .choose')
const menubarLinkShop = $.querySelector(' .header-down .container .menu .menu-right .link-menu .shop')
const menubarLinkShopchoose = $.querySelector(' .header-down .container .menu .menu-right .link-menu .shop .choose')
const menubarLinkProducts = $.querySelector(' .header-down .container .menu .menu-right .link-menu .products')
const menubarLinkProductschoose = $.querySelector(' .header-down .container .menu .menu-right .link-menu .products .choose')
const menubarLinkFeatures = $.querySelector(' .header-down .container .menu .menu-right .link-menu .features')
const menubarLinkFeatureschoose = $.querySelector(' .header-down .container .menu .menu-right .link-menu .features .choose')
const menubarLinkPages = $.querySelector(' .header-down .container .menu .menu-right .link-menu .pages')
const menubarLinkPageschoose = $.querySelector(' .header-down .container .menu .menu-right .link-menu .pages .choose')
const menubarLinkBlogs = $.querySelector(' .header-down .container .menu .menu-right .link-menu .blogs')
const menubarLinkBlogschoose = $.querySelector(' .header-down .container .menu .menu-right .link-menu .blogs .choose')


const menubarLinkHomeLi = $.querySelector('.header-down .container .menu .menu-right .link-menu .home .choose li')
const menubarLinkHomeLiChoose = $.querySelector('.header-down .container .menu .menu-right .link-menu .home .choose li .choose-second')
const menubarLinkProductsLi = $.querySelector('.header-down .container .menu .menu-right .link-menu .products .choose li')
const menubarLinkProductsLiChoose = $.querySelector('.header-down .container .menu .menu-right .link-menu .products .choose li .choose-second')
const menubarLinkPagesLi1 = $.querySelector('.header-down .container .menu .menu-right .link-menu .pages .choose .li1')
const menubarLinkPagesLiChoose1 = $.querySelector('.header-down .container .menu .menu-right .link-menu .pages .choose .li1 .choose-second1')
const menubarLinkPagesLi2 = $.querySelector('.header-down .container .menu .menu-right .link-menu .pages .choose .li2')
const menubarLinkPagesLiChoose2 = $.querySelector('.header-down .container .menu .menu-right .link-menu .pages .choose .li2 .choose-second2')
const menubarLinkFeaturesLi = $.querySelectorAll('.header-down .container .menu .menu-right .link-menu .features .choose .column .title')
const menubarLinkFeaturesLiChoose = $.querySelectorAll('.header-down .container .menu .menu-right .link-menu div .column .subset')

function showChoose (choose){
    choose.classList.toggle('opensubmenu')
}
menubarLinkHome.addEventListener('click', event => {
    showChoose(menubarLinkHomechoose)
})
menubarLinkShop.addEventListener('click', () => {
    showChoose(menubarLinkShopchoose)
})
menubarLinkProducts.addEventListener('click', () => {
    showChoose(menubarLinkProductschoose)
})
menubarLinkFeatures.addEventListener('click', () => {
    showChoose(menubarLinkFeatureschoose)
})
menubarLinkPages.addEventListener('click', () => {
    showChoose(menubarLinkPageschoose)
})
menubarLinkBlogs.addEventListener('click', () => {
    showChoose(menubarLinkBlogschoose)
})
function showChooseLi (choose){
    choose.classList.toggle('opensubmenuli')
}
menubarLinkHomeLi.addEventListener('click', e => {
    e.stopPropagation();
    showChooseLi(menubarLinkHomeLiChoose)
})
menubarLinkProductsLi.addEventListener('click', e => {
    e.stopPropagation();
    showChooseLi(menubarLinkProductsLiChoose)
})
menubarLinkPagesLi1.addEventListener('click', e => {
    e.stopPropagation();
    showChooseLi(menubarLinkPagesLiChoose1)
})
menubarLinkPagesLi2.addEventListener('click', e => {
    e.stopPropagation();
    showChooseLi(menubarLinkPagesLiChoose2)
})

menubarLinkFeaturesLi.forEach( (li,index) => {
    li.addEventListener('click', e => {
        e.stopPropagation();
        if(menubarLinkFeaturesLiChoose[index].style.display === 'block'){
            menubarLinkFeaturesLiChoose[index].style.display = 'none';
        }else{
            menubarLinkFeaturesLiChoose[index].style.display = 'block';
        }
    })
})



const darkModeBtn = $.querySelector('header .dark-mode');
darkModeBtn.addEventListener('click', () => {
  $.body.classList.toggle('dark')
  if($.body.classList.contains("dark")){
    localStorage.setItem('theme', 'dark')
  }else{
    localStorage.setItem('theme', 'light')
  }
})
window.onload = function(){
    let localStrongeTheme = localStorage.getItem('theme')
    if(localStrongeTheme === 'dark'){
    $.body.classList.toggle("dark")
    }
}

const navBarBtn = $.querySelector('.header-down .container .menu .menu-right .icon-menu .icon-menu-bar i')
const closeNavBarBtn = $.querySelector('.header-down .container .menu .menu-right .link-menu .back-btn')
const navBar = $.querySelector('.menu .menu-right .link-menu')
navBarBtn.addEventListener('click', () => {
    navBar.style.right = 0
})
closeNavBarBtn.addEventListener('click', () => {
    navBar.style.right = -300 + 'px'
})