$(document).ready(function(){

    var SLIDE_POSITION = 0

    function showRoomPhoto(class_name, room_name, increment){
        let selection = $(class_name + "#"+ room_name).find(".slide-container");
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

    function getAllIds(class_name) {
        let n = 0;
        let array_length = $(class_name).length;
        var id_array = [];
        while (n<array_length) {
            let id = $(class_name).eq(n).attr("id");
            n++
            id_array.push(id)
        };
        return id_array;
    };
    
    function carrouselSetUp(class_name) {
        id_array = getAllIds(class_name);
        id_array.forEach(id => {
            showRoomPhoto(class_name, id, 0);

            $("#" + id  + " .prev").click(function() {
                showRoomPhoto(class_name, id, -1);
            });

            $("#" + id  + " .next").click(function() {
                showRoomPhoto(class_name, id, 1);
            });
        });
    };


    function getClassBySize() {
        let class_name = ""
        if (window.matchMedia('(min-aspect-ratio: 1/1)').matches) {
            class_name = ".room-container-size";
        } else {
            class_name = ".room-container-size-mobile";
        }
        console.log(class_name)
        carrouselSetUp(class_name);
    };

    getClassBySize();

    $(window).resize(function() {
        getClassBySize();
    });

});


