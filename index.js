let selectedCity;
let flag = 0;
let citiesOpened = 0;

let popular_cities = ["Mumbai", "NCR", "Bengaluru", "Hyderabad", "Ahemdabad", "Chandigarh", "Chennai", "Pune", "Kolkata"];

$(document).ready(function() {
  selectedCity = $(".active-city").attr("id");
});

$(".city-dropdown").hover(function(event) {
  let id = event.currentTarget.id;
  $("#" + id + "-tag").addClass("city-hovered-name");
  $("#" + id).addClass("pointer-cursor");
}, function(event) {
  let id = event.currentTarget.id;
  $("#" + id + "-tag").removeClass("city-hovered-name");
  $("#" + id).removeClass("pointer-cursor");
});

$(".city-dropdown").on("click", function(event) {
  flag = -1;
  let id = event.currentTarget.id;
  if (selectedCity != id) {
    if (popular_cities.indexOf(selectedCity) != -1) {
      $("#" + selectedCity + "-img").attr("src", "images/" + selectedCity + ".svg");
    }
    selectedCity = id;
    $("#" + selectedCity + "-img").attr("src", "images/" + selectedCity + "-blue.svg");
    $(".nav-link").text(selectedCity);
  }

});

$('ul.dropdown-menu').on('click', function(event) {
  if (flag == 0) {
    event.stopPropagation();
  } else {
    if(citiesOpened == 1) {
      $(".other-cities").addClass("invisible");
      $(".hide-cities").addClass("invisible");
      $(".more-cities").removeClass("opened-more-cities");
      $(".more-cities").text("View All Cities");
      citiesOpened = 0;
    }
  }
  flag = 0;
});

$('.more-cities').on('click', function(event) {

  if(citiesOpened == 0) {
  $(".other-cities").removeClass("invisible");
  $(this).text("Other Cities");
  $(this).addClass("opened-more-cities");
  $(this).removeClass("more-cities-hover");
  $(".hide-cities").removeClass("invisible");
  citiesOpened = 1;
}
});

$('.hide-cities').on('click', function(event) {
  $(".other-cities").addClass("invisible");
  $(this).addClass("invisible");
  $(".more-cities").removeClass("opened-more-cities");
  $(".more-cities").text("View All Cities");
  citiesOpened = 0;
});

$('.other-city-text').on('click', function(event) {
  flag = -1;
  if (popular_cities.indexOf(selectedCity) != -1) {
    $("#" + selectedCity + "-img").attr("src", "images/" + selectedCity + ".svg");
  }

  selectedCity = $(this).text();
  $(".nav-link").text(selectedCity);

});
