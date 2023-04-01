const selectBtnList = document.getElementsByClassName('selectBtn');
const ansbgList = document.getElementsByClassName('ansbg');
Array.prototype.forEach.call(selectBtnList, (selectBtn) => {
    selectBtn.addEventListener('click', () => {
        Array.prototype.forEach.call(ansbgList, (ansbg) => {
            ansbg.style = '';
        })
        const p = document.querySelector('#kaisetsu > p');
        p.style.display = 'none';
    })
})

const answerCheck = document.getElementById('answerCheck');
answerCheck.addEventListener('click', () => {
    Array.prototype.forEach.call(ansbgList, (ansbg) => {
        ansbg.styly = '';
    })
    const pList = document.querySelectorAll('#kaisetsu > p');
    Array.prototype.forEach.call(pList, (p) => {
        p.style.display = 'none';
    })
})