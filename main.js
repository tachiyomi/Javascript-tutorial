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

function translation(){
  const before = document.getElementById('before');
  const after = document.getElementById('after');

  const beforeOption = before.getElementsByTagName('select').selectedIndex;
  const afterOption = after.getElementsByTagName('select').selectedIndex;

  $.ajax({
      type: 'GET',
      url: endpoint,
      dataType: 'jsonp',
  		jsonp: 'callback',
      jsonpCallback: 'jsonpTestCallback',
      data: {
          text: before.getElementsByTagName('textarea')[0].value,
          sourse: before.getElementsByTagName('select')[0].options[0].value,
          target: after.getElementsByTagName('select')[0].options[1].value
      },
      success: response => {
        after.getElementsByTagName('textarea')[0].value = response.text;
      },
      error: response => {
        after.getElementsByTagName('textarea')[0].value = "error:404";
      }
  });
}

button.addEventListener('click',translation,false);
document.addEventListener('keydown',function(e){
  if(event.ctrlKey){
    if(e.KeyCode === 13)
    translation();
    button.innerText = "PRESS";
    return false;
  }
})
