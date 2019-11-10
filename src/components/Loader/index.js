import React from 'react';
import { Modal, ActivityIndicator } from 'react-native';
import * as S from './styles';

const Loader = ({ loading }) => {
  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
      onRequestClose={() => {}}>
      <S.ModalBack>
        <S.ActivityIndicatorWrapper>
          <ActivityIndicator animating={loading} />
        </S.ActivityIndicatorWrapper>
      </S.ModalBack>
    </Modal>
  );
};

export default Loader;
