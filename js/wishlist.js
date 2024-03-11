let $ = document


const mainHeader = $.querySelector('.header-down .container')
window.addEventListener('scroll',()=>{
    if(window.pageYOffset > 50){

    mainHeader.className = 'container header-position'
    }else{
        mainHeader.className = 'container'
    }
})

//    //////////////////////////////////////////////////Search Btn\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const searchBtn = $.querySelector('.search_btn');
const searchBtnMobile = $.querySelector('.search-btn-mobile')
const modalSearch = $.querySelectorAll('.modal-search-container')
const closeModalBtn = $.querySelectorAll('.close-modal')
searchBtn.addEventListener('click', () => {
    modalSearch[1].style.display = 'block'
})
searchBtnMobile.addEventListener('click', () => {
    modalSearch[0].style.display = 'block'
})
closeModalBtn[1].addEventListener('click', () => {
    modalSearch[1].style.display = 'none'
}) 
closeModalBtn[0].addEventListener('click', () => {
    modalSearch[0].style.display = 'none'
}) 


//    //////////////////////////////////////////////////Tap Top\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let scrollToTop = $.querySelector('.tap-top');
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 600) {
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





//    //////////////////////////////////////////////////Cart\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const cartItems = $.querySelectorAll('.shopping-cart')
const countProductsElem = $.querySelector('.header-down .container .menu .menu-right .icon-menu .count-products-purchased')
const countProductsMobileElem = $.querySelector('.mobile-fix-option .cart-btn .count-products-purchased')
const checkOut = $.querySelector('.menu .menu-right .icon-menu .shopping-cart li .buttons .checkout')
let userBasket = []


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
window.addEventListener('load', getLocalStorage)


//    //////////////////////////////////////////////////Wishlist\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const containerTable = $.querySelector('.wishlist-section .section-container')


function wishlistGenerator(wishListArray){

    if(wishListArray.length){
        containerTable.innerHTML = ''
        containerTable.insertAdjacentHTML('afterbegin',`<div class="row ng-star-inserted">
        <div class="col-sm-12">
            <table class="table cart-table table-responsive-xs">
                <thead>
                    <tr class="table-head">
                        <th scope="col">image</th>
                        <th scope="col">product name</th>
                        <th scope="col">price</th>
                        <th scope="col">availability</th>
                        <th scope="col">action</th>
                    </tr>
                </thead>
                <tbody class="ng-star-inserted">
                   
                </tbody>
            </table>
        </div>
    </div>
    <div class="row wishlist-buttons ng-star-inserted">
        <div class="col-12">
            <a class="btn btn-solid" href="">continue shopping</a>
            <a class="btn btn-solid" href="" onclick="removeAllWish()">check out</a>
        </div>
    </div>`)}else{
        containerTable.innerHTML = `<div class="col-sm-12 empty-cart-cls text-center ng-star-inserted">
        <img src="../image/empty-wishlist.png" class="img-fluid mb-4">
        <h3>
            <strong>Wishlist is Empty</strong>
        </h3>
        <h4>Explore More Shortlist Some Items.</h4>
    </div>`
    }


const tableBody = $.querySelector ('.table tbody')

    wishListArray.forEach(watch => {
                tableBody.insertAdjacentHTML('beforeend', `<tr>
                <td>
                    <a href=""><img src="${watch.colorImage[0].image}" alt="silver"></a>
                </td>
                <td>
                    <a href="">${watch.watchName}</a>
                    <div class="mobile-cart-content row">
                        <div class="col">
                            <p>in stock</p>
                        </div>
                        <div class="col"><h2 class="td-color"> ${formatPrice(watch.PriceAfterDiscount)} </h2></div>
                        <div class="col">
                            <h2 class="td-color">
                                <a href="" onclick="removeFromWish(${watch.id})" class="icon me-1"><i class="ti-close"></i></a>
                                <a class="cart" href="" onclick="addToCart(${watch.id})"><i class="ti-shopping-cart"></i></a>
                            </h2>
                        </div>
                    </div>
                </td>
                <td><h2> ${formatPrice(watch.PriceAfterDiscount)} </h2></td>
                <td><p>in stock</p></td>
                <td>
                    <a href="" onclick="removeFromWish(${watch.id})" class="icon me-3"><i class="ti-close"></i></a>
                    <a href="" class="cart" onclick="addToCart(event , ${watch.id})""><i class="ti-shopping-cart"></i></a>
                </td>
            </tr>`)
    
    })
}


function defaulter (event){
    event.preventDefault();
}


function setLocalStorageWish(selectedWatches){
    localStorage.setItem('wishlist', JSON.stringify(selectedWatches))
}
function getLocalStorageWish(){
    let localStorageWatches = JSON.parse(localStorage.getItem('wishlist'))
    if(localStorageWatches){
        Wishlist = localStorageWatches
    } else {
        Wishlist = []
    }
    wishlistGenerator(Wishlist)
}
function removeFromWish (watchID){
    let localStorageWatches = JSON.parse(localStorage.getItem('wishlist'));
    Wishlist = localStorageWatches;
    Wishlist = Wishlist.filter(function(watch){
        return watch.id !== watchID
    })
    setLocalStorageWish(Wishlist)
    wishlistGenerator(Wishlist)
    location.reload();
}
function removeAllWish(){
    Wishlist = []
    localStorage.removeItem('wishlist')
    getLocalStorage(Wishlist)
    location.reload();
}

function addToCart(event,watchId) {
    event.preventDefault();
    let menuExists = false;
    let localStorageWatches = JSON.parse(localStorage.getItem('cart')) || [];
    let localStorageWatchesWish = JSON.parse(localStorage.getItem('wishlist'));
    userBasket = localStorageWatches;
    userBasket.forEach(function(watch) {
        if (watch.id === watchId) {
            watch.count++;
            menuExists = true;
        }
    });

    if (!menuExists) {
        let mainMenu = localStorageWatchesWish.find(function(watch) {
            return watch.id === watchId;
        });
        countProductsElem.innerHTML = userBasket.length
        countProductsMobileElem.innerHTML = userBasket.length
        mainMenu.count = 1;
        userBasket.push(mainMenu);
    }
    
    setLocalStorage(userBasket)
    removeFromWish(watchId)

}







window.addEventListener('load', getLocalStorageWish)










const navBarBtn = $.querySelector('.header-down .container .menu .menu-right .icon-menu .icon-menu-bar i')
const closeNavBarBtn = $.querySelector('.header-down .container .menu .menu-right .link-menu .back-btn')
const navBar = $.querySelector('.menu .menu-right .link-menu')
navBarBtn.addEventListener('click', () => {
    navBar.style.right = 0
})
closeNavBarBtn.addEventListener('click', () => {
    navBar.style.right = -300 + 'px'
})



