// Smooth Reveal Animation

const cards = document.querySelectorAll('.card');

function reveal() {

    cards.forEach(card => {

        const top = card.getBoundingClientRect().top;

        const visible = window.innerHeight - 100;

        if(top < visible){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }

    });
}

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all .8s ease";
});

window.addEventListener("scroll", reveal);

reveal();