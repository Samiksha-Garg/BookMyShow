let selectedCity;

$(document).ready(function() {
  selectedCity = $(".active-city").attr("id");
});

$(".city-dropdown").hover(function(event){
  let id = event.currentTarget.id;
  $("#"+id+"-tag").addClass("city-hovered-name");
}, function(event){
    let id = event.currentTarget.id;
    $("#"+id+"-tag").removeClass("city-hovered-name");
});

$(".city-dropdown").on("click", function(event){
  let id = event.currentTarget.id;
  if(selectedCity != id) {
    console.log(selectedCity);
    $("#"+selectedCity+"-img").attr("src","images/"+selectedCity+".svg");
    selectedCity = id;
    $("#"+selectedCity+"-img").attr("src","images/"+selectedCity+"-blue.svg");
    console.log(x);
  }
});

$('ul.dropdown-menu').on('click', function(event){
    event.stopPropagation();
});
