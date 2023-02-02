function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
// použití: sleep(1000).then(() => console.log('Hello!'));
// toto udělá všechno, počká 1s a pak vypíše Hello!

// nebo pokud chcete použít aby se na tomto řádku čekalo a pak se provedl zbytek:
// await sleep(1000);
// ALE POZOR, await funguje jen uvnitř async funkce

//generate rendom string with length
function generateRandomString(length) {
    let result = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
