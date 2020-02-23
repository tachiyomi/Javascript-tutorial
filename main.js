function over(doc){
  doc.getElementsByTagName('p')[0].style.visibility = "visible";
  doc.getElementsByTagName('img')[0].style.opacity = 0.3;

}

function out(doc){
  doc.getElementsByTagName('p')[0].style.visibility = "hidden";
  doc.getElementsByTagName('img')[0].style.opacity = 1.0;
}

function translation(){
  const endpoint = "https://script.google.com/macros/s/AKfycbxvNsIJiFYAaZJLMX9zWGlOWMa-LUaBKHBKoqf_6eP3Ie_XUq0/exec";

  const button = document.getElementById('btn');
  const before = document.getElementById('before');
  const after = document.getElementById('after');

  $.ajax({
      type: 'GET',
      url: endpoint,
      dataType: 'jsonp',
  		jsonp: 'callback',
      jsonpCallback: 'jsonpTestCallback',
      data: {
          text: before.getElementsByTagName('textarea').value,
          sourse: before.getElementsByTagName('select').options[before.getElementsByTagName('select').selectedIndex].value,
          target: after.getElementsByTagName('select').options[after.getElementsByTagName('select').selectedIndex].value
      },
      success: response => {
        after.getElementsByTagName('textarea').value = response.text;
      },
      error: response => {
        after.getElementsByTagName('textarea').value = "error:404";
      }
  });
}

button.addEventListener('click',translation());
document.addEventListener('keydown',function(e){
  if(event.ctrlKey){
    if(e.KeyCode === 13)
    translation();
    return false;
  }
})
