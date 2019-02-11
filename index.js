const speakeasy = require('speakeasy');

module.exports.templateTags = [
  {
    name: 'otp',
    displayName: 'Generate OTP',
    description: 'Generate OTP in insomnia rest client',
    args: [
      {
        displayName: 'Secret',
        type: 'string'
      }
    ],
    async run(_, secret) {
      const token = speakeasy.totp({
        secret: secret,
        encoding: 'base32'
      });

      return token;
    }
  }
];
