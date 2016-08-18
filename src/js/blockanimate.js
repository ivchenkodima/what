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

setTimeout(timeout, 500);

function timeout () {
    $(document).ready(function () {
        $(window).bind('hashchange', function() {
            console.log("!");
            setTimeout(function () {
                var page = $('.main').attr('id');
                $("img").addClass("animate-static");
                $(".link").addClass("animate-static");

                for (var item = 0; item < pages[page].length; item++) {
                    console.log(pages[page][item]);
                    (function (index) {
                        setTimeout(function () {
                            $("#" + pages[page][index]).addClass('animate-text');
                        }, index * 1000);
                    })(item);
                }
            }, 0);
        });
        // if("addEventListener" in window) {
        //     window.addEventListener("hashchange", myHashchangeHandler, false);
        //     console.log("1");
        // } else if ("attachEvent" in window) {
        //     window.attachEvent( "onhashchange", myHashchangeHandler);
        //     console.log("2");
        // }

    });
}
