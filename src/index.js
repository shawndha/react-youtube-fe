import React from 'react'
import ReactDOM from 'react-dom'

import SearchBar from './components/search-bar'

const API_KEY = 'AIzaSyA1ZwYnL0kMqZHieHoKi_4Az7_XXOWwM5I'

// Create a new component. This component should produce some HTML
const App = () =>  {
	return (
		<div>
			<SearchBar />
		</div>
	)
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'))