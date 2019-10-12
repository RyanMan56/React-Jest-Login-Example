import styled from 'styled-components';
import Avatar from '../common/avatar/Avatar';
import { forgotPasswordMessageColor } from '../../utils/colors';

export default {
  Wrapper: styled.div`
    margin: 0 30px;
  `,
  Avatar: styled(Avatar)`
    transform: translateY(-35px);
  `,
  Message: styled.p`
    font-size: 14px;
    color: ${forgotPasswordMessageColor};
    line-height: 21px;
    margin: 0;
    margin-bottom: 41px;
  `,
  ButtonWrapper: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 32px 0;
  `,
}