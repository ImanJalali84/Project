let $ = document

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


//    //////////////////////////////////////////////////Photo Slider\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const sliderImgElem = $.querySelectorAll('.slider-item');
const prevBtn = $.querySelector('.prev')
const nextBtn = $.querySelector('.next')

prevBtn.addEventListener('click', ()=>{
    sliderImgElem[0].classList.toggle('active')
    sliderImgElem[1].classList.toggle('active')
})
nextBtn.addEventListener('click', ()=>{
    sliderImgElem[0].classList.toggle('active')
    sliderImgElem[1].classList.toggle('active')
})



const slider = document.querySelector('.list-brands');
scrollSliders(slider,830)
function scrollSliders (element,elementWidth){
    let isDown = false;
    let startX;
    let scrollLeft;
    element.addEventListener('mousedown', (event) => {
    isDown = true;
    startX = event.clientX - element.getBoundingClientRect().left;
    scrollLeft = element.scrollLeft;
    });

    element.addEventListener('mouseup', () => {
    isDown = false;
    });

    element.addEventListener('mouseleave', () => {
    isDown = false;
    });

    element.addEventListener('mousemove', (event) => {
        if (!isDown) return;
        event.preventDefault();
        const x = event.clientX - element.getBoundingClientRect().left;
        const walk = (x - startX) * 4; 
        let left1 = scrollLeft - walk; 
        if(left1 < 0){
            left1 = elementWidth
        } else if(left1 > elementWidth){
            left1 = 0
        } 
        requestAnimationFrame(() => {
            // element.scrollLeft = left1;
            element.scrollTo({
                left:left1,
                behavior: 'smooth'
            })
        })
    });

}

//    ////////////////////////////////////////////Introducing Watches\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    const introducingWatches = $.querySelector('.introducing-watches')
    scrollSliders(introducingWatches,1260)


 //   //////////////////////////////////////////////TRENDING PRODUCTS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\  

const watchesContainer = $.querySelector('.watches');
const popularCategoryNavLink1 = $.querySelector('.nav-link1')
const popularCategoryNavLink2 = $.querySelector('.nav-link2')
const popularCategoryNavLink3 = $.querySelector('.nav-link3')

