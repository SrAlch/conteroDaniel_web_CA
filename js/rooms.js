$(document).ready(function(){

    var SLIDE_POSITION = 0

    function showRoomPhoto(room_name, increment){
        let selection = $("#"+ room_name).find(".slide-container");
        let size = selection.length;
        let growth = SLIDE_POSITION + increment;
        
        if (growth>size-1){
            growth = 0
        } else if (growth<0) {
            growth = size-1
        } else{
            growth = SLIDE_POSITION + increment
        }

        let image_hide = selection.eq(SLIDE_POSITION);
        image_hide.css("display", "none")
        
        SLIDE_POSITION = growth

        let image_show = selection.eq(SLIDE_POSITION);
        image_show.css("display", "table-row")
    };


    function getAllIds() {
        let n = 0;
        let array_length = $(".room-container-size").length;
        var id_array = [];
        while (n<array_length) {
            let id = $(".room-container-size").eq(n).attr("id");
            n++
            id_array.push(id)
        };
        return id_array;
    };
    

    function carrouselSetUp() {
        id_array = getAllIds();
        id_array.forEach(id => {
            showRoomPhoto(id, 0);

            $("#" + id  + " .prev").click(function() {
                showRoomPhoto(id, -1);
            });

            $("#" + id  + " .next").click(function() {
                showRoomPhoto(id, 1);
            });
        });
    };

    carrouselSetUp();

});


