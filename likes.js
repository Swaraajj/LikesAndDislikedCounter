function main() {
    let likesBtn = document.querySelector('#likes-btn');
    let likesDisplay = document.querySelector('#likes-display');
    let dislikesBtn = document.querySelector('#dislikes-btn');
    let dislikesDisplay = document.querySelector('#dislikes-display');
    let totalDisplay = document.querySelector('#total-display');
    let resetBtn = document.querySelector('#reset-btn');

    let likes = localStorage.getItem('likes') ? localStorage.getItem('likes') : 0;
    likesDisplay.textContent = likes;

    let dislikes = localStorage.getItem('dislikes') ? localStorage.getItem('dislikes') : 0;
    dislikesDisplay.textContent = dislikes;

    let total = localStorage.getItem('total') ? localStorage.getItem('total') : 0;
    totalDisplay.textContent = total;

    likesBtn.addEventListener('click', () => {
        likes++;
        localStorage.setItem('likes', likes);
        likesDisplay.textContent = localStorage.getItem('likes');
        total++;
        localStorage.setItem('total', total)
        totalDisplay.textContent = localStorage.getItem('total');
    });

    dislikesBtn.addEventListener('click', function () {
        dislikes++;
        localStorage.setItem('dislikes', dislikes);
        dislikesDisplay.textContent = localStorage.getItem('dislikes');
        total++;
        localStorage.setItem('total', total)
        totalDisplay.textContent = localStorage.getItem('total');
    });
    resetBtn.addEventListener('click', function () {
        localStorage.clear();
        location.reload();
    });
}
main();