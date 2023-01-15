const form = document.getElementById("form")
const reset = document.getElementById('reset')
const texts = document.querySelectorAll('input')
const about = document.getElementById('about')
const sel = document.getElementById('sel')

reset.addEventListener('click', ()=>{
    texts.forEach((e)=>{
        e.value = e.defaultValue;
        if(e.checked){
            e.checked = false;
        }
    })
    about.value = about.defaultValue
    sel.value = sel.defaultValue

})