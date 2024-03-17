let $ = document


const cartItems = $.querySelectorAll('.shopping-cart')
const countProductsElem = $.querySelector('.header-down .container .menu .menu-right .icon-menu .count-products-purchased')
const countProductsMobileElem = $.querySelector('.mobile-fix-option .cart-btn .count-products-purchased')
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
                            <a href="watch.html?watch=${watch.id}"><img class="me-3" src="${watch.colorImage[0].image}" alt="silver"></a>
                            <div class="media-body">
                                <a href="watch.html?watch=${watch.id}"><h4>${watch.watchName}</h4></a>
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

//    //////////////////////////////////////////////////Compare\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const containerTable = $.querySelector('.compare-section .section-container')

function compareGenerator (compareArray){
    if(compareArray.length){
           containerTable.innerHTML = ''
           containerTable.insertAdjacentHTML('afterbegin',`<div class="col-sm-12">
           <div class="compare-page">
               <div class="table-wrapper table-responsive ng-star-inserted">
                   <table class="table">
                       <thead>
                           <tr class="th-compare">
                               <td>Action</td>
                           </tr>
                       </thead>
                       <tbody id="table-compare">
                           <tr>
                               <th class="product-name">Product Name</th>
                           </tr>
                           <tr>
                               <th class="product-name">Product Image</th>
                           </tr>
                           <tr>
                               <th class="product-name">Product Description</th>
                           </tr>
                           <tr>
                               <th class="product-name"> Availability </th>
                           </tr>
                           
                       </tbody>
                   </table>
               </div>
           </div>
       </div>`)}else{
           containerTable.innerHTML = `<div class="col-sm-12 empty-cart-cls text-center ng-star-inserted">
           <img src="../image/empty-compare.png" class="img-fluid mb-4">
           <h3>
               <strong>Compare List is Empty</strong>
           </h3>
           <h4>Explore More Shortlist Some Items.</h4>
       </div>`
       }
   
   
       const headerTableRow = $.querySelector ('.table thead tr');
       const bodyTableFirstRow = $.querySelector ('.table tbody tr:nth-child(1)');
       const bodyTableSecondRow = $.querySelector ('.table tbody tr:nth-child(2)');
       const bodyTableThirdRow = $.querySelector ('.table tbody tr:nth-child(3)');
       const bodyTableFourthRow = $.querySelector ('.table tbody tr:nth-child(4)');
       compareArray.forEach(watch => {
           headerTableRow.insertAdjacentHTML('beforeend', `<th class="item-row ng-star-inserted">
           <button type="button" class="remove-compare" onclick="removeFromCompare(event, ${watch.id})"> Remove </button>
           </th>`)
           bodyTableFirstRow.insertAdjacentHTML('beforeend', `<td class="grid-link__title ng-star-inserted">${watch.watchName}</td>`)
           bodyTableSecondRow.insertAdjacentHTML('beforeend', `<td class="item-row ng-star-inserted">
               <img width="185" class="featured-image" src="${watch.colorImage[0].image}" alt="silver">
               <div class="product-price product_price">
                   <strong>On Sale: </strong>
                   <span> ${formatPrice(watch.PriceAfterDiscount)} </span>
               </div>
               <form novalidate="" class="variants clearfix ng-untouched ng-pristine ng-valid">
                   <button title="Add to Cart" class="add-to-cart btn btn-solid" onclick="addToCart(event, ${watch.id})">Add to Cart</button>
               </form>
           </td>`)
           bodyTableThirdRow.insertAdjacentHTML('beforeend', `<td class="item-row ng-star-inserted">
                                       <p class="description-compare">${watch.description}</p>
                                   </td>`)
           bodyTableFourthRow.insertAdjacentHTML('beforeend', `<td class="available-stock ng-star-inserted">
                                       <p> In stock </p>
                                   </td>`)
       })
   }

function setLocalStorageCompare(selectedWatches){
    localStorage.setItem('compare', JSON.stringify(selectedWatches))
}
function getLocalStorageCompare(){
    let localStorageWatches = JSON.parse(localStorage.getItem('compare'))
    if(localStorageWatches){
        compareList = localStorageWatches
    } else {
        compareList = []
    }
    compareGenerator(compareList)
}
function removeFromCompare (event, watchID){
    event.preventDefault();
    let localStorageWatches = JSON.parse(localStorage.getItem('compare'));
    compareList = localStorageWatches;
    compareList = compareList.filter(function(watch){
        return watch.id !== watchID
    })
    setLocalStorageCompare(compareList)
    compareGenerator(compareList)
    location.reload();
}


function addToCart(event,watchId) {
    event.preventDefault();
    let menuExists = false;
    let localStorageWatches = JSON.parse(localStorage.getItem('cart')) || [];
    let localStorageWatchesCompare = JSON.parse(localStorage.getItem('compare'));
    userBasket = localStorageWatches;
    userBasket.forEach(function(watch) {
        if (watch.id === watchId) {
            watch.count++;
            menuExists = true;
        }
    });

    if (!menuExists) {
        let mainMenu = localStorageWatchesCompare.find(function(watch) {
            return watch.id === watchId;
        });
        countProductsElem.innerHTML = userBasket.length
        countProductsMobileElem.innerHTML = userBasket.length
        mainMenu.count = 1;
        userBasket.push(mainMenu);
    }
    
    setLocalStorage(userBasket)
    location.reload();

}







window.addEventListener('load', getLocalStorageCompare)






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
const menubarLinkPagesLiChoose1 = $.querySelector('.header-down .container .menu .menu-right .link-menu .pages .choose .li1 .choose-second')
const menubarLinkPagesLi2 = $.querySelector('.header-down .container .menu .menu-right .link-menu .pages .choose .li2')
const menubarLinkPagesLiChoose2 = $.querySelector('.header-down .container .menu .menu-right .link-menu .pages .choose .li2 .choose-second')
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
const navBarBtn2 = $.querySelector('.header-down .container .menu .menu-left .icon-menu-bar i')
const closeNavBarBtn = $.querySelector('.header-down .container .menu .menu-right .link-menu .back-btn')
const navBar = $.querySelector('.menu .menu-right .link-menu')
navBarBtn.addEventListener('click', () => {
    openMenu();
})
navBarBtn2.addEventListener('click', () => {
    openMenu();
})
closeNavBarBtn.addEventListener('click', () => {
    navBar.style.right = -300 + 'px'
})


function openMenu (){
    navBar.style.right = 0
    console.log('hi');
}
