$(document).ready(function(){

    function setLanguageTooltip() {
        var htmlLang = $("html").attr("lang");
        if(htmlLang == "en-IE") {
            $("#language-flag").html("EN");
            $("#english-button").css({
                "background-color": "#242424",
                "color":"rgb(199, 199, 199)",
                "cursor":"default"
            });
        }else{
            $("#language-flag").html("ES");
        }
    };

    setLanguageTooltip();
    
    $("#language-button").hover(
        function() {
            $("#language-tooltip").stop(true,true).delay(500).show(0);
        },
        function() {
            $("#language-tooltip").stop(true,true).delay(500).hide(0);
        }
    );

    $("#language-tooltip").hover(
        function() {
            $("#language-tooltip").stop(true,true).delay(500).show(0);
        },
        function() {
            $("#language-tooltip").stop(true,true).delay(300).hide(0);
        }
    );

    $("#email-button").hover(
        function() {
            $("#email-tooltip").stop(true,true).delay(500).show(0);
        },
        function() {
            $("#email-tooltip").stop(true,true).delay(500).hide(0);
        }
    );

    $("#email-tooltip").hover(
        function() {
            $("#email-tooltip").stop(true,true).delay(500).show(0);
        },
        function() {
            $("#email-tooltip").stop(true,true).delay(300).hide(0);
        }
    );

    $("#copy-email-icon").click(function() {
        var emailAddress = $("#hotel-email-address").text();
        navigator.clipboard.writeText(emailAddress);
        if(emailAddress.includes("@")) {
            var bgColor = $("#email-tooltip-field-box").css("background-color");
            var labelText = $("#hotel-email-address").text();
            var labelTextColor = $("#hotel-email-address").css("color");
            $("#email-tooltip-field-box").css({"background-color":"rgb(152, 245, 81, 0.6)"});
            $("#hotel-email-address").text("Copied!");
            $("#hotel-email-address").css({"color": "#404040"});
            setTimeout(function() {
                $("#email-tooltip-field-box").css({"background-color":bgColor});
                $("#hotel-email-address").text(labelText);
                $("#hotel-email-address").css({"color": labelTextColor});
            }, 700);
        }else{
            alert("out")
        }
    });

    $("#phone-button").hover(
        function() {
            $("#phone-tooltip").stop(true,true).delay(500).show(0);
        },
        function() {
            $("#phone-tooltip").stop(true,true).delay(500).hide(0);
        }
    );

    $("#phone-tooltip").hover(
        function() {
            $("#phone-tooltip").stop(true,true).delay(500).show(0);
        },
        function() {
            $("#phone-tooltip").stop(true,true).delay(300).hide(0);
        }
    );

    $("#login-button").click(
        function() {
            $("#login-button").addClass("push-shadows");
            setTimeout(
                function() {
                    $("#login-button").removeClass("push-shadows")
                }, 100
            ); 
            $("#overlay-cover-login").stop(true,true).show(200);
        }
    );

    $("#login-close-button-logo").click(
        function() {
            $("#overlay-cover-login").stop(true,true).hide(200);
        }
    );

    $("#login-overlay-button").click(
        function() {

            var regX_email = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            var email_address = $("#login-email").val(); 

            if(email_address==""){
                $("#login-unregistered-text").text("You need to introduce a email address");
            }else if(!regX_email.test(email_address)){
                $("#login-unregistered-text").text("The email address "+ email_address + " is not valid");
            }else{
                $("#login-unregistered-text").text("The email " + email_address + " is not in our database, please check that it is correct");
            }
                $("#login-overlay-button").addClass("push-shadows");
                setTimeout(
                    function() {
                        $("#login-overlay-button").removeClass("push-shadows")
                    }, 100)

            
            $("#login-unregistered-box").stop(true,true).show(200);
            $("#login-unregistered-box").css("display", "flex");
        }
    );

    $("#login-close-unregistered-logo").click(
        function() {
            $("#login-unregistered-box").stop(true,true).hide(200);
        }
    );

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            $("#navbar").css("background", "#2b2b2b")
            $("#language-button").css("color", "white")
            $("#language-flag").css("color", "white")
            $("#email-button").css("color", "white")
            $("#phone-button").css("color", "white")
            $(".header-links-text").css("color", "white")
            $(".header-homelink-text").css("color", "white")
            $("#login-button").css({"background":"white", "color":"#2b2b2b"})
        } else {
            $("#navbar").css("background", "none");
            $("#language-button").css("color", "#2b2b2b")
            $("#language-flag").css("color", "#2b2b2b")
            $("#email-button").css("color", "#2b2b2b")
            $("#phone-button").css("color", "#2b2b2b")
            $(".header-links-text").css("color", "#2b2b2b")
            $(".header-homelink-text").css("color", "#2b2b2b")
            $("#login-button").css({"background":"#2b2b2b", "color":"white"})
            
        }
    };

  });