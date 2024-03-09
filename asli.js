// تابعی برای افزودن محصول به سبد خرید
function addToCart(productName) {
    // اینجا می‌توانید کد اضافه کردن محصول به سبد خرید را پیاده‌سازی کنید
    // به عنوان مثال:
    // alert('محصول ' + productName + ' به سبد خرید اضافه شد!');
    
    // مثال: انتقال به صفحه سبد خرید با استفاده از URL
    window.location.href = "cart.html?asli=" + encodeURIComponent(productName);
}
