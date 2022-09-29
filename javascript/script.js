var buttons = document.getElementsByClassName("button");
var activeSheet = document.getElementById("active-stylesheet");
var clearStorageButton = document.getElementById("clear-storage");

// Test to see if localStorage already has a value stored
if (localStorage.getItem("lastActiveSheet")) {
    activeSheet.setAttribute("href", localStorage.getItem("lastActiveSheet"));
}

// Assign the event lister to each button
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", switchStyle);
}

// Create a button to clear localStorage
clearStorageButton.addEventListener("click", clearStorage);

// Set the #active-stylesheet to be the light or dark stylesheet
function switchStyle() {
    var selectedSheet = this.getAttribute("data-stylesheet");
    activeSheet.setAttribute("href", selectedSheet);
    localStorage.setItem("lastActiveSheet", selectedSheet);
}

// Wrapper function to localStorage.clear
function clearStorage() {
    localStorage.clear();

    Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'O cache foi limpo!',
        text: 'Atualize a página.',
        showConfirmButton: false,
        timer: 1500
    });
}


$(document).ready(function () {
    $(function () {
        $('[name*=Telegram]').mask('(99) 99999-9999');

        $(".description").click(function () {
            $(".dropdowntoggle").toggleClass('rotate-180');
        });

        $('#myCopy').attr("placeholder", window.location);

        $("#VideoModal1").on('hidden.bs.modal', function (e) {
            $("#VideoModal1 iframe").attr("src", $("#VideoModal1 iframe").attr("src"));
        });

        $('[data-bs-toggle="tooltip"]').tooltip();
        $('button').hover(function () {
            setTimeout(function () {
            }, 1500);
        });
        $('[data-bs-toggle="tooltip"]').tooltip();
        
    })
});

jQuery(function ($) {

    // FUCKING AWESOME CODE

    window.da_share = {
        fb: function (url) {
            if (event) event.preventDefault();
            url = url || window.location.href;
            var link = 'https://www.facebook.com/share.php?u=';


            link += encodeURI(url);
            da_share.popup(encodeURI(link));
        },
        tg: function (url, title, description, image) {
            if (event) event.preventDefault();
            url = url || window.location.href;
            var link = 'https://telegram.me/share/url?url=' + encodeURI(url);
            if (title) link += '&title=' + title;
            if (description) link += '&description=' + description;
            if (image) link += '&image=' + image;
            da_share.popup(encodeURI(link));
        },
        tw: function (url, text, hashtags, via) {
            if (event) event.preventDefault();
            url = url || window.location.href;
            var link = 'https://twitter.com/intent/tweet?url=';
            link += encodeURI(url);
            if (text) link += '&text=' + text;
            if (hashtags) link += '&hashtags=' + hashtags;
            if (via) link += '&via=' + via;
            da_share.popup(encodeURI(link));
        },
        wp: function (url, title, image) {
            if (event) event.preventDefault();
            url = url || window.location.href;
            var link = 'https://api.whatsapp.com/send?text=' + encodeURI(url);
            if (title) link += '&title=' + title;
            if (image) link += '&imageUrl=' + image;
            da_share.popup(encodeURI(link));
        },
        gp: function (url) {
            if (event) event.preventDefault();
            url = url || window.location.href;
            var link = 'https://plus.google.com/share?url=' + encodeURI(url);
            da_share.popup(encodeURI(link));
        },
        pi: function (url, description, image) {
            if (event) event.preventDefault();
            url = url || window.location.href;
            var link = 'https://www.pinterest.com/pin/create/button/?url=' + encodeURI(url);
            if (description) link += '&description=' + description;
            if (image) link += '&media=' + image;
            da_share.popup(encodeURI(link));
        },
        popup: function (link) {
            //console.log({'link': link});
            window.open(link, '_blank', 'toolbar=0,status=0,width=1350,height=720');
        }
    };

});



function copyLink() {
    /* Get the text field */
    var copyText = document.getElementById("myCopy");
    document.getElementById('myCopy').value = window.location;

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    /* Alert the copied text */
    Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Sucesso!',
        text: 'Copiado para área de transferência.',
        showConfirmButton: false,
        timer: 1500
    });
}


// Loading FAVICON...
$(window).on('load', function () {
    $('#load').hide();
});


// AUTO OPEN  MODAL
//$(window).on('load', function() {
$(document).ready(function () {
    if (window.location.hash && ~modals.indexOf(window.location.hash)) {
        $(window.location.hash).modal();
    }
    $(".modal:not(.noclose)").on("click", "a", function () {
        $(this).closest(".modal").modal("hide");
    });

    var currentTimestamp = Date.now();

    $("#VideoModal1").on("hidden.bs.modal", function () {
        localStorage.setItem("last-showed-at", currentTimestamp);
    });

    // Check for modal eligibility
    var showAgainInMs = new Date();

    var lastTimestamp = Number(localStorage.getItem("last-showed-at"));

    if ((currentTimestamp - lastTimestamp) >= showAgainInMs) {
        setTimeout(function () {
            localStorage.setItem("last-showed-at", currentTimestamp);
            $("#VideoModal1").modal("show");
        }, 3000);
    }

});
