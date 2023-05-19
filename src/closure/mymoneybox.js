// function moneyBox(coins){
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`MoneyBox ${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(5);

//Closure
function moneyBox(){
    let saveCoins =0;
    function countCoins(coins){
        saveCoins += coins;
        console.log(`MoneyBox ${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(6);

const myMoneyBoxA = moneyBox();
myMoneyBoxA(11);
myMoneyBoxA(6);