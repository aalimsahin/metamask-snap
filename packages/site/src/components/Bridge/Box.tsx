import { useState } from 'react';
import styled from 'styled-components';

const BoxDiv = styled.div`
  border: none;
  background-color: ${({ theme }) => theme.colors.background.alternative};
  border-radius: 12px;
  width: 512px;
  margin-left: auto;
  margin-right: auto;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  padding: 2rem;
  min-height: 80vh;
  width: 100%;
  box-sizing: border-box;
`;

const Label = styled.span`
  font-size: 18px;
`;

const Select = styled.select``;

const SelectOption = styled.option``;

type Token = {
  address: string;
  name: string;
};
const tokens: Token[] = [
  { address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', name: 'WETH' },
  { address: '0x6B175474E89094C44Da98b954EedeAC495271d0F', name: 'DAI' },
  { address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', name: 'USDC' },
];

export const Box = () => {
  const [token, setToken] = useState(tokens[0]);

  return (
    <Wrapper>
      <BoxDiv>
        <Label>Token</Label>
        <Select value={token.name}>
          {tokens.map((item) => {
            return (
              <SelectOption onClick={() => setToken(item)} value={item.name}>
                {item.name}
              </SelectOption>
            );
          })}
        </Select>
      </BoxDiv>
    </Wrapper>
  );
};
