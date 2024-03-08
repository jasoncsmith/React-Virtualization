import React from 'react';
import Loader from './Loader';
import List from './List';
import { Dictionary, useDictionary } from './hooks/useDictionary';
import './App.css';

const defaults = {
    numToShow: 15,
    itemHeight: 30,
};

function App() {
    const dictionary: Dictionary = useDictionary();

    return (
        <div className="app">
            <div className="header">
                <h1>React Virtualized List</h1>
            </div>

            <List.ListContainer
                count={dictionary.length}
                itemHeight={defaults.itemHeight}
            >
                <List
                    itemHeight={defaults.itemHeight}
                    numToShow={defaults.numToShow}
                    items={dictionary}
                />
            </List.ListContainer>
            {!dictionary.length && <Loader />}
        </div>
    );
}

export default App;
