import styled from 'styled-components';
import CustomLink from '../common/custom-link';
import { Title, Subtitle } from '../common/text/Text';
import Avatar from '../common/avatar/Avatar';
import Spinner from '../common/spinner/Spinner';

export default {
  ReturnLink: styled(CustomLink)`
    margin-top: 32px;
    margin-bottom: 43px;
    opacity: ${({ shouldHide }) => shouldHide ? 0 : 1}};
  `,
  Tick: styled.img`
    opacity: ${({ shouldHide }) => shouldHide ? 0 : 1};
  `,
  Spinner: styled(Spinner)`
    margin-top: 25px;
    width: 75px;
    height: 75px;
  `,
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: ${({ noMargin }) => noMargin ? 0 : '0 42'}px;
  `,
  Title: styled(Title)`
    margin-top: 16px;
    margin-bottom: 3px;
  `,
  Subtitle: styled(Subtitle)``,
  Avatar: styled(Avatar)`
    margin: 59px 0;
  `,
};