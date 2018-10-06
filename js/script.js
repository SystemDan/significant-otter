$(document).ready(function () {
    var i = Math.floor(Math.random() * 10) + 1;
    path = '../img/' + i + '.jpg';
    $('#otter_img').attr('src', path);
    $('#upvote').attr('href', path);

    let names = [
        'Harry-Otter',
        'OttermanEmpire14',
        'xXx_OtterOfDarkness_xXx',
        '<3OtterlyAdorable<3',
        'otteryoutalkingabout',
        'otternal_lyfe420',
        'AceOtterney',
        'OtterworldlyHalfPrince',
        'GrandTh3ftOtter',
        'not_any_otter_guy'
    ];
    $('#otter_name').text(names[i - 1]);
    console.log('success');
});