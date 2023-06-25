
const remover = () => {
    document.getElementById('about').classList.remove('active');
    document.getElementById('order').classList.remove('active');
    document.getElementById('product').classList.remove('active');
    document.getElementById('review').classList.remove('active');
    document.getElementById('homepage').classList.remove('active');

}

function home(){
    remover();
    document.getElementById('homepage').classList.add('active');
}
function about(){
    remover();
    document.getElementById('about').classList.add('active');
}
function order(){
    remover();
    document.getElementById('order').classList.add('active');
}
function product(){
    remover();
    document.getElementById('product').classList.add('active');
}
function review(){
    remover();
    document.getElementById('review').classList.add('active');
}

// Any changes on scroll


// Navbar open

function openNavbar(){
    // document.getElementById('close').style.display = 'flex';
    document.getElementById('navbar').style.display = 'block';
    document.getElementById('open').style.display = 'none';
}



function closeNavbar(){
    document.getElementById('navbar').style.display = 'none';
}



// slideshow images


    var image = [   
        'assets/images/back9.webp',
        'assets/images/back14.webp',
        'assets/images/back2.webp',
        'assets/images/back3.webp',
        'assets/images/back4.webp',
        'assets/images/back5.webp',
        'assets/images/back6.webp',
        'assets/images/back7.webp',
        'assets/images/back8.webp',
        'assets/images/back10.webp',
        'assets/images/back11.webp',
        'assets/images/back12.webp',
        "assets/images/back13.webp"
    ];
    var i = 0;
    function myFunction(){
        document.getElementById('image').src = image[i];
        if(i < image.length-1){
            i++;
        }

        else{
            i = 0;
        }
        setTimeout("myFunction()", 3000);

    }

window.onload = myFunction();


// Mouse over option on review

document.getElementById('reviews').addEventListener('click') = function(){
    document.getElementById('review-drop').style.display = 'block';
}

function mauseEnter(){
    document.getElementById('review-drop').style.display = 'flex';
}

function mouseLeave(){
    document.getElementById('review-drop').style.display = 'none';
}

function searchbox(){
    document.getElementById('search-box').style.display = 'block';
}

window.scrollTop = function() {
    document.getElementById('search-box').style.display = 'none';
}


/* Trying confirm


if (confirm('Click a button')) {
    console.log('Ok clicked');
}else{
    console.log('Disagree');
}

*/
