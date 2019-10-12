import styled from 'styled-components';
import Avatar from '../common/avatar/Avatar';
import { Subtitle } from '../common/Text';
import { titleColor } from '../../utils/colors';
import FilledButton from '../common/FilledButton';

export default {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 35px 42px;
  `,
  Details: styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 105px;
  `,
  Avatar: styled(Avatar)`
    margin: 0;
    margin-right: 14px;
  `,
  TextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  Subtitle: styled(Subtitle)`
    text-transform: capitalize;
  `,
  Message: styled.span`
    font-size: 14px;
    line-height: 17px;
    color: ${titleColor};
    margin-bottom: 112px;
    text-align: center;
  `,
  LogoutButton: styled(FilledButton)`
    margin-bottom: 12px;
    width: fit-content;
    align-self: center;
  `,
}