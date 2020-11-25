export const strings = {
  copyright: (clubName: string) => `©${new Date().getFullYear()}, ${clubName}`,

  alt: {
    facebook: 'Berlin Crocs on Facebook',
    instagram: 'Berlin Crocs on Instagram',
    twitter: 'Berlin Crocs on Twitter',
  },

  form: {
    name: 'Your Name',
    email: 'Your Email',
    subject: 'Subject',
    message: 'Your Message',
    sendButtonText: 'Send',
  },

  signUp: {
    amount: (amount: number) => `€ ${amount}`,
    total: 'Total:',
  },
};
