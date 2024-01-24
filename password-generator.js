const generatePassword = require('generate-password');

function generateRandomPassword() {
    const password = generatePassword.generate({
        length: 12,
        numbers: true,
        symbols: true,
    });
    console.log('Generated Password:', password);
}
generateRandomPassword();