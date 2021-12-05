$(document).ready(function(){

  function initMap() {
      const hotel_coords = { lat:53.26898217889667, lng:-9.016113489636107 };
      const map = new google.maps.Map(document.getElementById("map-container"), {
          zoom: 12,
          center: hotel_coords,
      });
      const marker = new google.maps.Marker({
          position: hotel_coords,
          map: map,
      });
  }
  initMap();


  function countChar(val) {
      var len = val.value.length;
      if (len >= 500) {
        val.value = val.value.substring(0, 500);
      } else {
        $('#char-number').text(500 - len);
      }
  };

  $("#submit-information").click(
    function () {
      let first_name = $("#first-name").val();    
      let last_name = $("#last-name").val(); 
      let email_address = $("#email-address").val(); 
      let phone_number = $("#phone-number").val(); 
      let message = $("#your-message-textarea").val(); 
      let terms_conditions = $("#terms-conditions").is(":checked"); 
      let news_suscription = $("#letterbox-suscribe").is(":checked");

      let all_checks = 0;
      var regX_email = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})+$/;
      var regX_name = /^[A-Za-z]+$/;

      console.log(terms_conditions);

      if (regX_name.test(first_name)){
        all_checks = 1;
      }else{
        all_checks = 0;
        $("#error-first-name").show();
        $(".about-input-inputs :input").css("border", "red");
      }
      if (regX_name.test(last_name)){
        all_checks = 1;
      }else{
        all_checks = 0;
        $("#error-last-name").show();
      }
      
      if (regX_email.test(email_address)){
        all_checks = 1;
      }else{
        all_checks = 0;
        $("#error-email-address").show();
      }
      
      if (terms_conditions){
        console.log("le true")
      }else{
        all_checks = 0;
        $("#error-terms-conditions").show();
      }
  });

  $("#opinion-carrussel > div:gt(0)").hide();

  setInterval(function() { 
    $('#opinion-carrussel > div:first')
    .fadeOut(1000)
    .next()
    .delay(1000)
    .fadeIn(1000)
    .end()
    .appendTo('#opinion-carrussel');
  }, 5000);
});
