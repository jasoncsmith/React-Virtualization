# React Virtualization List

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Why Virtualization?
Virtualization allows a UI to render large datasets by only rendering the portion of data that is visible to the user. This prevents the browser from freezing when it encounters too many DOM nodes.

## About this Example
In this virtualization example we are rendering a list of 370,105 words from a dictionary --  Source: [GitHub Repo](https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt). You can configure the number of words you would like to render and the height of the list-item. At any one time only the number of words that you specify will be rendered to the DOM, allowing you to traverse all 370,105 words without your browser locking up.

Side note: I did notice that Firefox would not let me set the height of the `ul` element larger than `17,895,697px`. Setting the height correctly is what allows that scrolling to calculate where it is in the list. If you get the error, you may need to reduce your item height for proper rendering.

## To run locally

In the root directory, you can run:

### `npm run init`

Then open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### This App uses
- React
- Styled Components
- Typescript