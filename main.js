const endpoint = "https://script.google.com/macros/s/AKfycbxvNsIJiFYAaZJLMX9zWGlOWMa-LUaBKHBKoqf_6eP3Ie_XUq0/exec";

const button = document.getElementById('btn');
const before = document.getElementById('before');
const after = document.getElementById('after');
button.addEventListener('click', () => {
  $.ajax({
      type: 'GET',
      url: endpoint,
      dataType: 'jsonp',
  		jsonp: 'callback',
      jsonpCallback: 'jsonpTestCallback',
      data: {
          text: 'Hello',
          sourse: 'en',
          target: 'ja'
      },
      success: response => {
        after.innerText = response.text;
      },
      error: response => {
        after.innerText = "error:404";
      }
  });
});
