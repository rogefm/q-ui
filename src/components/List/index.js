import React from 'react';
import styled from '@emotion/styled';

const List = (props) => {
  const Ul = styled.ul`
    list-style: none;
  `;
  const Li = styled.li`
    padding: 4.5px 0;
    border-bottom: ${props.divider ? `solid thin ${_theme.palette.lightGrey}` : 'none'};
  `;

  return(
    <Ul className={props.className}>
      {props.items.map((item) => (
        <Li key={item.id}>{item.content}</Li>
      ))}
    </Ul>
  )
}

export default List;
