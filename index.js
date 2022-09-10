//window.alert("Site Under Devolopment");
const pwEl =document.getElementById("pw");
const copyEl =document.getElementById("copy");
const lenEl= document.getElementById("len");
const upperEl =document.getElementById("upper");
const lowerEl =document.getElementById("lower");
const symbolEl=document.getElementById("symbol");
const generateEl =document.getElementById("generate");
const numberEl =document.getElementById("number");
const upperletters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerletters ="abcdefghijklmnopqrstuvwxyzz";
const number ="0123456789";
const symbol ="~`!@#$%^&*()_-+={[}]|\:;?/";
function getUppercase(){
    return upperletters[Math.floor(Math.random()*upperletters.length)];

}
function getLowercase(){
    return lowerletters[Math.floor(Math.random()*lowerletters.length)];

}
function getNumber(){
    return number[Math.floor(Math.random()*number.length)];

}
function getSymbol(){
    return symbol[Math.floor(Math.random()*number.length)];

}
function generatePassword(){
    const len=lenEl.value;
    let password ="";
    for(let i=0; i<len; i++){
        const x= generateX();
        password +=x;
    }
    pwEl.innerText =password;

}
function generateX(){
    const xs=[];
    if(upperEl.checked){
        xs.push(getUppercase());
    }
    if(lowerEl.checked){
        xs.push(getLowercase());

    }
    if(number.checked){
        xs.push(getNumber());

    }
    if(symbolEl.checked){
        xs.push(getSymbol());

    }
    if(xs.length==0) return "";
    return xs[Math.floor(Math.random()*xs.length)];

}
generateEl.addEventListener("click" , generatePassword);
copyEl.addEventListener("click", () => {
    const textarea =document.createElement("textarea");
    const password =pwEl.innerText;
    if(! password){
        return;
    }
    textarea.value =password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password Copy to Clipboard ");


});