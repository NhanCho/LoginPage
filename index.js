let random = Math.floor(Math.random(0,1)*100);
let guess;
do{
    guess = prompt("Nhap so ban doan");
    if(guess>random){
        alert("Can so nho hon");
    }
    else if(guess<random)
    {
        alert("Can so lon hon");
    }
    else
    {
        alert("Dung roi");
        console.log(random);
    }
}while(guess!=random);