import React from 'react';

import Card from '../components/Card';
import Head from '../components/Head';
import Layout from '../components/Layout';
import TextContent from '../components/TextContent';

export default function() {
  return (
    <Layout>
      <Head />

      <Card
        title="Tiago Madeira"
        description="Software Engineer"
      />

      <TextContent>
        <p>Computer scientist, studying probabilistic AI. Self-employed software engineer after internships at Google, Facebook, Dropbox, and imo.im. Former ACM-ICPC contestant.</p>

        <p style={{fontSize: '0.8em', opacity: 0.6}}>Cientista da computação, estudando IA probabilística. Engenheiro de software trabalhando por conta própria depois de estágios em Google, Facebook, Dropbox e imo.im. Ex-participante de competições de programação.</p>
      </TextContent>
    </Layout>
  );
};
