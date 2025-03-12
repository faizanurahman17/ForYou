function randomChange(body,next) {
    setInterval(() => {
        const random = '#' + Math.floor(Math.random() * 16777215).toString(16);
        let myColor = random;

        next.style.transition = "all 1s linear";
        next.style.background = myColor + 40;
        body.style.transition = "all 1s linear";
        body.style.background = myColor + 20;
    }, 1000);
}

function openBook(btn,main) {
    btn.classList.remove('btn');
    btn.classList.add('closed-wrapper');
    main.classList.remove('closed-wrapper');
    main.classList.add('open-wrapper');
}

function nextContent(next,name,love) {
    love.classList.remove('theLove');
    love.classList.add('love');
    next.classList.remove('next');
    next.classList.add('closed-wrapper');
    name.textContent = 'Of Love';
    name.style.transition = 'all 1s linear';
    // love.scrollTo({ top: 0, behavior: 'smooth' });
}

export { randomChange,openBook,nextContent };
