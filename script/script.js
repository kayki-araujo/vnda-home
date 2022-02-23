function ativar(id) {
  var button = document.getElementById(id);
  var div = document.getElementById('buttons');
  var image = document.getElementById('images');

  if (button.classList.contains('active') == false) {
    var children = div.childNodes;
    children.forEach(deactivate);
    button.classList.add('active');
    image.classList.add(id);


  }
  function deactivate(item) {
    if (item.id != button.id) {
      if (item.classList != undefined && item.classList.contains('active')) {
        item.classList.remove('active');
        image.classList.remove(item.id);
      }
    }
  }
}