let watches = [
    {
        id:1,
        watchName:'watch1',
        PriceAfterDiscount:156.00,
        PriceBeforeDiscount:260.00,
        colorImage : [{color : 'silver',image : "../image/watches/watch1/trending-products-popular1.jpg"}],
        new : true,
        sale : false,
        best : false,
        count:1,
        description : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
    },
    {
        id:2,
        watchName:'watch2',
        PriceAfterDiscount:207.00,
        PriceBeforeDiscount:345.00,
        colorImage : [{color : 'silver',image : "../image/watches/watch2/2.jpg"},{color : 'sienna', image : '../image/watches/watch2/3.jpg'}],
        new : true,
        sale : false,
        best : false,
        count:1,
        description : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."

    },
    {
        id:3,
        watchName:'watch3',
        PriceAfterDiscount:356.00,
        PriceBeforeDiscount:445.00,
        colorImage : [{color : 'navy',image : "../image/watches/watch3/6.jpg"}],
        new : true,
        sale : false,
        best : false,
        count:1,
        description : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."

    },
    {
        id:4,
        watchName:'watch4',
        PriceAfterDiscount:466.40,
        PriceBeforeDiscount:530.00,
        colorImage : [{color : 'bisque',image : "../image/watches/watch4/15.jpg"}],
        new : true,
        sale : false,
        best : false,
        count:1,
        description : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."

    },
    {
        id:5,
        watchName:'watch5',
        PriceAfterDiscount:218.40,
        PriceBeforeDiscount:420.00,
        colorImage : [{color : 'chocolate',image : "../image/watches/watch5/8.jpg"},{color : 'navy', image : '../image/watches/watch5/6.jpg'}],
        new : true,
        sale : true,
        best : false,
        count:1,
        description : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
    },
    {
        id:6,
        watchName:'watch6',
        PriceAfterDiscount:135.00,
        PriceBeforeDiscount:225.00,
        colorImage : [{color : 'steelblue',image : "../image/watches/watch6/9.jpg"},{color : 'bisque', image : '../image/watches/watch6/15.jpg'}],
        new : true,
        sale : true,
        best : false,
        count:1,
        description : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
    },
    {
        id:7,
        watchName:'watch7',
        PriceAfterDiscount:156.60,
        PriceBeforeDiscount:174.00,
        colorImage : [{color : 'wheat',image : "../image/watches/watch7/18.jpg"},{color : 'silver', image : '../image/watches/watch7/13.jpg'}],
        new : false,
        sale : false,
        best : true,
        count:1,
        description : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
    },
    {
        id:8,
        watchName:'watch8',
        PriceAfterDiscount:132.30,
        PriceBeforeDiscount:189.00,
        colorImage : [{color : 'dimgrey',image : "../image/watches/watch8/4.jpg"},{color : 'sienna', image : '../image/watches/watch8/12.jpg'}],
        new : false,
        sale : true,
        best : true,
        count:1,
        description : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
    },
    {
        id:9,
        watchName:'watch9',
        PriceAfterDiscount:94.05,
        PriceBeforeDiscount:99.00,
        colorImage : [{color : 'black',image : "../image/watches/watch9/17.jpg"},{color : 'sienna', image : '../image/watches/watch9/3.jpg'}],
        new : false,
        sale : false,
        best : true,
        count:1,
        description : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
    },
    {
        id:10,
        watchName:'watch10',
        PriceAfterDiscount:346.50,
        PriceBeforeDiscount:495.00,
        colorImage : [{color : 'silver',image : "../image/watches/watch10/19.jpg"},{color : 'palegoldenrod', image : '../image/watches/watch10/14.jpg'}],
        new : false,
        sale : true,
        best : true,
        count:1,
        description : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
    },
    {
        id:11,
        watchName:'watch11',
        PriceAfterDiscount:86.00,
        PriceBeforeDiscount:215.00,
        colorImage : [{color : 'dimgray',image : "../image/watches/watch11/16.jpg"},{color : 'chocolate', image : '../image/watches/watch11/12.jpg'}],
        new : false,
        sale : false,
        best : true,
        count:1,
        description : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
    },
    {
        id:12,
        watchName:'watch12',
        PriceAfterDiscount:135.00,
        PriceBeforeDiscount:150.00,
        colorImage : [{color : 'palegoldenrod',image : "../image/watches/watch12/14.jpg"},{color : 'bisque', image : '../image/watches/watch12/15.jpg'}],
        new : false,
        sale : false,
        best : true,
        count:1,
        description : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
    },
    {
        id:13,
        watchName:'watch13',
        PriceAfterDiscount:144.00,
        PriceBeforeDiscount:360.00,
        colorImage : [{color : 'black',image : "../image/watches/watch13/10.jpg"},{color : 'chocolate', image : '../image/watches/watch13/8.jpg'}],
        new : false,
        sale : true,
        best : true,
        count:1,
        description : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
    },
    {
        id:14,
        watchName:'watch14',
        PriceAfterDiscount:265.05,
        PriceBeforeDiscount:285.00,
        colorImage : [{color : 'steelblue',image : "../image/watches/watch14/9.jpg"},{color : 'black', image : '../image/watches/watch14/17.jpg'}],
        new : true,
        sale : true,
        best : true,
        count:1,
        description : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
    },
    {
        id:15,
        watchName:'watch15',
        PriceAfterDiscount:239.04,
        PriceBeforeDiscount:249.00,
        colorImage : [{color : 'sienna',image : "../image/watches/watch15/3.jpg"},{color : 'navy', image : '../image/watches/watch15/6.jpg'}],
        new : false,
        sale : true,
        best : false,
        count:1,
        description : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
    },
    {
        id:16,
        watchName:'watch16',
        PriceAfterDiscount:80.00,
        PriceBeforeDiscount:160.00,
        colorImage : [{color : 'bisque',image : "../image/watches/watch16/15.jpg"},{color : 'silver', image : '../image/watches/watch16/19.jpg'}],
        new : true,
        sale : true,
        best : false,
        count:1,
        description : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
    }
]
popularCategoryNavLink1.addEventListener( 'click', () => {
    popularCategoryNavLink1.classList.add('active')
    popularCategoryNavLink2.classList.remove('active')
    popularCategoryNavLink3.classList.remove('active')
    watchesContainer.innerHTML=""
    watches.forEach( watch => {
        if (watch.new){
            createBoxTrendingProducts(watch.id,watch.colorImage[0].image,watch.watchName,watch.PriceAfterDiscount,watch.PriceBeforeDiscount,watch.colorImage)
        }
    })
})
popularCategoryNavLink2.addEventListener( 'click', () => {
    popularCategoryNavLink1.classList.remove('active')
    popularCategoryNavLink2.classList.add('active')
    popularCategoryNavLink3.classList.remove('active')
    watchesContainer.innerHTML=""
    watches.forEach( watch => {
    if (watch.sale){
        createBoxTrendingProducts(watch.id,watch.colorImage[0].image,watch.watchName,watch.PriceAfterDiscount,watch.PriceBeforeDiscount,watch.colorImage)
    }
})
})
popularCategoryNavLink3.addEventListener( 'click', () => {
    popularCategoryNavLink1.classList.remove('active')
    popularCategoryNavLink2.classList.remove('active')
    popularCategoryNavLink3.classList.add('active')
    watchesContainer.innerHTML=""
    watches.forEach( watch => {
    if (watch.best){
        createBoxTrendingProducts(watch.id,watch.colorImage[0].image,watch.watchName,watch.PriceAfterDiscount,watch.PriceBeforeDiscount,watch.colorImage)
    }
})
})

