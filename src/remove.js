const selectBtnList = document.getElementsByClassName('selectBtn');
const ansbgList = document.getElementsByClassName('ansbg');
const p = document.querySelector('#kaisetsu > p')
Array.prototype.forEach.call(selectBtnList, (selectBtn) => {
    selectBtn.addEventListener('click', () => {
        Array.prototype.forEach.call(ansbgList, (ansbg) => {
            ansbg.style = '';
        })
        p.style.display = 'none';
    })
})