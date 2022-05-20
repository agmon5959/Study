// 디바운싱과 쓰로틀링 예제

// 디바운싱
let timer;
window.addEventListener('resize', function (e) {
    clearTimeout(timer);
    timer = setTimeout(function () {
        console.log("디바운싱된 resize 이벤트")
    }, 200)
})

// 쓰로틀링
let timer2;
document.querySelector('#input').addEventListener('input', function (e) {
    if (!timer2) {
        timer2 = setTimeout(function () {
            timer2 = null
            console.log('자동완성 검색어 : ', e.target.value)
        }, 500)
    }
})