watches.forEach( watch => {
    if (watch.new){
        createBoxTrendingProducts(watch.id,watch.colorImage[0].image,watch.watchName,watch.PriceAfterDiscount,watch.PriceBeforeDiscount,watch.colorImage)
    }
})
function createBoxTrendingProducts(id,image, watchName, PriceAfterDiscount, PriceBeforeDiscount, colors) {
    let colorLiElements = createColorLiElem(colors);
    const watchContainer = document.createElement('div');
    watchContainer.classList.add('watch');
    watchContainer.innerHTML = 
        `<a href="#" class="imglink"><img src="${image}" alt="watch">
        <span class="new">NEW</span>
        <span class="cart-box">
            <button title="Add to cart" class="ng-star-inserted"  onclick="addMenuToBasketArray(${id})">
                <i class="ti-shopping-cart"></i>
            </button>
            <button title="Add to Wishlist">
                <i class="ti-heart"></i>
            </button>
            <button title="Quick View">
                <i class="ti-search"></i>
            </button>
            <button title="Compare">
                <i class="ti-reload"></i>
            </button>
        </span></a>
        <div class="star">
            <i class="fa fa-star" style="color: #edb867;"></i>
            <i class="fa fa-star" style="color: #edb867;"></i>
            <i class="fa fa-star" style="color: #edb867;"></i>
            <i class="fa fa-star" style="color: #edb867;"></i>
            <i class="fa fa-star" style="color: #edb867;"></i>
        </div>
        <div class="description-watch">
            <a href="#" class="watch-name">${watchName}</a>
            <h4 class="price">${formatPrice(PriceAfterDiscount)} <span>${formatPrice(PriceBeforeDiscount)}</span></h4>
            <ul class="colors">
                ${colorLiElements}
            </ul>
        </div>`
    ;

    watchesContainer.appendChild(watchContainer);

    const colorLiItems = watchContainer.querySelectorAll('.colors li');
    colorLiItems.forEach((li, index) => {
        li.addEventListener('click', () => {
            const selectedImage = colors[index].image;
            const imgElement = watchContainer.querySelector('img');
            imgElement.src = selectedImage;
        });
    });
}

function createColorLiElem(colors) {
    let colorLiElements = "";
    colors.forEach(colorObj => {
        colorLiElements += '<li class="color" style="background-color: ' + colorObj.color + '"></li>';
    });
    return colorLiElements;
}

