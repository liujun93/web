const siteUrl = 'https://cosmology.finance';
const siteAddress = new URL(siteUrl);
const canonical = siteAddress.href.slice(0, -1);
const title = 'Cosmology™';
const description =
  'Cosmology is built from the ground up for Cosmos Staking and Osmosis DeFi to optimize your investment strategies.';
const fbAppId = null;
module.exports = {
  title,
  canonical,
  description,
  openGraph: {
    type: 'website',
    url: siteUrl,
    title,
    description,
    site_name: title,
    images: [
      {
        url: canonical + '/og/image.jpg',
        width: 942,
        height: 466,
        alt: title
      }
    ]
  },
  twitter: {
    handle: '@cosmology_fi',
    site: '@cosmology_fi'
  },
  facebook: fbAppId
    ? {
        appId: fbAppId
      }
    : undefined
};
