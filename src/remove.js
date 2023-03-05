const selectBtnList = document.getElementsByClassName('selectBtn');
Array.prototype.forEach.call(selectBtnList, (selectBtn) => {
    selectBtn.addEventListener('click', () => {
        const ansbgList = document.getElementsByClassName('ansbg');
        Array.prototype.forEach.call(ansbgList, (ansbg) => {
            ansbg.style = '';
        })
    })
})