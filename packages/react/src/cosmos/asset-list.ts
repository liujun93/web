export interface DenomUnits {
  denom: string;
  exponent: number;
  aliases?: string[];
}

export interface ChainCoin {
  description?: string;
  denom_units: DenomUnits[];
  base: string; // this is the denom
  name: string;
  display: string;
  symbol: string;
  logo_URIs: {
    png: string;
    svg?: string;
  };
  coingecko_id?: string;
  ibc?: {
    source_channel: string;
    dst_channel: string;
    source_denom: string;
  };
  type_asset?: string;
  address?: string;
}

export interface Chain {
  chain_id: string;
  assets: ChainCoin[];
}

export const osmosis: Chain = {
  chain_id: 'osmosis-1',
  assets: [
    {
      description: 'The native token of Osmosis',
      denom_units: [
        {
          denom: 'uosmo',
          exponent: 0,
          aliases: [],
        },
        {
          denom: 'osmo',
          exponent: 6,
          aliases: [],
        },
      ],
      base: 'uosmo',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      logo_URIs: {
        png:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/osmo.png',
        svg:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/osmo.svg',
      },
      coingecko_id: 'osmosis',
    },
    {
      denom_units: [
        {
          denom: 'uion',
          exponent: 0,
        },
        {
          denom: 'ion',
          exponent: 6,
        },
      ],
      base: 'uion',
      name: 'Ion',
      display: 'ion',
      symbol: 'ION',
      logo_URIs: {
        png:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/ion.png',
        svg:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/ion.svg',
      },
      coingecko_id: 'ion',
    },
    {
      description: 'The native staking and governance token of the Cosmos Hub.',
      denom_units: [
        {
          denom:
            'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
          exponent: 0,
          aliases: ['uatom'],
        },
        {
          denom: 'atom',
          exponent: 6,
        },
      ],
      base:
        'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
      name: 'Cosmos',
      display: 'atom',
      symbol: 'ATOM',
      ibc: {
        source_channel: 'channel-141',
        dst_channel: 'channel-0',
        source_denom: 'uatom',
      },
      logo_URIs: {
        png:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/atom.png',
        svg:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/atom.svg',
      },
      coingecko_id: 'cosmos',
    },
    {
      description:
        "Akash Token (AKT) is the Akash Network's native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
      denom_units: [
        {
          denom:
            'ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4',
          exponent: 0,
          aliases: ['uakt'],
        },
        {
          denom: 'akt',
          exponent: 6,
        },
      ],
      base:
        'ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4',
      name: 'Akash Network',
      display: 'akt',
      symbol: 'AKT',
      ibc: {
        source_channel: 'channel-9',
        dst_channel: 'channel-1',
        source_denom: 'uakt',
      },
      logo_URIs: {
        png:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/akt.png',
        svg:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/akt.svg',
      },
      coingecko_id: 'akash-network',
    },
    {
      description:
        'The XPRT token is primarily a governance token for the Persistence chain.',
      denom_units: [
        {
          denom:
            'ibc/A0CC0CF735BFB30E730C70019D4218A1244FF383503FF7579C9201AB93CA9293',
          exponent: 0,
          aliases: ['uxprt'],
        },
        {
          denom: 'xprt',
          exponent: 6,
        },
      ],
      base:
        'ibc/A0CC0CF735BFB30E730C70019D4218A1244FF383503FF7579C9201AB93CA9293',
      name: 'Persistence',
      display: 'xprt',
      symbol: 'XPRT',
      ibc: {
        source_channel: 'channel-6',
        dst_channel: 'channel-4',
        source_denom: 'uxprt',
      },
      logo_URIs: {
        png:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/xprt.png',
      },
      coingecko_id: 'persistence',
    },
    {
      description:
        'The IRIS token is the native governance token for the IrisNet chain.',
      denom_units: [
        {
          denom:
            'ibc/7C4D60AA95E5A7558B0A364860979CA34B7FF8AAF255B87AF9E879374470CEC0',
          exponent: 0,
          aliases: ['uiris'],
        },
        {
          denom: 'iris',
          exponent: 6,
        },
      ],
      base:
        'ibc/7C4D60AA95E5A7558B0A364860979CA34B7FF8AAF255B87AF9E879374470CEC0',
      name: 'IRISnet',
      display: 'iris',
      symbol: 'IRIS',
      ibc: {
        source_channel: 'channel-3',
        dst_channel: 'channel-6',
        source_denom: 'uiris',
      },
      logo_URIs: {
        png:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/iris.png',
      },
      coingecko_id: 'iris-network',
    },
    {
      description: 'DVPN is the native token of the Sentinel Hub.',
      denom_units: [
        {
          denom:
            'ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84',
          exponent: 0,
          aliases: ['udvpn'],
        },
        {
          denom: 'dvpn',
          exponent: 6,
        },
      ],
      base:
        'ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84',
      name: 'Sentinel',
      display: 'dvpn',
      symbol: 'DVPN',
      ibc: {
        source_channel: 'channel-0',
        dst_channel: 'channel-2',
        source_denom: 'udvpn',
      },
      logo_URIs: {
        png:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/dvpn.png',
      },
      coingecko_id: 'sentinel',
    },
    {
      description: 'CRO coin is the token for the Crypto.com platform.',
      denom_units: [
        {
          denom:
            'ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1',
          exponent: 0,
          aliases: ['basecro'],
        },
        {
          denom: 'cro',
          exponent: 8,
        },
      ],
      base:
        'ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1',
      name: 'Cronos',
      display: 'cro',
      symbol: 'CRO',
      ibc: {
        source_channel: 'channel-10',
        dst_channel: 'channel-5',
        source_denom: 'basecro',
      },
      logo_URIs: {
        png:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/cro.png',
      },
      coingecko_id: 'crypto-com-chain',
    },
    {
      description: 'REGEN coin is the token for the Regen Network Platform',
      denom_units: [
        {
          denom:
            'ibc/1DCC8A6CB5689018431323953344A9F6CC4D0BFB261E88C9F7777372C10CD076',
          exponent: 0,
          aliases: ['uregen'],
        },
        {
          denom: 'regen',
          exponent: 6,
        },
      ],
      base:
        'ibc/1DCC8A6CB5689018431323953344A9F6CC4D0BFB261E88C9F7777372C10CD076',
      name: 'Regen Network',
      display: 'regen',
      symbol: 'REGEN',
      ibc: {
        source_channel: 'channel-1',
        dst_channel: 'channel-8',
        source_denom: 'uregen',
      },
      logo_URIs: {
        png:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/regen.png',
      },
      coingecko_id: 'regen',
    },
    {
      description:
        'IOV coin is the token for the Starname (IOV) Asset Name Service',
      denom_units: [
        {
          denom:
            'ibc/52B1AA623B34EB78FD767CEA69E8D7FA6C9CFE1FBF49C5406268FD325E2CC2AC',
          exponent: 0,
          aliases: ['uiov'],
        },
        {
          denom: 'iov',
          exponent: 6,
        },
      ],
      base:
        'ibc/52B1AA623B34EB78FD767CEA69E8D7FA6C9CFE1FBF49C5406268FD325E2CC2AC',
      name: 'Starname',
      display: 'iov',
      symbol: 'IOV',
      ibc: {
        source_channel: 'channel-2',
        dst_channel: 'channel-15',
        source_denom: 'uiov',
      },
      logo_URIs: {
        png:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/iov.png',
        svg:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/iov.svg',
      },
      coingecko_id: 'starname',
    },
    {
      description:
        'TICK coin is the token for the Microtick Price Discovery & Oracle App',
      denom_units: [
        {
          denom:
            'ibc/655BCEF3CDEBE32863FF281DBBE3B06160339E9897DC9C9C9821932A5F8BA6F8',
          exponent: 0,
          aliases: ['utick'],
        },
        {
          denom: 'tick',
          exponent: 6,
        },
      ],
      base:
        'ibc/655BCEF3CDEBE32863FF281DBBE3B06160339E9897DC9C9C9821932A5F8BA6F8',
      display: 'tick',
      name: 'Microtick',
      symbol: 'TICK',
      ibc: {
        source_channel: 'channel-16',
        dst_channel: 'channel-39',
        source_denom: 'utick',
      },
      logo_URIs: {
        png:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/tick.png',
        svg:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/tick.svg',
      },
      coingecko_id: 'microtick',
    },
    {
      description:
        'e-Money NGM staking token. In addition to earning staking rewards the token is bought back and burned based on e-Money stablecoin inflation.',
      denom_units: [
        {
          denom:
            'ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59',
          exponent: 0,
          aliases: ['ungm'],
        },
        {
          denom: 'ngm',
          exponent: 6,
        },
      ],
      base:
        'ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59',
      name: 'e-Money',
      display: 'ngm',
      symbol: 'NGM',
      ibc: {
        source_channel: 'channel-0',
        dst_channel: 'channel-37',
        source_denom: 'ungm',
      },
      logo_URIs: {
        png:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/ngm.png',
        svg:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/ngm.svg',
      },
      coingecko_id: 'e-money',
    },
    {
      description:
        'e-Money EUR stablecoin. Audited and backed by fiat EUR deposits and government bonds.',
      denom_units: [
        {
          denom:
            'ibc/5973C068568365FFF40DEDCF1A1CB7582B6116B731CD31A12231AE25E20B871F',
          exponent: 0,
        },
        {
          denom: 'eeur',
          exponent: 6,
        },
      ],
      base:
        'ibc/5973C068568365FFF40DEDCF1A1CB7582B6116B731CD31A12231AE25E20B871F',
      name: 'e-Money EUR',
      display: 'eeur',
      symbol: 'EEUR',
      ibc: {
        source_channel: 'channel-0',
        dst_channel: 'channel-37',
        source_denom: 'eeur',
      },
      logo_URIs: {
        png:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/eeur.png',
        svg:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/eeur.svg',
      },
      coingecko_id: 'e-money-eur',
    },
    {
      description:
        'The BCNA coin is the transactional token within the BitCanna network, serving the legal cannabis industry through its payment network, supply chain and trust network.',
      denom_units: [
        {
          denom:
            'ibc/D805F1DA50D31B96E4282C1D4181EDDFB1A44A598BFF5666F4B43E4B8BEA95A5',
          exponent: 0,
          aliases: ['ubcna'],
        },
        {
          denom: 'bcna',
          exponent: 6,
        },
      ],
      base:
        'ibc/D805F1DA50D31B96E4282C1D4181EDDFB1A44A598BFF5666F4B43E4B8BEA95A5',
      display: 'bcna',
      name: 'BitCanna',
      symbol: 'BCNA',
      ibc: {
        source_channel: 'channel-1',
        dst_channel: 'channel-51',
        source_denom: 'ubcna',
      },
      logo_URIs: {
        png:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/bcna.png',
        svg:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/bcna.svg',
      },
      coingecko_id: 'bitcanna',
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [
        {
          denom:
            'ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED',
          exponent: 0,
          aliases: ['ujuno'],
        },
        {
          denom: 'juno',
          exponent: 6,
        },
      ],
      base:
        'ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED',
      name: 'Juno',
      display: 'juno',
      symbol: 'JUNO',
      ibc: {
        source_channel: 'channel-0',
        dst_channel: 'channel-42',
        source_denom: 'ujuno',
      },
      logo_URIs: {
        png:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/juno.png',
        svg:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/juno.svg',
      },
      coingecko_id: 'juno-network',
    },
    {
      description: 'The native token of IXO Chain',
      denom_units: [
        {
          denom:
            'ibc/F3FF7A84A73B62921538642F9797C423D2B4C4ACB3C7FCFFCE7F12AA69909C4B',
          exponent: 0,
          aliases: ['uixo'],
        },
        {
          denom: 'ixo',
          exponent: 6,
        },
      ],
      base:
        'ibc/F3FF7A84A73B62921538642F9797C423D2B4C4ACB3C7FCFFCE7F12AA69909C4B',
      name: 'IXO',
      display: 'ixo',
      symbol: 'IXO',
      ibc: {
        source_channel: 'channel-4',
        dst_channel: 'channel-38',
        source_denom: 'uixo',
      },
      logo_URIs: {
        png:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/ixo.png',
      },
      coingecko_id: 'ixo',
    },
    {
      description:
        'LIKE is the native staking and governance token of LikeCoin chain, a Decentralized Publishing Infrastructure to empower content ownership, authenticity, and provenance.',
      denom_units: [
        {
          denom:
            'ibc/9989AD6CCA39D1131523DB0617B50F6442081162294B4795E26746292467B525',
          exponent: 0,
          aliases: ['nanolike'],
        },
        {
          denom: 'like',
          exponent: 9,
        },
      ],
      base:
        'ibc/9989AD6CCA39D1131523DB0617B50F6442081162294B4795E26746292467B525',
      name: 'LikeCoin',
      display: 'like',
      symbol: 'LIKE',
      ibc: {
        source_channel: 'channel-3',
        dst_channel: 'channel-53',
        source_denom: 'nanolike',
      },
      logo_URIs: {
        png:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/like.png',
        svg:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/like.svg',
      },
      coingecko_id: 'likecoin',
    },
    {
      description: 'The native staking token of Terra.',
      denom_units: [
        {
          denom:
            'ibc/0EF15DF2F02480ADE0BB6E85D9EBB5DAEA2836D3860E9F97F9AADE4F57A31AA0',
          exponent: 0,
          aliases: ['uluna'],
        },
        {
          denom: 'luna',
          exponent: 6,
        },
      ],
      base:
        'ibc/0EF15DF2F02480ADE0BB6E85D9EBB5DAEA2836D3860E9F97F9AADE4F57A31AA0',
      name: 'Luna',
      display: 'luna',
      symbol: 'LUNA',
      ibc: {
        source_channel: 'channel-1',
        dst_channel: 'channel-72',
        source_denom: 'uluna',
      },
      logo_URIs: {
        png:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/luna.png',
        svg:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/luna.svg',
      },
      coingecko_id: 'terra-luna',
    },
    {
      description: 'The USD stablecoin of Terra.',
      denom_units: [
        {
          denom:
            'ibc/BE1BB42D4BE3C30D50B68D7C41DB4DFCE9678E8EF8C539F6E6A9345048894FCC',
          exponent: 0,
          aliases: ['uust'],
        },
        {
          denom: 'ust',
          exponent: 6,
        },
      ],
      base:
        'ibc/BE1BB42D4BE3C30D50B68D7C41DB4DFCE9678E8EF8C539F6E6A9345048894FCC',
      name: 'TerraUSD',
      display: 'ust',
      symbol: 'UST',
      ibc: {
        source_channel: 'channel-1',
        dst_channel: 'channel-72',
        source_denom: 'uust',
      },
      logo_URIs: {
        png:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/ust.png',
      },
      coingecko_id: 'terrausd',
    },
    {
      description: 'The KRW stablecoin of Terra.',
      denom_units: [
        {
          denom:
            'ibc/204A582244FC241613DBB50B04D1D454116C58C4AF7866C186AA0D6EEAD42780',
          exponent: 0,
          aliases: ['ukrw'],
        },
        {
          denom: 'krt',
          exponent: 6,
        },
      ],
      base:
        'ibc/204A582244FC241613DBB50B04D1D454116C58C4AF7866C186AA0D6EEAD42780',
      name: 'TerraKRW',
      display: 'krt',
      symbol: 'KRT',
      ibc: {
        source_channel: 'channel-1',
        dst_channel: 'channel-72',
        source_denom: 'ukrw',
      },
      logo_URIs: {
        png:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/krt.png',
      },
      coingecko_id: 'terra-krw',
    },
    {
      description: 'BitSong Native Token',
      denom_units: [
        {
          denom:
            'ibc/4E5444C35610CC76FC94E7F7886B93121175C28262DDFDDE6F84E82BF2425452',
          exponent: 0,
          aliases: ['ubtsg'],
        },
        {
          denom: 'btsg',
          exponent: 6,
        },
      ],
      base:
        'ibc/4E5444C35610CC76FC94E7F7886B93121175C28262DDFDDE6F84E82BF2425452',
      name: 'BitSong',
      display: 'btsg',
      symbol: 'BTSG',
      ibc: {
        source_channel: 'channel-0',
        dst_channel: 'channel-73',
        source_denom: 'ubtsg',
      },
      logo_URIs: {
        png:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/btsg.png',
        svg:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/btsg.svg',
      },
      coingecko_id: 'bitsong',
    },
    {
      description: 'The native token of Ki Chain',
      denom_units: [
        {
          denom:
            'ibc/B547DC9B897E7C3AA5B824696110B8E3D2C31E3ED3F02FF363DCBAD82457E07E',
          exponent: 0,
          aliases: ['uxki'],
        },
        {
          denom: 'xki',
          exponent: 6,
        },
      ],
      base:
        'ibc/B547DC9B897E7C3AA5B824696110B8E3D2C31E3ED3F02FF363DCBAD82457E07E',
      name: 'Ki',
      display: 'xki',
      symbol: 'XKI',
      ibc: {
        source_channel: 'channel-0',
        dst_channel: 'channel-77',
        source_denom: 'uxki',
      },
      logo_URIs: {
        png:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/xki.png',
        svg:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/xki.svg',
      },
      coingecko_id: 'ki',
    },
    {
      description: 'The native token of Secret Network',
      denom_units: [
        {
          denom:
            'ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A',
          exponent: 0,
          aliases: ['uscrt'],
        },
        {
          denom: 'scrt',
          exponent: 6,
        },
      ],
      base:
        'ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A',
      name: 'Secret Network',
      display: 'scrt',
      symbol: 'SCRT',
      ibc: {
        source_channel: 'channel-1',
        dst_channel: 'channel-88',
        source_denom: 'uscrt',
      },
      logo_URIs: {
        png:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/scrt.png',
        svg:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/scrt.svg',
      },
      coingecko_id: 'secret',
    },
    {
      description:
        'Panacea is a public blockchain launched by MediBloc, which is the key infrastructure for reinventing the patient-centered healthcare data ecosystem',
      denom_units: [
        {
          denom:
            'ibc/3BCCC93AD5DF58D11A6F8A05FA8BC801CBA0BA61A981F57E91B8B598BF8061CB',
          exponent: 0,
          aliases: ['umed'],
        },
        {
          denom: 'med',
          exponent: 6,
        },
      ],
      base:
        'ibc/3BCCC93AD5DF58D11A6F8A05FA8BC801CBA0BA61A981F57E91B8B598BF8061CB',
      name: 'MediBloc',
      display: 'med',
      symbol: 'MED',
      ibc: {
        source_channel: 'channel-1',
        dst_channel: 'channel-82',
        source_denom: 'umed',
      },
      logo_URIs: {
        png:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/med.png',
      },
      coingecko_id: 'medibloc',
    },
    {
      description: 'The staking token of Bostrom',
      denom_units: [
        {
          denom:
            'ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4',
          exponent: 0,
          aliases: ['boot'],
        },
      ],
      base:
        'ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4',
      name: 'Bostrom',
      display: 'boot',
      symbol: 'BOOT',
      ibc: {
        source_channel: 'channel-2',
        dst_channel: 'channel-95',
        source_denom: 'boot',
      },
      logo_URIs: {
        png:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/boot.png',
      },
    },
    {
      description: 'Native Token of Comdex Protocol',
      denom_units: [
        {
          denom:
            'ibc/EA3E1640F9B1532AB129A571203A0B9F789A7F14BB66E350DCBFA18E1A1931F0',
          exponent: 0,
          aliases: ['ucmdx'],
        },
        {
          denom: 'cmdx',
          exponent: 6,
        },
      ],
      base:
        'ibc/EA3E1640F9B1532AB129A571203A0B9F789A7F14BB66E350DCBFA18E1A1931F0',
      name: 'Comdex',
      display: 'cmdx',
      symbol: 'CMDX',
      ibc: {
        source_channel: 'channel-1',
        dst_channel: 'channel-87',
        source_denom: 'ucmdx',
      },
      logo_URIs: {
        png:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/cmdx.png',
      },
      coingecko_id: 'comdex',
    },
    {
      description: 'Native token for the cheqd network',
      denom_units: [
        {
          denom:
            'ibc/7A08C6F11EF0F59EB841B9F788A87EC9F2361C7D9703157EC13D940DC53031FA',
          exponent: 0,
          aliases: ['ncheq'],
        },
        {
          denom: 'cheq',
          exponent: 9,
        },
      ],
      base:
        'ibc/7A08C6F11EF0F59EB841B9F788A87EC9F2361C7D9703157EC13D940DC53031FA',
      display: 'cheq',
      name: 'Cheqd',
      symbol: 'CHEQ',
      ibc: {
        source_channel: 'channel-0',
        dst_channel: 'channel-108',
        source_denom: 'ncheq',
      },
      logo_URIs: {
        png:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/cheq.png',
        svg:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/cheq.svg',
      },
      coingecko_id: 'cheqd-network',
    },
    {
      description: 'The native token of Stargaze',
      denom_units: [
        {
          denom:
            'ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4',
          exponent: 0,
          aliases: ['ustars'],
        },
        {
          denom: 'stars',
          exponent: 6,
        },
      ],
      base:
        'ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4',
      name: 'Stargaze',
      display: 'stars',
      symbol: 'STARS',
      ibc: {
        source_channel: 'channel-0',
        dst_channel: 'channel-75',
        source_denom: 'ustars',
      },
      logo_URIs: {
        png:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/stars.png',
      },
      coingecko_id: 'stargaze',
    },
    {
      description: 'Native token of the Lum Network',
      denom_units: [
        {
          denom:
            'ibc/8A34AF0C1943FD0DFCDE9ADBF0B2C9959C45E87E6088EA2FC6ADACD59261B8A2',
          exponent: 0,
          aliases: ['ulum'],
        },
        {
          denom: 'lum',
          exponent: 6,
        },
      ],
      base:
        'ibc/8A34AF0C1943FD0DFCDE9ADBF0B2C9959C45E87E6088EA2FC6ADACD59261B8A2',
      name: 'Lum',
      display: 'lum',
      symbol: 'LUM',
      ibc: {
        source_channel: 'channel-3',
        dst_channel: 'channel-115',
        source_denom: 'ulum',
      },
      logo_URIs: {
        png:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/lum.png',
      },
      coingecko_id: 'lum-network',
    },
    {
      description: 'The native token of Chihuahua Chain',
      denom_units: [
        {
          denom:
            'ibc/B9E0A1A524E98BB407D3CED8720EFEFD186002F90C1B1B7964811DD0CCC12228',
          exponent: 0,
          aliases: ['uhuahua'],
        },
        {
          denom: 'huahua',
          exponent: 6,
        },
      ],
      base:
        'ibc/B9E0A1A524E98BB407D3CED8720EFEFD186002F90C1B1B7964811DD0CCC12228',
      name: 'Chihuahua',
      display: 'huahua',
      symbol: 'HUAHUA',
      ibc: {
        source_channel: 'channel-7',
        dst_channel: 'channel-113',
        source_denom: 'uhuahua',
      },
      logo_URIs: {
        png:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/huahua.png',
      },
      coingecko_id: 'chihuahua-token',
    },
    {
      description: 'The native token of Vidulum',
      denom_units: [
        {
          denom:
            'ibc/E7B35499CFBEB0FF5778127ABA4FB2C4B79A6B8D3D831D4379C4048C238796BD',
          exponent: 0,
          aliases: ['uvdl'],
        },
        {
          denom: 'vdl',
          exponent: 6,
        },
      ],
      base:
        'ibc/E7B35499CFBEB0FF5778127ABA4FB2C4B79A6B8D3D831D4379C4048C238796BD',
      name: 'Vidulum',
      display: 'vdl',
      symbol: 'VDL',
      ibc: {
        source_channel: 'channel-0',
        dst_channel: 'channel-124',
        source_denom: 'uvdl',
      },
      logo_URIs: {
        png:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/vdl.png',
        svg:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/vdl.svg',
      },
      coingecko_id: 'vidulum',
    },
    {
      description: 'The native token of Desmos',
      denom_units: [
        {
          denom:
            'ibc/EA4C0A9F72E2CEDF10D0E7A9A6A22954DB3444910DB5BE980DF59B05A46DAD1C',
          exponent: 0,
          aliases: ['udsm'],
        },
        {
          denom: 'dsm',
          exponent: 6,
        },
      ],
      base:
        'ibc/EA4C0A9F72E2CEDF10D0E7A9A6A22954DB3444910DB5BE980DF59B05A46DAD1C',
      name: 'Desmos',
      display: 'dsm',
      symbol: 'DSM',
      ibc: {
        source_channel: 'channel-2',
        dst_channel: 'channel-135',
        source_denom: 'udsm',
      },
      logo_URIs: {
        png:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/dsm.png',
        svg:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/dsm.svg',
      },
      coingecko_id: 'desmos',
    },
    {
      description: 'The native token of Dig Chain.',
      denom_units: [
        {
          denom:
            'ibc/307E5C96C8F60D1CBEE269A9A86C0834E1DB06F2B3788AE4F716EDB97A48B97D',
          exponent: 0,
          aliases: ['udig'],
        },
        {
          denom: 'dig',
          exponent: 6,
        },
      ],
      base:
        'ibc/307E5C96C8F60D1CBEE269A9A86C0834E1DB06F2B3788AE4F716EDB97A48B97D',
      name: 'Dig Chain',
      display: 'dig',
      symbol: 'DIG',
      ibc: {
        source_channel: 'channel-1',
        dst_channel: 'channel-128',
        source_denom: 'udig',
      },
      logo_URIs: {
        png:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/dig.png',
      },
      coingecko_id: 'dig-chain',
    },
    {
      description:
        "Rowan Token (ROWAN) is the Sifchain Network's native utility token, used as the primary means to govern, provide liquidity, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
      denom_units: [
        {
          denom:
            'ibc/8318FD63C42203D16DDCAF49FE10E8590669B3219A3E87676AC9DA50722687FB',
          exponent: 0,
        },
        {
          denom: 'rowan',
          exponent: 18,
        },
      ],
      base:
        'ibc/8318FD63C42203D16DDCAF49FE10E8590669B3219A3E87676AC9DA50722687FB',
      name: 'Sifchain Rowan',
      display: 'rowan',
      symbol: 'ROWAN',
      ibc: {
        source_channel: 'channel-17',
        dst_channel: 'channel-47',
        source_denom: 'rowan',
      },
      logo_URIs: {
        png:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/rowan.png',
        svg:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/rowan.svg',
      },
      coingecko_id: 'sifchain',
    },
    {
      description: 'The native token of Sommelier Chain.',
      denom_units: [
        {
          denom:
            'ibc/9BBA9A1C257E971E38C1422780CE6F0B0686F0A3085E2D61118D904BFE0F5F5E',
          exponent: 0,
          aliases: ['usomm'],
        },
        {
          denom: 'somm',
          exponent: 6,
        },
      ],
      base:
        'ibc/9BBA9A1C257E971E38C1422780CE6F0B0686F0A3085E2D61118D904BFE0F5F5E',
      name: 'Sommelier Chain',
      display: 'somm',
      symbol: 'SOMM',
      ibc: {
        source_channel: 'channel-0',
        dst_channel: 'channel-165',
        source_denom: 'usomm',
      },
      logo_URIs: {
        png:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/somm.png',
      },
      coingecko_id: 'sommelier',
    },
    {
      description: 'The native token of BandChain',
      denom_units: [
        {
          denom:
            'ibc/F867AE2112EFE646EC71A25CD2DFABB8927126AC1E19F1BBF0FF693A4ECA05DE',
          exponent: 0,
          aliases: ['uband'],
        },
        {
          denom: 'band',
          exponent: 6,
        },
      ],
      base:
        'ibc/F867AE2112EFE646EC71A25CD2DFABB8927126AC1E19F1BBF0FF693A4ECA05DE',
      name: 'Band Protocol',
      display: 'band',
      symbol: 'BAND',
      ibc: {
        source_channel: 'channel-83',
        dst_channel: 'channel-148',
        source_denom: 'uband',
      },
      logo_URIs: {
        png:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/band.png',
        svg:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/band.svg',
      },
      coingecko_id: 'band-protocol',
    },
    {
      description:
        'The native staking and governance token of the Konstellation Network.',
      denom_units: [
        {
          denom:
            'ibc/346786EA82F41FE55FAD14BF69AD8BA9B36985406E43F3CB23E6C45A285A9593',
          exponent: 0,
          aliases: ['udarc'],
        },
        {
          denom: 'darc',
          exponent: 6,
        },
      ],
      base:
        'ibc/346786EA82F41FE55FAD14BF69AD8BA9B36985406E43F3CB23E6C45A285A9593',
      name: 'Konstellation',
      display: 'darc',
      symbol: 'DARC',
      ibc: {
        source_channel: 'channel-0',
        dst_channel: 'channel-171',
        source_denom: 'udarc',
      },
      logo_URIs: {
        png:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/darc.png',
        svg:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/darc.svg',
      },
      coingecko_id: 'konstellation',
    },
    {
      description:
        'The native staking and governance token of the Umee Network.',
      denom_units: [
        {
          denom:
            'ibc/67795E528DF67C5606FC20F824EA39A6EF55BA133F4DC79C90A8C47A0901E17C',
          exponent: 0,
          aliases: ['uumee'],
        },
        {
          denom: 'umee',
          exponent: 6,
        },
      ],
      base:
        'ibc/67795E528DF67C5606FC20F824EA39A6EF55BA133F4DC79C90A8C47A0901E17C',
      name: 'Umee',
      display: 'umee',
      symbol: 'UMEE',
      ibc: {
        source_channel: 'channel-0',
        dst_channel: 'channel-184',
        source_denom: 'uumee',
      },
      logo_URIs: {
        png:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/umee.png',
      },
    },
    {
      description: 'The native token of Gravity Bridge',
      denom_units: [
        {
          denom:
            'ibc/E97634A40119F1898989C2A23224ED83FDD0A57EA46B3A094E287288D1672B44',
          exponent: 0,
          aliases: ['ugraviton'],
        },
        {
          denom: 'graviton',
          exponent: 6,
        },
      ],
      base:
        'ibc/E97634A40119F1898989C2A23224ED83FDD0A57EA46B3A094E287288D1672B44',
      name: 'Graviton',
      display: 'graviton',
      symbol: 'GRAV',
      ibc: {
        source_channel: 'channel-10',
        dst_channel: 'channel-144',
        source_denom: 'ugraviton',
      },
      logo_URIs: {
        png:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/grav.png',
        svg:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/grav.svg',
      },
    },
    {
      description: 'The native token of Fetch.ai Chain',
      denom_units: [
        {
          denom:
            'ibc/770D676475E63F10FF9AB47AFA994C6299B71EBE2CF69B7993414BDAFDA2732A',
          exponent: 0,
          aliases: ['afet'],
        },
        {
          denom: 'fet',
          exponent: 18,
        },
      ],
      base:
        'ibc/770D676475E63F10FF9AB47AFA994C6299B71EBE2CF69B7993414BDAFDA2732A',
      name: 'Fetch.ai',
      display: 'fet',
      symbol: 'FET',
      ibc: {
        source_channel: 'channel-0',
        dst_channel: 'channel-175',
        source_denom: 'afet',
      },
      logo_URIs: {
        png:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/fet.png',
        svg:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/fet.svg',
      },
      coingecko_id: 'fetch-ai',
    },
    {
      description: 'The native token cw20 for Neta on Juno Chain',
      type_asset: 'cw20',
      address:
        'juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr',
      denom_units: [
        {
          denom:
            'ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A',
          exponent: 0,
          aliases: ['uneta'],
        },
        {
          denom: 'neta',
          exponent: 6,
        },
      ],
      base:
        'ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A',
      name: 'Neta',
      display: 'neta',
      symbol: 'NETA',
      ibc: {
        source_channel: 'channel-47',
        dst_channel: 'channel-169',
        source_denom: 'uneta',
      },
      logo_URIs: {
        png:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/neta.png',
      },
      coingecko_id: 'neta',
    },
    {
      description: 'DEC is the native token of Decentr.',
      denom_units: [
        {
          denom:
            'ibc/9BCB27203424535B6230D594553F1659C77EC173E36D9CF4759E7186EE747E84',
          exponent: 0,
          aliases: ['udec'],
        },
        {
          denom: 'dec',
          exponent: 6,
        },
      ],
      base:
        'ibc/9BCB27203424535B6230D594553F1659C77EC173E36D9CF4759E7186EE747E84',
      name: 'Decentr',
      display: 'dec',
      symbol: 'DEC',
      ibc: {
        source_channel: 'channel-1',
        dst_channel: 'channel-181',
        source_denom: 'udec',
      },
      logo_URIs: {
        png:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/dec.png',
        svg:
          'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/dec.svg',
      },
      coingecko_id: 'decentr',
    },
  ],
};
