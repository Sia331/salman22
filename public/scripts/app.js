// This file contains the main JavaScript logic for the web application. 
// It handles user interactions, encryption processes, and updates the UI based on user input.

const encryptedWords = [];

function encryptPassword() {
    const password = document.getElementById('passwordInput').value;
    const type = document.getElementById('encryptionTypes').value;
    let encrypted = '';

    if (type === 'md5') {
        encrypted = CryptoJS.MD5(password).toString();
    } else if (type === 'sha1') {
        encrypted = CryptoJS.SHA1(password).toString();
    } else if (type === 'sha256') {
        encrypted = CryptoJS.SHA256(password).toString();
    } else if (type === 'sha512') {
        encrypted = CryptoJS.SHA512(password).toString();
    } else if (type === 'base64') {
        encrypted = btoa(password);
    } else if (type === 'aes') {
        const key = CryptoJS.enc.Utf8.parse('1234567890123456'); // مفتاح AES
        encrypted = CryptoJS.AES.encrypt(password, key, { mode: CryptoJS.mode.ECB }).toString();
    } else if (type === 'des') {
        const key = CryptoJS.enc.Utf8.parse('12345678'); // مفتاح DES
        encrypted = CryptoJS.DES.encrypt(password, key, { mode: CryptoJS.mode.ECB }).toString();
    } else if (type === '3des') {
        const key = CryptoJS.enc.Utf8.parse('123456789012345678901234'); // مفتاح 3DES
        encrypted = CryptoJS.TripleDES.encrypt(password, key, { mode: CryptoJS.mode.ECB }).toString();
    } else if (type === 'blowfish') {
        const key = CryptoJS.enc.Utf8.parse('12345678'); // مفتاح Blowfish
        encrypted = CryptoJS.Blowfish.encrypt(password, key, { mode: CryptoJS.mode.ECB }).toString();
    } else if (type === 'hmac-md5') {
        const key = CryptoJS.enc.Utf8.parse('secret-key'); // مفتاح HMAC
        encrypted = CryptoJS.HmacMD5(password, key).toString();
    } else if (type === 'hmac-sha256') {
        const key = CryptoJS.enc.Utf8.parse('secret-key'); // مفتاح HMAC
        encrypted = CryptoJS.HmacSHA256(password, key).toString();
    }

    document.getElementById('encryptedPassword').innerText = `النص المشفر: ${encrypted}`;
    encryptedWords.push(encrypted);
    updateEncryptedList();
}

function detectHashType() {
    const hash = document.getElementById('hashInput').value;
    let type = 'غير معروف';

    if (/^[a-f0-9]{32}$/i.test(hash)) {
        type = 'MD5';
    } else if (/^[a-f0-9]{40}$/i.test(hash)) {
        type = 'SHA-1';
    } else if (/^[a-f0-9]{64}$/i.test(hash)) {
        type = 'SHA-256';
    } else if (/^[A-Za-z0-9+/=]+$/.test(hash)) {
        type = 'Base64';
    }

    document.getElementById('hashType').innerText = `نوع التشفير: ${type}`;
}

function updateEncryptedList() {
    const list = document.getElementById('encryptedList');
    list.innerHTML = '';
    encryptedWords.forEach(word => {
        const li = document.createElement('li');
        li.innerText = word;
        list.appendChild(li);
    });
}

document.getElementById('encryptButton').addEventListener('click', encryptPassword);
document.getElementById('detectButton').addEventListener('click', detectHashType);