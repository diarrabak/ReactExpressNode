import React from 'react';
import {Link} from 'react-router-dom';
import frontImage from '../images/universe.jpg';
import NewsList from '../news/newsList';
//Home page of the website
const  Home=()=>{
	return(
		<main className="home">
		 <img className="home-image" src={frontImage} alt={'front page of LOSSA lab'} />
		 
		  <h1 className="home-title"> Welcome to Lossa Lab</h1>
			{/* <NewsList /> */}
		</main>
	);
}

export default Home;