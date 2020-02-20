// Pagina aperta su più tabs
document.getElementById("defaultOpen").click();

function openTopic(evt, topicName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(topicName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Zoom immagini
var modal = document.getElementById("Modal");

var img = document.getElementById("image");
var modalImg = document.getElementById("img01");
var caption = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  caption.innerHTML = this.alt;
}

function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("caption").innerHTML = element.alt;
  document.getElementById("Modal").style.display = "block";
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}