function formatPrice (price){
    let formatted = parseFloat(price).toFixed(2);
    formatted = formatted.toString().replace('/\B(?=(\d{3})+(?!\d)',',')
    formatted = '$' + formatted
    return formatted;
}


 //   //////////////////////////////////////////////TRENDING PRODUCTS2\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\  
 const watchesContainer2 = $.querySelector('.watches-container2 .watches2');
 watches.forEach( watch => {
     createBoxTrendingProducts2(watch.id,watch.colorImage[0].image,watch.watchName,watch.PriceAfterDiscount,watch.PriceBeforeDiscount,watch.colorImage, watch.sale)
})
scrollSliders(watchesContainer2,4300);
function createBoxTrendingProducts2(id,image, watchName, PriceAfterDiscount, PriceBeforeDiscount, colors, category) {
    let colorLiElements = createColorLiElem(colors);
    const watchContainer = document.createElement('div');
    watchContainer.classList.add('watch');
    watchContainer.innerHTML = 
            `<a href="#" class="imglink"><img src="${image}" alt="watch">
                <span class="new">NEW</span>
                ${category ? '<span class="sale">ON SALE</span>' : ''}
                <span class="cart-box2">
                    <button title="Add to cart" class="ng-star-inserted" onclick="addMenuToBasketArray(${id})">
                        <i class="ti-shopping-cart"></i>
                    </button>
                    <button title="Add to Wishlist">
                        <i class="ti-heart"></i>
                    </button>
                    <button title="Quick View">
                        <i class="ti-search"></i>
                    </button>
                    <button title="Compare">
                        <i class="ti-reload"></i>
                    </button>
                </span>
            </a>
            <div class="star">
                <i class="fa fa-star" style="color: #edb867;"></i>
                <i class="fa fa-star" style="color: #edb867;"></i>
                <i class="fa fa-star" style="color: #edb867;"></i>
                <i class="fa fa-star" style="color: #edb867;"></i>
                <i class="fa fa-star" style="color: #edb867;"></i>
            </div>
            <div class="description-watch">
                <a href="#" class="watch-name">${watchName}</a>
                <h4 class="price">${formatPrice(PriceAfterDiscount)}  <span>${formatPrice(PriceBeforeDiscount)} </span></h4>
                <ul class="colors">
                    ${colorLiElements} 
                </ul>
            </div>`;
            
        watchesContainer2.appendChild(watchContainer);
        
        const colorLiItems = watchContainer.querySelectorAll('.colors li');
        colorLiItems.forEach((li, index) => {
            li.addEventListener('click', () => {
                const selectedImage = colors[index].image;
                const imgElement = watchContainer.querySelector('img');
                imgElement.src = selectedImage;
            });
        });
}



 //   //////////////////////////////////////////////Special Products\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\  
const watchesContainer3 = $.querySelector('.spacial-products .watches3')
function createBoxSpecialProducts (id,indexwatch, image, watchName, PriceAfterDiscount, PriceBeforeDiscount, colors){
    let colorLiElements = createColorLiElem(colors);
    const watchContainer = document.createElement('div');
    watchContainer.classList.add('watch');
    if(indexwatch == 1){
        watchContainer.classList.add('watch1');
    }else if(indexwatch == 2){
        watchContainer.classList.add('watch2');
    }else if(indexwatch == 3){
        watchContainer.classList.add('watch3');
    }else if(indexwatch == 4){
        watchContainer.classList.add('watch4');
    }else if(indexwatch == 5){
        watchContainer.classList.add('watch5');
    }
    watchContainer.innerHTML = 
            `<a href="#" class="imglink"><img src="${image}" alt="watch">
            ${indexwatch == 5 ? '<span class="new">NEW</span>' : ''}
            ${indexwatch == 5 ? '<span class="sale">ON SALE</span>' : ''}
            ${indexwatch == 5 ? `<span class="cart-box2">
                                <button title="Add to cart" class="ng-star-inserted" onclick="addMenuToBasketArray(${id})">
                                    <i class="ti-shopping-cart"></i>
                                </button>
                                <button title="Add to Wishlist">
                                    <i class="ti-heart"></i>
                                </button>
                                <button title="Quick View">
                                    <i class="ti-search"></i>
                                </button>
                                <button title="Compare">
                                    <i class="ti-reload"></i>
                                </button>
                            </span>` : ''}
            </a>
            <div class="description-watch ${indexwatch == 5 ? 'description-watch5' : ''}">
                <div class="star">
                    <i class="fa fa-star" style="color: #edb867;"></i>
                    <i class="fa fa-star" style="color: #edb867;"></i>
                    <i class="fa fa-star" style="color: #edb867;"></i>
                    <i class="fa fa-star" style="color: #edb867;"></i>
                    <i class="fa fa-star" style="color: #edb867;"></i>
                </div>
                <a href="#" class="watch-name">${watchName}</a>
                <h4 class="price">${formatPrice(PriceAfterDiscount)}
                ${indexwatch == 5 ? `<span>${formatPrice(PriceBeforeDiscount)} </span>` : ''}
                </h4>
                <ul class="colors">
                    ${colorLiElements}
                </ul>
            </div>`;
            
        watchesContainer3.appendChild(watchContainer);
        
        const colorLiItems = watchContainer.querySelectorAll('.colors li');
        colorLiItems.forEach((li, index) => {
            li.addEventListener('click', () => {
                const selectedImage = colors[index].image;
                const imgElement = watchContainer.querySelector('img');
                imgElement.src = selectedImage;
            });
        });
}


