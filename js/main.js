/*global console*/
$(document).ready(function () {

    "use strict";

    var main_overlay = $('#overlay-effect');

    var span_in_ovelray = main_overlay.find('span');

    var header_all_content = $('header .header_all_content');

    var menu_overlay = $('header .menu_section_links');

    var btn = $('#round_btn');

    var arrow = $('.arrow');

    var spanArrow = arrow.children('span');

    var close = $('.close');

    var menu_section_links = $('header .menu_overlay .menu_section_links');

    var main_menu_links = $('li.list_menu');

    var sectionList = $('.menu_section_links');

    var sectionlist_li = $('.menu_section_links ul li');

    var sections = $('section');

    var progressbar = $('.progressbar');

    var hexagon_fromLeft = $('.hexagon');

    var info_block_fromRight = $('.about_info .info_block');

    var testimonial_slider = $('#testimonial_slider');

    var service_Box_opcity = $('.service_Box');

    var animate_row = $('.animate_row');

    var info_img = $('.progress_skills .info_img');

    var all_cards = $('.all_sections .Blog .single_section .single_post');

    var ul_li_filters = $('.filters ul li');

    var filters_fromLeft = $('section.Portfolio .filters');

    var filters_content_fromRight = $('.Portfolio .filters_content');

    var form_from_left = $('.contact_section form');

    var contact_info_fromBottom = $('.contact_section .contact_info');

    var inptt = $('input,textarea');

    var i;

    /*-------------------------------------------------------------------------------------------------
                                     -------- SEPERATE --------
    -------------------------------------------------------------------------------------------------*/

    setTimeout(function () {

        var typed = new Typed('.type', {
            strings: [

                "Developer",
                "Designer",
                "Freelancer"
            ],
            typeSpeed: 70,
            backSpeed: 70,
            cursorChar: '',
            loop: true
        });

    }, 2550);

    /*----------------------------------------------------*/

    //    $("header .all_sections").css({
    //
    //        minHeight: $(window).innerHeight() + 'px'
    //
    //    });

    $('header .all_sections').scroll(function () {

        var orig = $('#testimonial_slider').offset().top;

        var scrollTop = $('header .all_sections').scrollTop();

        AOS.init({

            // Global settings:
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced) 

            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            once: false, // whether animation should happen only once - while scrolling down

            mirror: true, // whether elements should animate out while scrolling past them

        });

    });

    /*-------------------------------------------------------------------------------------------------
                                     -------- SEPERATE --------
    -------------------------------------------------------------------------------------------------*/

    //resume progress bar 
    function resume_progress() {
        $(".progress").each(function () {

            var progress_bar = $(this).find(".progress_bar");

            var progress_value = progress_bar.find(".progress_value");

            var progressPercent = parseInt(progress_bar.attr("data-progress"));

            //if ($(window).scrollTop() > $(this).offset().top - 400) {


            progress_bar.css("width", progressPercent + "%");

            progress_value.text(progressPercent + "%");

            //}

        });

    }

    resume_progress();

    /***********************************************************/
    /*----------- when we click on hamburger icon do the following -------------*/
    arrow.on('click', function () {

        //change the hamburger icon
        $(this).toggleClass('rtat');

        //show hide the scale of the big img when click on hamburger icon
        header_all_content.toggleClass('scal_content');

        menu_overlay.toggleClass('changeZindex');

        spanArrow.toggleClass('active');

        //show hide the main menu li when click on hamburger icon
        menu_section_links.toggleClass('showLinks');

        //make the li sliddown or slidup when click on hamburger icon
        sectionlist_li.toggleClass('xc');

    }); //end arrow

    //put span that contain x to close the section in  dome ,for every section to close it
    function addCloseBtn() {

        for (i = 0; i < sections.length; i++) {

            var span = document.createElement('span');

            var spanContent = document.createTextNode('✕');

            span.appendChild(spanContent);

            span.setAttribute('class', 'backToTop');

            sections[i].appendChild(span);

        }

    }

    //run the function
    addCloseBtn();

    var spanInDom = $('.backToTop');

    //after we create the close x in section , make the section close and back the main page
    spanInDom.each(function () {

        $(this).on('click', function () {

            $(this).parent().delay(500).fadeOut(10);

            main_overlay.addClass("animate-up");

            span_in_ovelray.text('Top');

            setTimeout(function () {

                main_overlay.removeClass("animate-up");

                $('header .all_sections').removeClass('put_zindex');

            }, 1100);

            btn.delay(760).fadeIn(100);

        });

    }); //end spanInDom

    /*-------------------------------------------------------------------------------------------------
                                     -------- SEPERATE --------
    -------------------------------------------------------------------------------------------------*/

    main_menu_links.on('click', function (event) {

        event.preventDefault();

        console.log($(event.target).data('scroll'));

        $('header .all_sections').addClass('put_zindex');

        header_all_content.removeClass('scal_content');

        menu_overlay.removeClass('changeZindex');

        btn.fadeOut(1);

        arrow.removeClass('rtat');

        spanArrow.removeClass('active');

        menu_section_links.removeClass('showLinks');

        sectionlist_li.removeClass('xc');

        main_overlay.addClass("animate-down");

        //the text inside the overlay
        span_in_ovelray.text($(event.target).data('scroll'));

        var scrollSection = $(this).attr('data-scroll');

        //hide the section by default
        $('header .menu_section_links > section').hide();

        $("." + scrollSection).delay(300).fadeIn(100);

        //delay to remove the animate-down class  1100 milscond ,in order to run it again when click on li 
        setTimeout(function () {

            main_overlay.removeClass("animate-down");

        }, 1100);

    }); //end main_menu_links on click 

    /*-------------------------------------------------------------------------------------------------
                                     -------- SEPERATE --------
    -------------------------------------------------------------------------------------------------*/

    //make the hover on every card in blog section
    all_cards.hover(function () {

        $(this).parent().siblings().find('.single_post').addClass('fad');

    }, function () {

        $(this).parent().siblings().find('.single_post').removeClass('fad');

    });

    /*-------------------------------------------------------------------------------------------------
                                     -------- SEPERATE --------
    -------------------------------------------------------------------------------------------------*/

    $('.info_section .owl-carousel').owlCarousel({
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [1000, 1],
        itemsTablet: [767, 1],
        navigation: true,
        autoHeight: true,
        navigationText: ["", ""]
    });

    /*-------------------------------------------------------------------------------------------------
                                     -------- SEPERATE --------
    -------------------------------------------------------------------------------------------------*/

    // run owl tesitmonial slider
    $("#testimonial_slider").owlCarousel({
        items: 2,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [1000, 2],
        itemsTablet: [767, 1],
        pagination: false,
        navigation: true,
        navigationText: ["", ""],
        autoPlay: false
    });

    /*-------------------------------------------------------------------------------------------------
                                         -------- SEPERATE --------
    -------------------------------------------------------------------------------------------------*/


}); //end document 

/*-------------------------------------------------------------------------------------------------
                                         -------- SEPERATE --------
    -------------------------------------------------------------------------------------------------*/

//run the loader in firefox 
$(window).on("load", function () {

    $(".loader_parent").fadeOut(1000);

});