function encrypt(data){
    return 'encrypted data';
}
function send(url,data){
    const encryptedData = encrypt(data); // actually we use a library called "tls" to decrypt data in http.
    console.log(`sending ${encryptedData} to ${url}`);
}

// console.log(module);

module.exports = { 
    send
}