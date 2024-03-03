//    //////////////////////////////////////////////////Photo Slider\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let $ = document
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
let isDown = false;
let startX;
let scrollLeft;


slider.addEventListener('mousedown', (event) => {
  isDown = true;
  startX = event.clientX - slider.getBoundingClientRect().left;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseup', () => {
  isDown = false;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
});

slider.addEventListener('mousemove', (event) => {
  if (!isDown) return;
  event.preventDefault();
  const x = event.clientX - slider.getBoundingClientRect().left;
  const walk = (x - startX) * 4; 
  let left1 = scrollLeft - walk; 
  if(left1 < 0){
    left1 = 830
  } else if(left1 > 830){
    left1 = 0
  } 
  requestAnimationFrame(() => {
      slider.scrollLeft = left1;
  })
  console.log(left1);
});




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
        description : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."

    },
    {
        id:2,
        watchName:'watch2',
        PriceAfterDiscount:207.00,
        PriceBeforeDiscount:345.00,
        colorImage : [{color : 'silver',image : "../image/watches/watch2/2.jpg"},{color : 'sienna', image : '../image/watches/watch2/3.jpg"'}],
        new : true,
        sale : false,
        best : false,
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
        description : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
    },
    {
        id:16,
        watchName:'watch16',
        PriceAfterDiscount:80.00,
        PriceBeforeDiscount:160.00,
        colorImage : [{color : 'navy',image : "../image/watches/watch16/15.jpg"},{color : 'silver', image : '../image/watches/watch16/19.jpg'}],
        new : true,
        sale : true,
        best : false,
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
            createBoxTrendingProducts(watch.colorImage[0].image,watch.watchName,watch.PriceAfterDiscount,watch.PriceBeforeDiscount)
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
        createBoxTrendingProducts(watch.colorImage[0].image,watch.watchName,watch.PriceAfterDiscount,watch.PriceBeforeDiscount)
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
        createBoxTrendingProducts(watch.colorImage[0].image,watch.watchName,watch.PriceAfterDiscount,watch.PriceBeforeDiscount)
    }
})
})

watches.forEach( watch => {
    if (watch.new){
        createBoxTrendingProducts(watch.colorImage[0].image,watch.watchName,watch.PriceAfterDiscount,watch.PriceBeforeDiscount)
    }
})
function createBoxTrendingProducts (image,watchName,PriceAfterDiscount,PriceBeforeDiscount){
    watchesContainer.insertAdjacentHTML('beforeend', `
        <div class="watch">
            <a href="#" class="imglink"><img src="${image}" alt="watch"></a>
            <div class="star">
                <i class="fa fa-star" style="color: #edb867;"></i>
                <i class="fa fa-star" style="color: #edb867;"></i>
                <i class="fa fa-star" style="color: #edb867;"></i>
                <i class="fa fa-star" style="color: #edb867;"></i>
                <i class="fa fa-star" style="color: #edb867;"></i>
            </div>
            <div class="description-watch">
                <a href="#" class="watch-name">${watchName}</a>
                <h4 class="price">$${PriceAfterDiscount} <span>$${PriceBeforeDiscount}</span></h4>
                <ul class="colors">
                </ul>
            </div>
        </div>`)
}
const watchesBox = $.querySelectorAll('.watch');

$.addEventListener('DOMContentLoaded' , ()=>{
    watchesBox.forEach(watchBox =>{
        watchBox.classList.add('active')
    })
})