//modal login

var ico = document.querySelector('.profilIcon');
var modal = document.querySelector('.openProfil_modal');
var overlay = document.querySelector('.openProfil_overlay');

ico.addEventListener('click', function() {
  modal.style.display = 'block';
});

overlay.addEventListener('click', function() {
  modal.style.display = '';
});

var fields = document.querySelectorAll('.allId');

for (let i = 0; i < fields.length; i++) {
  console.log(fields[i]);
  fields[i].addEventListener('focus', function() {
    fields[i].style.border = '2px red solid';
  });

  fields[i].addEventListener('blur', function() {

    if (fields[i].value !== '') {
      fields[i].style.border = '';
    };
  });
};

//night mode

var mode = "default";
var time = document.querySelector('.toggleSwitch');

time.addEventListener('click', function() {
  var pageStyle = document.querySelector('.pageStyle');
  var search = document.querySelector('.searchImgLink');
  var profil = document.querySelector('.profilImgLink');
  if (mode == "default") {
    pageStyle.setAttribute('href', 'assets/css/dark.css');
    search.src = "assets/img/searchNight.png";
    profil.src = "assets/img/userNight.png";
    time.title = "Mode Jour";
    mode = "dark";
  } else {
    pageStyle.setAttribute('href', 'assets/css/default.css');
    search.src = "assets/img/searchDay.png";
    profil.src = "assets/img/userDay.png";
    time.title = "Mode Nuit";
    mode = 'default';
  }
});

//selecteur

var listAllFilm = document.querySelector('.afficheContent');
var player = document.querySelector('.playerContainer');
var textDescription = document.querySelector('describ');
var menuItem = document.querySelectorAll('.videoList');
var menu = document.querySelector('.nouveaute');

for (let i = 0; i < menuItem.length; i++) {
  menuItem[i].addEventListener('click', function() {
    categoryChoice(listAllFilm, i);
    videoChoise();
  });
}

categoryChoice(listAllFilm, 0);

function categoryChoice(listAllFilm, i) {
  listAllFilm.innerHTML = "";
  if (i === 1) {
    var text = 'Action';
  } else if (i === 2) {
    var text = 'Animation';
  } else if (i === 3) {
    var text = 'Comedy';
  } else if (i === 4) {
    var text = 'Horror / Thriller';
  } else {
    var text = 'All';
  }

  for (i = 0; i < data.films.length; i++) {
    if (text === 'All') {
      listAllFilm.innerHTML += '<img class="affiche" src=' + data.films[i].img + '>';
    } else {
      if (data.films[i].category === text) {
        listAllFilm.innerHTML += '<img class="affiche" src=' + data.films[i].img + '>';
      }
    }
  }
}