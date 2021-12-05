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

      if (regX_name.test(first_name)){
        all_checks = 1;
      }else{
        all_checks = 0;
        $("#error-first-name").show();
        $("#first-name").css("border-color", "red");
      }
      if (regX_name.test(last_name)){
        all_checks = 1;
      }else{
        all_checks = 0;
        $("#error-last-name").show();
        $("#last-name").css("border-color", "red");
      }
      
      if (regX_email.test(email_address)){
        all_checks = 1;
      }else{
        all_checks = 0;
        $("#error-email-address").show();
        $("#email-address").css("border-color", "red");
      }
      
      if (terms_conditions){
        all_checks = 1;
      }else{
        all_checks = 0;
        $("#error-terms-conditions").show();
      }
  });

  $("#first-name").click(
    function () { 
      $("#error-first-name").hide();
      $("#first-name").css("border-color", "black");
  });

  $("#last-name").click(
    function () { 
      $("#error-last-name").hide();
      $("#last-name").css("border-color", "black");
  });

  $("#email-address").click(
    function () { 
      $("#error-email-address").hide();
      $("#email-address").css("border-color", "black");
  });

  $("#terms-conditions").click(
    function () { 
      $("#error-terms-conditions").hide();
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
  }, 10000);
});
