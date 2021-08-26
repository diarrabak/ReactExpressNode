import React from 'react';
import {Link} from 'react-router-dom';
import frontImage from '../images/universe.jpg';
//Home page of the website
const  Home=()=>{
	return(
	<>
		<main className="home">
		 <img className="home-image" src={frontImage} alt={'front page of LOSSA lab'} />
		 
		  <h1> Welcome to Lossa Lab</h1>
			
		</main>
	</>
	);
}

export default Home;