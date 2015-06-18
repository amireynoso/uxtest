// Carousel
var carousel = $(".more-carousel").carousel({"pagination": true});

// Tabs
var tabs = $(".product-tabs").tabs();
tabs.on('ready',function () {
    this.show(2);
});

// Form submit
var modal = $('#submit').modal('./static/transaction-success.html');