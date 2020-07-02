$(document).ready(function () {

    const $bg = document.querySelector(".hero-background");
    const mouseScale = 0.55;
    $bg.addEventListener("mousemove", e => {
        const x = e.offsetX / $bg.clientWidth * 100 - 50;
        const y = e.offsetY / $bg.clientHeight * 100 - 50;
        $bg.style.setProperty("--mouseX", `${(x * mouseScale).toFixed(3)}%`);
        $bg.style.setProperty("--mouseY", `${(y * mouseScale).toFixed(3)}%`);
    });

    var myVideo = document.getElementById("video1");

    function playPause() {
        if (myVideo.paused)
            myVideo.play();
        else
            myVideo.pause();
    }

    function makeBig() {
        myVideo.width = 560;
    }

    function makeSmall() {
        myVideo.width = 320;
    }

    function makeNormal() {
        myVideo.width = 420;
    }

    //Mouse click scroll
    $(document).ready(function () {
        $(".mouse").click(function () {
            $('html, body').animate({scrollTop: '+=750px'}, 1200);
        });
    });

    //Features appearance
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        //>=, not <=
        if (scroll >= 500) {
            $(".feature-icon").addClass("feature-display");
            $(".feature-head-text").addClass("feature-display");
            $(".feature-subtext").addClass("feature-display");
        }
    });

    //Subscribe to newsletter
    $('#email-form').on('submit', function (e) {
        e.preventDefault();


        $('#newsletter-spinner').css("display", "inline-block");

        var data = {
            email: $('#newsletter-email-input').val()
        }

        $.ajax({
            url: "/mailchimp.php",
            type: 'POST',
            data: data,
            success: function (data) {

                console.log(data);
                $('#newsletter-spinner').css("display", "none");
                $('#newsletter-loading-div').html("Success! Cool things are on their way")
                $('#newsletter-email-input').val("")

                window.location.href = '/nova.zip';
            },
            error: function (error) {
                console.log(error);
                $('#newsletter-spinner').fadeOut()
            }
        });
    })


//smooth scrolling

    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });


})
