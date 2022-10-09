import styled from 'styled-components';
import { getThemePreference } from 'utils';
import { Toggle } from './Toggle';

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2.4rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.border.default};
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LogoDiv = styled.img`
  display: flex;
  justify-content: center;
  width: 180px;
`;

export const Header = ({
  handleToggleClick,
}: {
  handleToggleClick(): void;
}) => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <LogoDiv src={'/metablast.png'} />
      </LogoWrapper>
      <RightContainer>
        <Toggle
          onToggle={handleToggleClick}
          defaultChecked={getThemePreference()}
        />
      </RightContainer>
    </HeaderWrapper>
  );
};
