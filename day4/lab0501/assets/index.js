const uid = document.getElementById("uid").value
const pwd = document.getElementById("password").value
const fname = document.getElementById("fname").value
const address = document.getElementById("address").value
const male = document.getElementById("male")
const female = document.getElementById("female")
const country = document.getElementById("sel")
const zip = document.getElementById("zip").value
const email = document.getElementById("email").value
const english = document.getElementById("chb")
const nonenglish = document.getElementById("chbx")
const about = document.getElementById("about").value
const submit = document.getElementById("submit")


submit.addEventListener('click', ()=>{
    const fnameVld = fname.search( /^ [A-Za-z]+$/);
    const addressVld = address.search(/^[a-z0-9]+$/i);
    const emailVld = email.search(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/);
    const zipVld = zip.search(/^[0-9]*$/);
    if((uid>=5 && uid<=12)){
        alert("User id should not be empty | length should be 5-12")
        return;
    }
    if((pwd>=7 && uid<=12)){
        alert("Password should not be empty | length should be 7-12")
        return;
    }
    if(fnameVld == -1 || fname.length == 0){
        alert("Firstname should contain only alphabets | should not be empty");
        return;
    }
    if(addressVld == -1 || address.length == 0){
        alert("Firstname should contain only alphabets | should not be empty");
        return;
    }
    if(emailVld == -1 || email.length == 0){
        alert("Firstname should contain only alphabets | should not be empty");
        return;
    }
    if(!(male.checked || female.checked)){
        alert("Please check at least one sex")
    }
    if(language.checked){
        alert("Please select a language");
    }
})