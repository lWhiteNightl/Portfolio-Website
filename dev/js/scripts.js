import {Fancybox} from '@fancyapps/ui';
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

Fancybox.bind("[data-fancybox]", {
});

let greenBar = document.querySelector('#green-bar');
let closeBarBtn = document.querySelector('#close-bar-btn');

closeBarBtn.addEventListener('click', hideGreenBar);

function hideGreenBar() {
    greenBar.style.display = 'none';
    localStorage.setItem('greenBarClosed', 'true');
}