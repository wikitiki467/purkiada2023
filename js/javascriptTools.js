function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
// použití: sleep(1000).then(() => console.log('Hello!'));
// toto udělá všechno, počká 1s a pak vypíše Hello!

// nebo pokud chcete použít aby se na tomto řádku čekalo a pak se provedl zbytek:
// await sleep(1000);
// ALE POZOR, await funguje jen uvnitř async funkce
