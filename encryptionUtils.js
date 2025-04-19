function encryptAES(data, key) {
    const encrypted = CryptoJS.AES.encrypt(data, key).toString();
    return encrypted;
}

function decryptAES(encryptedData, key) {
    const decrypted = CryptoJS.AES.decrypt(encryptedData, key);
    return decrypted.toString(CryptoJS.enc.Utf8);
}

function encryptDES(data, key) {
    const encrypted = CryptoJS.DES.encrypt(data, key).toString();
    return encrypted;
}

function decryptDES(encryptedData, key) {
    const decrypted = CryptoJS.DES.decrypt(encryptedData, key);
    return decrypted.toString(CryptoJS.enc.Utf8);
}

function encryptTripleDES(data, key) {
    const encrypted = CryptoJS.TripleDES.encrypt(data, key).toString();
    return encrypted;
}

function decryptTripleDES(encryptedData, key) {
    const decrypted = CryptoJS.TripleDES.decrypt(encryptedData, key);
    return decrypted.toString(CryptoJS.enc.Utf8);
}

export {
    encryptAES,
    decryptAES,
    encryptDES,
    decryptDES,
    encryptTripleDES,
    decryptTripleDES
};