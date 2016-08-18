var $ = jQuery;
var pages = {
    first:[
        "what-1",
        "what-2",
        "what-3"
    ],
    second:[
        "what-4",
        "what-5",
        "what-6"
    ],
    error: [
        "error-1",
        "error-2"
    ],
    who:[
        "who-1",
        "who-2",
        "who-3"
    ]
};
$(document).ready(function () {
     if ($(" #first").length) {
        console.log("1");
         for (var i = 0; pages.first.length; i++) {
             $("#" + pages.first.length[i]).addClass(".animate");

             // setTimeout(500);
         }
     }

    // } else if ($(".main #second").length) {
    //     console.log("2");
    //     for (var i= 0 ; pages.second.length; i++ ){
    //         $("#" + pages.second.length[i]).addClass(".animate");
    //         setTimeout(500);
    //     }
    // } else if ($(".main #error").length) {
    //     console.log("3");
    //     for (var i = 0 ; pages.error.length; i++ ){
    //         $("#" + pages.error.length[i]).addClass(".animate");
    //         setTimeout(500);
    //     }
    // } else if ($(".main #who").length) {
    //     console.log("4");
    //     for (var i = 0 ; pages.who.length; i++){
    //         $("#" + pages.who.length[i]).addClass(".animate");
    //         setTimeout(500);
    //     }
    // } else return;
});
