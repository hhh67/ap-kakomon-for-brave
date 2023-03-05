window.addEventListener('load', () => {
    const ansbgList = document.getElementsByClassName('ansbg');
    Array.prototype.forEach.call(ansbgList, (ansbg) => {
        ansbg.style = '';
    })
})