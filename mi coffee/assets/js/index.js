

// navbar link active
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
    document.getElementById('side-nav').style.display = 'flex';
   
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
    var a = 0;
    function myFunction(){
        document.getElementById('image').src = image[a];
        if(a < image.length-1){
            a++;
        }

        else{
            a = 0;
        }
        setTimeout("myFunction()", 3000);

    }

window.onload = myFunction();


// Mouse over option on review

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


// Team 


var expl, num,dutie, prevBtn,nextBtn, i=0;
        expl = document.getElementById('expl');
        dutie = document.getElementById('duties');
        num = document.getElementById('number');
        prevBtn = document.getElementById('prev');
        nextBtn = document.getElementById('next');

        const numbers = [
          "assets/images/team.jpg",
          "assets/images/team2.jpg",
          "assets/images/team3.jpg",
          "assets/images/team4.jpg",
          "assets/images/team5.jpg"
        ];
        const txt = ['Full STACK','KAP TV','Alain Prince','Bebeto BYIRINGIRO','Justine MUSANABERA'];
        const duties = ['Owner of MI Coffee [CEO]','Company IT','Manager of MI coffee','MI coffee Supervisor','Mi coffee Partner']
        num.src = numbers[2];
        expl.innerHTML = txt[2];
        dutie.innerHTML = duties[2]
        nextBtn.onclick = function(){next()};
        function next(){
            if(i < numbers.length-1){
                i++;
                num.src = numbers[i];
                expl.innerHTML = txt[i];
                dutie.innerHTML = duties[i];
            }
            else{
                i = -1;
            }

        }

        prevBtn.onclick = function(){previous()};
        function previous(){
            if(i > 0){
                i--;
                num.src = numbers[i];
                expl.innerHTML = txt[i];
                dutie.innerHTML = duties[i];
            }
            else{
                i = 3;
            }

        }   

/* Trying confirm


if (confirm('Click a button')) {
    console.log('Ok clicked');
}else{
    console.log('Disagree');
}

*/
