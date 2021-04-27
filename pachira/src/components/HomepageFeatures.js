import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Hybrid-Stake Proof of Work',
    Svg: require('../img/miner.svg').default,
    description: (
      <>
        Firmware developed specifically for Ethereum that generates mining rewards with low gas costs. Proof of Work guarantees
          that incentives to maintain the network will continue into the future.
      </>
    ),
  },
  {
    title: 'FPGA Optimized',
    Svg: require('../img/fpga.svg').default,
    description: (
      <>
        The protocol supports miners running open-source FPGA software with industry-standard Ethereum and Ethereum Level 2 and
          para-chains such as Polkadot and Matic.
      </>
    ),
  },
    {
        title: 'Rewards Plus Bonus Payouts',
        Svg: require('../img/rewards.svg').default,
        description: (
            <>
                Both Miners and Stakeholders earn rewards from mining using <strong>Pachira Mining Firmware</strong>. Every transaction
                generates a lottery function that returns some amount to the 2 counterparties and the miner in addition to transaction fees.
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
