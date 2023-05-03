function calculateTip(event){
event.preventDefault();
let bill = document.getElementById('bill').value;
let servicoQld = document.getElementById('servicoQld').value;
let people = document.getElementById('people').value;

if(bill == '' | servicoQld == 0){
    alert("Por favor, preencha os valores.");
    return;
}

if(people == '' | people <= 1){
    people = 1;
    document.getElementById('each').style.display = 'none';
}else{
    document.getElementById('each').style.display = 'block';
}

let total = (bill * servicoQld)/ people;
total = total.toFixed(2);
document.getElementById('tip').innerHTML = total;
document.getElementById('totalTips').style.display = 'block';
}

document.getElementById('totalTips').style.display = 'none';
document.getElementById('each').style.display = 'none';

document.getElementById('tipsForm').addEventListener('submit', calculateTip);
