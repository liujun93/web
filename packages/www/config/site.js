const siteUrl = 'https://cosmology.finance';
const siteAddress = new URL(siteUrl);
const canonical = siteAddress.href.slice(0, -1);

module.exports = {
  company: {
    nick: 'Cosmology',
    name: 'Cosmology',
    addr: ['San Francisco, CA'],
    legalCounty: 'San Francisco',
    legalState: 'California'
  },
  site: {
    siteUrl,
    www: `www.${siteAddress.host}`,
    host: siteAddress.host
  },
  emails: {
    hello: 'hello@webincubator.com',
    support: 'support@webincubator.com',
    abuse: 'abuse@webincubator.com',
    privacy: 'privacy@webincubator.com',
    legal: 'legal@webincubator.com',
    copyright: 'copyright@webincubator.com',
    arbitrationOptOut: 'arbitration-opt-out@webincubator.com'
  }
};
