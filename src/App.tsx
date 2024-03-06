import React from 'react';
import List from './List';
import { useDictionary } from './hooks/useDictionary';
import './App.css';

const defaults = {
    numToShow: 15,
    itemHeight: 30,
};

function App() {
    const dictionary = useDictionary();

    return (
        <div className="app">
            <div className="header">
                <h1>React Virtualized List</h1>
            </div>

            <List.ListContainer
                count={dictionary.length}
                numToShow={defaults.numToShow}
                itemHeight={defaults.itemHeight}
            >
                <List
                    itemHeight={defaults.itemHeight}
                    numToShow={defaults.numToShow}
                    items={dictionary}
                />
            </List.ListContainer>
        </div>
    );
}

export default App;
