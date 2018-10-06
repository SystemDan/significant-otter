$(document).ready(function () {
    var i = Math.floor(Math.random() * 10) + 1;
    path = '../img/' + i + '.jpg';
    $('#otter_img').attr('src', path);
});