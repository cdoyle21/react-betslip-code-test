import React from 'react';

import Layout from './hoc/Layout/Layout';
import Betslip from './containers/Betslip/Betslip';

const app = props => {

    return (
      <div>
        <Layout>
          <Betslip />
        </Layout>
      </div>
    );

}

export default app;
