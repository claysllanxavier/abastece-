import React from 'react';

import { ActivityIndicator } from 'react-native';

import { Loading } from './styles';

const FooterList = () => (
  <Loading>
    <ActivityIndicator size="small" />
  </Loading>
);

export default FooterList;
