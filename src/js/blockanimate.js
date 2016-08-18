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

        $("img").addClass("animate-static");
        $(".link").addClass("animate-static");
        for (var item = 0; item < pages.first.length; item++) {
            (function (index) {
                setTimeout(function () {
                    $("#" + pages.first[index]).addClass('animate-text');
                }, index * 1000);
            })(item);
        }
        $(window).bind('hashchange', function() {
            console.log("change");
            setTimeout(function () {
                var page = $('.main').attr('id');
                console.log(page);
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
        $(window).trigger("hashchange");

        $('.transferLink').click(function(e) {
            console.log('click');
            setTimeout(function () {
                var pageClick = $('.main').attr('id');
                console.log(pageClick);
                $("img").addClass("animate-static");
                $(".link").addClass("animate-static");

                for (var item = 0; item < pages[pageClick].length; item++) {
                    console.log(pages[pageClick][item]);
                    (function (index) {
                        setTimeout(function () {
                            $("#" + pages[pageClick][index]).addClass('animate-text');
                        }, index * 1000);
                    })(item);
                }
            }, 10);
        });
    });
}
