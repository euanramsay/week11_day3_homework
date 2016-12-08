var app = function(){
  var url = 'https://api.spotify.com/v1/search?q=christmas&type=album'
  makeRequest(url, requestComplete);
  var saved = localStorage.selection;

}

var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
}

var requestComplete = function() {
  console.log("Success!");
  if (this.status != 200) return;

  var jsonString = this.responseText;
  var listing = JSON.parse(jsonString);
  var array = listing.albums.items;
  populateList(array);
}

var populateList = function(array) {
  var div = document.querySelector('#albums');
  for (i = 0; i < array.length; i++) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    var linkText = document.createTextNode(array[i].name);
    a.appendChild(linkText);
    a.title = array[i].name;
    a.href = array[i].external_urls.spotify;
    div.appendChild(li);
    li.append(a); 
    }
  }

window.onload = app;