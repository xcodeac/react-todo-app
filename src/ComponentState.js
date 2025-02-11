import React, { useState } from 'react';
import styled from 'styled-components';

const initialState = {
  count: 0,
  product: {},
  cart: {}
};

function ComponentState(props) {
  const [product, setProduct] = useState(initialState);
  
  return (
    <div>
      <p>
          count: {product.count}
          <br />
          <StyledButton color='blue' onClick={() => setProduct({...product, count: product.count + 1})}>Increment</StyledButton>
        </p>
    </div>
  );
}

const StyledButton = styled.button`
  background-color: ${props => props.color};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;cd Wo  
  cursor: pointer;
  font-size: 16px;
`;


export default ComponentState;
