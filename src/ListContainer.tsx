import { formatNumber } from './List';
const DO_NOT_EXCEED = 17895697;
const ListWrapper = ({
    children,
    count,
    itemHeight,
}: {
    children: React.ReactNode;
    count: number;
    itemHeight: number;
}) => {
    if (count * itemHeight >= DO_NOT_EXCEED) {
        return (
            <h5 style={{ color: 'red' }}>
                Container height cannot exceed {formatNumber(DO_NOT_EXCEED)}px.
                May need to shrink your itemHeight value, List wont render
                properly. You have {formatNumber(count)} items * {itemHeight}px
                = {formatNumber(count * itemHeight)}px
            </h5>
        );
    }

    return (
        <div className="content">
            <h3
                style={{
                    alignSelf: 'flex-start',
                }}
            >
                {formatNumber(count)} Words
            </h3>
            {children}
        </div>
    );
};

export default ListWrapper;
