function over(doc){
  doc.getElementsByTagName('p')[0].style.visibility = "visible";
  doc.getElementsByTagName('img')[0].style.opacity = 0.3;

}

function out(doc){
  doc.getElementsByTagName('p')[0].style.visibility = "hidden";
  doc.getElementsByTagName('img')[0].style.opacity = 1.0;
}

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
          text: before.value,
          sourse: 'en',
          target: 'ja'
      },
      success: response => {
        after.value = response.text;
      },
      error: response => {
        after.value = "error:404";
      }
  });
});
