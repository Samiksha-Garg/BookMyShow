let selectedCity;

let popular_cities = ["Mumbai", "NCR", "Bengaluru", "Hyderabad", "Ahemdabad", "Chandigarh", "Chennai", "Pune", "Kolkata"];

$(document).ready(function() {
  selectedCity = $(".active-city").attr("id");
});

$(".city-dropdown").hover(function(event){
  let id = event.currentTarget.id;
  $("#"+id+"-tag").addClass("city-hovered-name");
  $("#"+id).addClass("pointer-cursor");
}, function(event){
    let id = event.currentTarget.id;
    $("#"+id+"-tag").removeClass("city-hovered-name");
    $("#"+id).removeClass("pointer-cursor");
});

$(".city-dropdown").on("click", function(event){
  let id = event.currentTarget.id;
  if(selectedCity != id) {
    if(popular_cities.indexOf(selectedCity) != -1) {
        $("#"+selectedCity+"-img").attr("src","images/"+selectedCity+".svg");
    }
    selectedCity = id;
    $("#"+selectedCity+"-img").attr("src","images/"+selectedCity+"-blue.svg");
    $(".nav-link").text(selectedCity);
  }
});

$('ul.dropdown-menu').on('click', function(event){
    event.stopPropagation();
});

$('.more-cities').on('click', function(event){
  $(".other-cities").removeClass("invisible");
  $(this).text("Other Cities");
  $(this).addClass("opened-more-cities");
  $(this).removeClass("more-cities-hover");
  $(".hide-cities").removeClass("invisible");
});

$('.hide-cities').on('click', function(event){
  $(".other-cities").addClass("invisible");
  $(this).addClass("invisible");
  $(".more-cities").removeClass("opened-more-cities");
  $(".more-cities").text("View All Cities");
});

$('.other-city-text').on('click', function(event){
  console.log("hi");
  if(popular_cities.indexOf(selectedCity) != -1) {
    $("#"+selectedCity+"-img").attr("src","images/"+selectedCity+".svg");
  }

  selectedCity = $(this).text();
  $(".nav-link").text(selectedCity);
});
