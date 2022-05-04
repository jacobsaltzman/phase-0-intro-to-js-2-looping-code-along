// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }

    return gifts;
}

wrapGifts(gifts);

function writeCards(names = [],eventName){

   let newMessages = [];
    
    for (let i = 0; i < names.length; i++){
        newMessages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return newMessages;
}

function countDown(num){
    while (num >= 0){
        console.log(num);
        num --;
    }
}