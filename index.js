const btn = document.querySelector('#btncontact');
const element = document.querySelector('.panel').style;

const show = () => {
    if (element.display == "none") {
        element.display = "flex";
    } else {
        element.display = "none";
    }
}


btn.addEventListener('click', show);


