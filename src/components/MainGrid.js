import React from 'react';
import { Grid, Column } from '@kickoff/react-components';

import Converter from './Converter';

const MainGrid = () =>
  <Grid stack="huge">
    <Column span={4} /> 
    <Column span={4}>
      <Converter />
    </Column>
    <Column span={4} />
  </Grid>;

export default MainGrid;
