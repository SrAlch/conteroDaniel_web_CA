$(document).ready(function(){

    function showOverlay() {
        let array_length = $(".service-container").length;

        for (let n=0; n<array_length; n++){
            $(".service-container").eq(n).hover(function() {
                $(".services-text-overlay").eq(n).css("display", "flex");
            },
            function(){
                $(".services-text-overlay").eq(n).css("display", "none")
            });
        };
        
    };

    showOverlay();

});