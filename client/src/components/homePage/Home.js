/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
// import { Link } from 'react-router-dom'
// import { Button } from 'semantic-ui-react';
import Navigation from '../navigation/Navigation'

const Home = () => {
    return (
        <div className="home">
			<Navigation/>
            <div className="sp-container">
	<div className="sp-content">
		<div className="sp-globe"></div>
		<h2 className="frame-1">WELCOME</h2>
		<h2 className="frame-2">ENJOY OUR PRODUCTS</h2>
		<h2 className="frame-3">HOPE YOU FIND YOUR HAPPINESS</h2>
		<h2 className="frame-4">GO FOR IT</h2>
		<h2 className="frame-5">
			<span>SIMPLE ORDER, </span>
			<span>BEST CHOISE</span>
			{/* <span>BEST EXPERIANCE</span> */}
		</h2>
		<a className="sp-circle-link" href="/homeclient">GO!</a>
	</div>
</div>
            {/* <Link to="homeclient">
            <Button inverted color='grey'>
        View our products
      </Button>
            </Link> */}
        </div>
    )
}

export default Home
