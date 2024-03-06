import styled from '@emotion/styled';
import React from 'react';

export interface ItemProps {
    position: number;
    itemHeight: number;
    children: React.ReactNode;
}

const Wrapper = styled.li`
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    padding-left: 8px;
    font-size: 18px;
    font-family: monospace;
    border-bottom: 1px solid black;
`;

export const Item = ({ children, position, itemHeight = 30 }: ItemProps) => {
    return (
        <Wrapper style={{ top: position, height: itemHeight }}>
            {children}
        </Wrapper>
    );
};
