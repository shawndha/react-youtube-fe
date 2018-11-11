import _ from 'lodash'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-v3-search'
import SearchBar from './components/search-bar'
import VideoList from './components/video-list'
import VideoDetail from './components/video-detail'
const API_KEY = 'AIzaSyA1ZwYnL0kMqZHieHoKi_4Az7_XXOWwM5I'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			videos: [],
			selectedVideo: null
		}

		this.videoSearch('')
	}

	videoSearch(term) {
		let options = {
			maxResults: 10
		}
		YTSearch(API_KEY, options).then((videos) => {
			this.setState({
				videos: videos.items,
				selectedVideo: videos.items[0]
			})
		}) 
	}

	render() {
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 500)

		return (
			<div>
				<SearchBar onSearchTermChange = {videoSearch}/>
				<VideoDetail video = {this.state.selectedVideo}/>
				<VideoList 
					onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
					videos = {this.state.videos}/>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('#content'))