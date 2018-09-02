$(document).ready(function () {
  var trigger = $('.hamburger'),
    overlay = $('.overlay'),
    isClosed = false,
    nav1 = $('#nav-1'),
    nav2 = $('#nav-2'),
    nav3 = $('#nav-3'),
    nav4 = $('#nav-4'),
    content1 = $('#content-1'),
    content2 = $('#content-2'),
    content3 = $('#content-3'),
    content4 = $('#content-4'),
    welcome = $('.welcome');

  let current = welcome;
  //handle toggle content;
  nav1.click(() => {
    let PaintsCount;
    current.hide();
    content1.show();
    current = content1;

    App.contractInstance.totalSupply().then(data => {
      PaintsCount = data.toNumber()

      $.getJSON('paints.json', (data) => {
        $('.paints').html('');
        for (let i = 0; i <= PaintsCount; i++) {
          let paint = data[i];
          let li = document.createElement('li');
          let location = document.createElement('h2');
          let type = document.createElement('h4');
          let area = document.createElement('h4');
          let price = document.createElement('h5');
          location.innerText = paint.id;
          type.innerText = paint.type;
          area.innerText = paint.area + " yard";
          price.innerText = paint.price + " $";
          li.appendChild(location);
          li.appendChild(type);
          li.appendChild(area);
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