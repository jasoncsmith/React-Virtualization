import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import ListContainer from './ListContainer';
import { Item } from './Item';

export interface ListProps {
    items: string[];
    numToShow?: number;
    itemHeight?: number;
}

interface UlWrapperProps {
    itemHeight: number;
    itemCount: number;
}

interface ScrollWrapperProps {
    itemHeight: number;
    numToShow: number;
}

const ScrollWrapper = styled.div`
    border: 1px solid black;
    background: #fff;
    width: 100%;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 0;
    max-height: ${(props: ScrollWrapperProps) =>
        props.numToShow * props.itemHeight - props.itemHeight}px;
    min-height: ${(props: ScrollWrapperProps) => props.itemHeight * 5}px;
`;

const UlWrapper = styled.ul`
    margin: 0;
    padding: 0;
    position: relative;
    height: ${(props: UlWrapperProps) => props.itemCount * props.itemHeight}px;
`;

export const formatNumber = (num: number) => {
    return Intl.NumberFormat('en-US').format(num);
};

const List = ({ items, itemHeight = 30, numToShow = 15 }: ListProps) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const ref = useRef<null | HTMLDivElement>(null);
    const timeoutId = useRef<null | NodeJS.Timeout>(null);
    const index = Math.floor(scrollPosition / itemHeight);

    useEffect(() => {
        const el = ref.current;

        if (!el) {
            return;
        }

        function handleScroll() {
            setScrollPosition(el?.scrollTop || 0);
            timeoutId.current = null;
        }

        function throttledScroll() {
            timeoutId.current = setTimeout(handleScroll, 50);
        }

        el.addEventListener('scroll', throttledScroll);

        return () => el.removeEventListener('scroll', throttledScroll);
    }, []);

    return (
        <>
            <code>
                {index}, {scrollPosition}
            </code>
            <ScrollWrapper
                itemHeight={itemHeight}
                numToShow={numToShow}
                ref={ref}
            >
                <UlWrapper
                    itemCount={items.length}
                    itemHeight={itemHeight}
                >
                    {items
                        .slice(index, index + numToShow)
                        .map((word: string, idx: number) => (
                            <Item
                                position={index * itemHeight + idx * itemHeight}
                                itemHeight={itemHeight}
                                key={word}
                            >
                                {`${formatNumber(index + idx + 1)}: ${word}`}
                            </Item>
                        ))}
                </UlWrapper>
            </ScrollWrapper>
        </>
    );
};

List.ListContainer = ListContainer;

export default List;
