const endpoint = "https://script.google.com/macros/s/AKfycbxvNsIJiFYAaZJLMX9zWGlOWMa-LUaBKHBKoqf_6eP3Ie_XUq0/exec";

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
        button.innerText = "OK";
      },
      error: response => {
        button.innerText = "NO";
      }
  });
});
