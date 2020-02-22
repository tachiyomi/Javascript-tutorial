const endpoint = "https://script.google.com/macros/s/AKfycbzZtvOvf14TaMdRIYzocRcf3mktzGgXvlFvyczo/exec";

const button = document.getElementById('btn');
button.addEventListener('click', () => {
  $.ajax({
      type: 'GET',
      url: endpoint,
      dataType: 'jsonp',
  		jsonp: 'callback',
      jsonpCallback: 'jsonpTestCallback',
      data: {
          text: 'Hello'
      },
      success: response => {
          alert("OK");
      }
  });
});
