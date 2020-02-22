const endpoint = "https://script.google.com/macros/s/AKfycbzZtvOvf14TaMdRIYzocRcf3mktzGgXvlFvyczo/exec?text=Hello&source=en&target=ja";
$.ajax({
    type: 'GET',
    url: endpoint,
    dataType: 'jsonp',
    data: {
        text: 'Hello',
        source: 'en',
        target: 'ja',
    },
    success: response => {
        alert("OK");
    }
});
