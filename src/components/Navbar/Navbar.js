import React, { Component } from 'react';
import { NavItems } from './NavItems';
import './Navbar.css'

class Navbar extends Component {
	state = {
		clicked: false,
		urlName: window.location.pathname.slice(1)
	}

	handleClick = () => {
		this.setState({ clicked: !this.state.clicked })
	}

	static handleClickId = (event) => {
		return event.currentTarget.id
	}

	render() {
		return(
			<nav className={this.state.clicked ? 'NavbarItemsMobile' : 'NavbarItems'}>
				<div className={this.state.clicked ? 'logo-menu-icon-mobile' : 'logo-menu-icon'}>
					<img src={process.env.PUBLIC_URL + '/assets/images/logo-01.png'} alt='logo' className='logo' />
					<div className='menu-icon-div' onClick={this.handleClick}>
						<i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} id='menu-icon'></i>
					</div>
				</div>
				<div className='menu'>
					<div className='genres'>
						<ul className={this.state.clicked ? 'active-nav' : 'nav-menu'}>
							{NavItems.map((item, index) => {
								return (
									<li key={index} className='genre-list-items'>
										<a className={item.className} href={item.url} id={item.id} onClick={this.props.handleClickId} >
											<div className={(this.state.urlName === item.title) ? 'title-item-selected' : 'title-item'}>{item.title}</div>
										</a>
									</li>
								)
							})}
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}

export default Navbar;