const speakeasy = require('speakeasy');

module.exports.templateTags = [
  {
    name: 'otp',
    displayName: 'Generate OTP',
    description: 'Generate OTP in insomnia rest client',
    args: [
      {
        displayName: 'Secret',
        type: 'string',
      },
      {
        displayName: 'Issuer',
        type: 'string',
      },
    ],
    async run(_, secret, issuer) {
      if (!!issuer) {
        return speakeasy.otpauthURL({
          secret: secret,
          issuer: issuer,
          label: '',
        });
      } else {
        return speakeasy.totp({
          secret: secret,
          encoding: 'base32',
        });
      }
    },
  },
];
