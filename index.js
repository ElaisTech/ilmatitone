const btn = document.querySelector('#btncontact');
const element = document.querySelector('.panel');
const style = element.style.display;

const show = () => {
    if (style == "none") {
        style = "flex";
    } else {
        style = "none";
    }
}

btn.addEventListener('click', show);