for(let i = 0 ; i < watches.slice(0, 5).length ; i++){
    const currentWatch = watches[i];
    if (currentWatch && currentWatch.colorImage) {
        for(let j = 0 ; j < currentWatch.colorImage.length ; j++){
            createBoxSpecialProducts(i+1,i+1, currentWatch.colorImage[j]?.image , currentWatch.watchName , currentWatch.PriceAfterDiscount , currentWatch.PriceBeforeDiscount , currentWatch.colorImage)
        }
    }
}

 //   //////////////////////////////////////////////Recent Story\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\  

const recentStoryContainer = $.querySelector('.recents')
 scrollSliders(recentStoryContainer,500);



//    //////////////////////////////////////////////////Cart\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const cartItems = $.querySelector('.shopping-cart')
const countProductsElem = $.querySelector('.header-down .container .menu .menu-right .icon-menu .count-products-purchased')
let userBasket = []
let countProducts = 0

function addMenuToBasketArray(watchId) {
    console.log(watchId);
    let menuExists = false;

    userBasket.forEach(function(watch) {
        if (watch.id === watchId) {
            watch.count++;
            menuExists = true;
        }
    });

    if (!menuExists) {
        let mainMenu = watches.find(function(watch) {
            return watch.id === watchId;
        });
        countProducts++
        countProductsElem.innerHTML = countProducts
        mainMenu.count = 1;
        userBasket.push(mainMenu);
    }
    
    basketMenusGenerator(userBasket);
    calcTotalPrice(userBasket)
}
function basketMenusGenerator(userBasketArray){
    if(countProducts){
    cartItems.innerHTML = ''
    userBasketArray.forEach(function(watch){
        cartItems.insertAdjacentHTML('beforeend', `<li class="ng-star-inserted">
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
            cartItems.insertAdjacentHTML('beforeend',`<li>
            <div class="total">
                <h5>subtotal : <span>$00.00</span></h5>
            </div>
        </li>
        <li>
            <div class="buttons">
                <a class="view-cart" href="#">view cart</a>
                <a class="checkout" href="#">checkout</a></div>
        </li>`)}else{
        cartItems.innerHTML = ''
        cartItems.insertAdjacentHTML('beforeend','<h5>Your cart is currently empty.</h5>')
    }
}

function removeMenuFromBasket (watchID){
    userBasket = userBasket.filter(function(watch){
        return watch.id !== watchID
    })
    countProducts--
    countProductsElem.innerHTML = countProducts
    basketMenusGenerator(userBasket)
    calcTotalPrice(userBasket)
}



function calcTotalPrice(userBasketArray) {
    let totalPriceValue = 0;
    userBasketArray.forEach(function (watch) {
        totalPriceValue += watch.PriceAfterDiscount * watch.count;
    });

    const cartTotalPriceElem = $.querySelector('.total h5 span');
    if (cartTotalPriceElem) {
        cartTotalPriceElem.innerHTML = formatPrice(totalPriceValue);
        console.log(cartTotalPriceElem);
    }
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