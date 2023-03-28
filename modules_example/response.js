function decrypt(data){
    return 'decrypted data';
}

function read(){
    return decrypt('data'); // actually we use a library called "tls" to decrypt data in http.
}

module.exports = { 
    read
}


//* export using ecma script 
exports = { read}