// Функція для авторизації користувача через Google OAuth2
function authenticateWithGoogle() {
    // Ініціалізація Google API Client Library
    gapi.load('client', initializeGoogleAPI);
}
