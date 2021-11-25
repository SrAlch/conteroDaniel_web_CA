$(document).ready(function(){

    $("#adult-minus-button").click(function() {
        var current_number = parseInt($("#adult-count-number").text());
        var children_count = parseInt($("#children-count-number").text());
        if(current_number > 0 && children_count==0) {
            $("#adult-count-number").text(current_number-1);
        } else if(children_count>0 && current_number>1){
            $("#adult-count-number").text(current_number-1);
        };
        $("#adult-count-minus-button").addClass("push-shadows");
                setTimeout(
                    function() {
                        $("#adult-count-minus-button").removeClass("push-shadows")
                    }, 100)
    });
    
    $("#adult-plus-button").click(function() {
        var current_number = parseInt($("#adult-count-number").text());
        $("#adult-count-number").text(current_number+1);
        $("#adult-count-plus-button").addClass("push-shadows");
                setTimeout(
                    function() {
                        $("#adult-count-plus-button").removeClass("push-shadows")
                    }, 100)
    }); 

    $("#children-minus-button").click(function() {
        var current_number = parseInt($("#children-count-number").text());
        if(current_number > 0) {
            $("#children-count-number").text(current_number-1);
        };
        $("#children-count-minus-button").addClass("push-shadows");
                setTimeout(
                    function() {
                        $("#children-count-minus-button").removeClass("push-shadows")
                    }, 100)
    }); 

    $("#children-plus-button").click(function() {
        var current_number = parseInt($("#children-count-number").text());
        var adult_count = parseInt($("#adult-count-number").text());
        if(adult_count >= 1){
            $("#children-count-number").text(current_number+1);
        }
        $("#children-count-plus-button").addClass("push-shadows");
                setTimeout(
                    function() {
                        $("#children-count-plus-button").removeClass("push-shadows")
                    }, 100)
    });

    function minDateToday (){
        var d = new Date();

        var month = d.getMonth()+1;
        var day = d.getDate();

        var full_date = d.getFullYear() + '-' + (month<10 ? '0' : '') + month + '-' + (day<10 ? '0' : '') + day;

        $("#date-of-arrival").attr("min", full_date);
        $("#date-of-departure").attr("min", full_date);

    };
    minDateToday();

    $("#date-of-departure").click(
        function() {
            var new_min_date = $('#date-of-arrival').val();
            if (new_min_date != "") {
                $("#date-of-departure").attr("min", new_min_date);
            }
    });

    $("#date-of-arrival").click(
        function() {
            var new_max_date = $('#date-of-departure').val();
            if (new_max_date != "") {
                $("#date-of-arrival").attr("max", new_max_date);
            }   
    });
    
    $("#button-search").click(
        function() {
            $("#button-search").addClass("push-shadows");
            setTimeout(
                    function() {
                        $("#button-search").removeClass("push-shadows")
                    }, 100);

            let arrival = $("#date-of-arrival").val();
            let departure = $("#date-of-departure").val();
            let count_adult= $().val;
            let count_child= $().val;
            let new_url = "/content/roomSearch.html";
            new_url += "?arrival=" + arrival;
            new_url += "&departure=" + departure;
            new_url += "&adult=" + count_adult;
            new_url += "&child=" + count_child;
            window.location.href = new_url;
        });
});