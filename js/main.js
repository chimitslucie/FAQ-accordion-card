let links = document.querySelectorAll(".card__question-title");

links.forEach(function (link) {
    link.addEventListener("click", (e) => {
        let question = link.parentNode.parentNode;

        if (question.classList.contains('active')) {
            question.classList.remove('active');
        } else {
            question.classList.add('active');
        }
    });
});
