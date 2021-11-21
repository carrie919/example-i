import './App.css';

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/home-page/home-page.component';
import Header from './components/header/header.component';
import ExamsPage from './pages/exams-page/exams-page.component';
import ConceptsPage from './pages/concepts-page/concepts-page.component';
import Footer from './components/footer/footer';

// entry to the application

const App = () => {

	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/exams' component={ExamsPage} />
				<Route exact path='/concepts' component={ConceptsPage} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;