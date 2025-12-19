fetch('navbar.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
        
        // Initialize navbar functionality after loading
        initializeNavbar();
    });

fetch('footer.html')
    .then(res => res.text())
    .then(data => document.getElementById('footer').innerHTML = data);

// Function to initialize navbar functionality
function initializeNavbar() {
    // Wait for jQuery to be ready
    if (typeof $ !== 'undefined') {
        // Side toggle functionality
        $(".side-toggle").on("click", function () {
            $(".side-info").addClass("info-open");
            $(".offcanvas-overlay").addClass("overlay-open");
        });

        // Close button functionality
        $("#side-info-close, .offcanvas-overlay").on("click", function () {
            $(".side-info").removeClass("info-open");
            $(".offcanvas-overlay").removeClass("overlay-open");
        });

        // Close on scroll
        $(window).scroll(function () {
            if ($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
                $(".side-info").removeClass("info-open");
                $(".offcanvas-overlay").removeClass("overlay-open");
            }
        });

        // Initialize meanmenu for mobile navigation
        $('.main-menu').meanmenu({
            meanScreenWidth: "1199",
            meanMenuContainer: '.mobile-menu',
            meanMenuCloseSize: '28px',
        });
        
        console.log('Navbar initialized successfully');
    } else {
        // Fallback: try again after a short delay
        setTimeout(initializeNavbar, 100);
    }
}