$(document).ready(function () {
    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
        isClosed = false,
        nav1 = $('#nav-1'),
        nav2 = $('#nav-2'),
        nav3 = $('#nav-3'),
        nav4 = $('#nav-4'),
        nav5 = $('#nav-5'),
        content1 = $('#content-1'),
        content2 = $('#content-2'),
        content3 = $('#content-3'),
        content4 = $('#content-4'),
        content5 = $('#content-5'),
        welcome = $('.welcome');

    let current = welcome;
    //handle toggle content;
    nav1.click(() => {
        let PaintsCount;
        current.hide();
        content1.show();
        current = content1;

        App.contractInstance.totalSupply().then(data => {
            PaintsCount = data.toNumber();
            $.getJSON('paints.json', (data) => {
                $('.paints').html('');
                for (let i = 0; i < PaintsCount; i++) {
                    let paint = data[i];
                    // html elemnts
                    let li = document.createElement('li');
                    let name = document.createElement('h2');
                    let type = document.createElement('h4');
                    let painter = document.createElement('h4');
                    let art = document.createElement('img');
                    let price = document.createElement('h5');

                    // data
                    name.innerText = paint.name;
                    type.innerText = paint.type;
                    painter.innerText = paint.painter;
                    art.src = "img/" + paint.id + ".jpg";
                    price.innerText = paint.price + "Millon Dollars";

                    // append
                    li.appendChild(name);
                    li.appendChild(type);
                    li.appendChild(painter);
                    li.appendChild(art);
                    li.appendChild(price);
                    li.classList.add('card');
                    $('.paints').append(li);
                }
            })
        });
    });

    nav2.click(() => {
        current.hide();
        content2.show();
        current = content2;

    });

    nav3.click(() => {
        current.hide();
        content3.show();
        current = content3;
    });

    nav4.click(() => {
        current.hide();
        content4.show();
        current = content4;

    });

    nav5.click(() => {
        current.hide();
        content5.show();
        current = content5;

    });

    trigger.click(function () {
        hamburger_cross();
    });

    function hamburger_cross() {

        if (isClosed == true) {
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        } else {
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
    }

    $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
    });
});