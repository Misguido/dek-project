$(document).ready(function() {

    var toggleState = localStorage.getItem("toggleState");
    

    if (toggleState === "d") {
        $("body").addClass("dark-mode");
    }

    if (toggleState === "l") {
        $("body").addClass("light-mode");
    }

    $("#light-mode").click(function() {
        $("body").removeClass("dark-mode").toggleClass("light-mode");
        localStorage.setItem("toggleState", "l");
    });

    $("#grey-mode").click(function() {
        $("body").removeClass("light-mode dark-mode");
        localStorage.setItem("toggleState", "g");
    });

    $("#night-mode").click(function() {
        $("body").removeClass("light-mode").toggleClass("dark-mode");
        localStorage.setItem("toggleState", "d");
    });

    //highlight tab specific to page
    function highlightActiveLink() {
        var currentPageUrl = window.location.href;
    
        //remove all on new
        $('.links a').removeClass('active');
        //iterate over each <a>
        $('.links a').each(function() {
            var linkUrl = $(this).attr('href');
            
            var normalizedLinkUrl = new URL(linkUrl, window.location.origin).href;
    
            if (normalizedLinkUrl === currentPageUrl) {
                $(this).addClass('active');

                //exit after matching
                return false;
            }
        });
    }

    if (window.location.pathname === "/forms.html" || window.location.pathname === "/apartment.html") {
        document.body.addEventListener("click", (ev) => {
            const expandableTitle = !!ev.target.closest(".expand-title");
            const expand = ev.target.closest(".expand-bar");
    
            if (!expandableTitle) {
                return;
            }
    
            expand.classList.toggle("expand-bar-open");
        });
    }

   


    highlightActiveLink();
});