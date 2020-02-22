function over(doc){
  doc.getElementsByTagName('p')[0].visibility = "visible";
  doc.getElementsByTagName('img')[0].opacity = 0.6;

}

function out(doc){
  doc.getElementsByTagName('p')[0].visibility = "hidden";
  doc.getElementsByTagName('img')[0].opacity = 1.0;
}
