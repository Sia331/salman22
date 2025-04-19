export function md5Hash(input) {
    return CryptoJS.MD5(input).toString();
}

export function sha1Hash(input) {
    return CryptoJS.SHA1(input).toString();
}

export function sha256Hash(input) {
    return CryptoJS.SHA256(input).toString();
}

export function base64Encode(input) {
    return btoa(input);
}

export function base64Decode(input) {
    return atob(input);
}