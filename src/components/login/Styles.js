import styled from 'styled-components';
import Avatar from '../common/Avatar';

export default {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 0 32px;
  `,
  ButtonWrapper: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center
    margin: 32px 0;
  `,
  // Override the base Avatar component styles
  Avatar: styled(Avatar)`
    transform: translateY(-35px);
  `,
}