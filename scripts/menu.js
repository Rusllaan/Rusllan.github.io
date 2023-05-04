let xmlhttp = new XMLHttpRequest;
xmlhttp.open("GET", "storemenu.xml", false);
xmlhttp.send();
let xmlDoc = xmlhttp.responseXML;
let len = xmlDoc.getElementsByTagName('item').length;

for (let i = 0; i < len; i++) {
    let item = xmlDoc.getElementsByTagName('item')[i].childNodes;
    let div = document.createElement('div');
    let img = document.createElement('img');
    img.src = item[1].innerHTML;
    let model = document.createElement('p');
    model.innerHTML = item[3].innerHTML;
    let price = document.createElement('p');
    price.innerHTML = item[5].innerHTML;

    var button = document.createElement('button');
    button.textContent = 'Заказать';
    button.onclick = function remember() {
        alert("Заказ сделан");
    }
    div.appendChild(img);
    div.appendChild(model);
    div.appendChild(price);
    div.appendChild(button);

    model.className = 'model';
    price.className = 'price'
    div.className = 'item';

    let catalog_items = document.body.getElementsByClassName('items')[0];
    catalog_items.append(div);
}

const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
        this.el.classList.remove('btn-up_hide');
    },
    hide() {
        this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            scrollY > 400 ? this.show() : this.hide();
        });
        document.querySelector('.btn-up').onclick = () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
}

btnUp.addEventListener();

btnUp.addEventListener();
btnUp.addEventListener();
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }