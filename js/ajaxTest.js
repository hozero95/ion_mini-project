window.onload = function () {
    loadBackground();
};

function loadBackground() {
    $.ajax({
        url: './background.json',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            drawImage(data.images);
        }
    });
};

function drawImage(images) {
    var image = images[Math.floor((Math.random() * 4))];
    $("#ajaxTest").css('background-image', 'url("' + image.url + '")');
};