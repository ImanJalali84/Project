let $ = document

const cartItems = $.querySelectorAll('.shopping-cart')
const countProductsElem = $.querySelector('.header-down .container .menu .menu-right .icon-menu .count-products-purchased')
const countProductsMobileElem = $.querySelector('.mobile-fix-option .cart-btn .count-products-purchased')
const containerTable = $.querySelector('.cart-section .section-container')







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
                        <a class="view-cart" href="#">view cart</a>
                        <a class="checkout" href="#" onclick="removeAllCart()">checkout</a></div>
                </li>`)

               }else{
                    cartItem.innerHTML = ''
                    cartItem.insertAdjacentHTML('beforeend','<h5>Your cart is currently empty.</h5>')
            }
    })


    if(userBasketArray.length){
        console.log('hi');
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
            <a class="btn btn-solid" href="#">continue shopping</a>
        </div>
        <div class="col-6">
            <a class="btn btn-solid" href="#">check out</a>
        </div>
    </div>`)}
    const tableBody = $.querySelector ('.table tbody')
    userBasketArray.forEach(watch => {
        if(userBasketArray.length){
            tableBody.innerHTML = ''
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
                                        <button type="button" data-type="minus" class="btn quantity-left-minus"><i class="ti-angle-left"></i></button>
                                    </span>
                                    <input type="text" value="${watch.count}" name="quantity" class="form-control input-number ng-untouched ng-pristine" ng-reflect-name="quantity" ng-reflect-is-disabled="" ng-reflect-model="1" disabled="">
                                    <span class="input-group-prepend">
                                        <button type="button" data-type="plus" class="btn quantity-right-plus"><i class="ti-angle-right"></i></button>
                                    </span>
                                </div>
                            </div>
                        </td>
                        <td class="end-table">
                            <a href="#" class="icon"><i class="ti-close"></i></a>
                        </td>
                        <td><h2 class="td-color"> ${formatPrice(watch.PriceAfterDiscount * watch.count)} </h2></td>
                    </tr>`)
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
}
function removeAllCart(){
    userBasket = []
    localStorage.removeItem('cart')
    getLocalStorage(userBasket)
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
    if(cartTotalPriceElemTable){
        const cartTotalPriceElemTable = $.querySelector('.cart-section tfoot tr td h2')
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
    calcTotalPrice(userBasket)
}




window.addEventListener('load', getLocalStorage)
