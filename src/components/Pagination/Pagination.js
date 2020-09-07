import React from 'react';
import './Pagination.css';

const Pagination = (props) => {
	const pageLinks = []

	for (let i = 1; i <= 10; i++) {
		let active = props.currentPage === i ? 'active' : '';
		let activeLink = props.currentPage === i ? 'active-link' : 'standard-link';

		pageLinks.push(
			<li className={`pageNumbers ${active}`} key={i} onClick={() => props.nextPage(i)}>
				<button src='#' className={`page-link ${activeLink}`}>{i}</button>
			</li>
		)
	}

	// For all 500 pages
		// for (let i = 1; i < props.pages + 1; i++) {
		// 	let active = props.currentPage == i ? 'active' : '';
		// 	let activeLink = props.currentPage == i ? 'active-link' : 'standard-link';

		// 	pageLinks.push(
		// 		<li className={`pageNumbers ${active}`} key={i} onClick={() => props.nextPage(i)}>
		// 			<button src='#' className={`page-link ${activeLink}`}>{i}</a>
		// 		</li>
		// 	)
		// }

	return (
		<div className='num-row'>
			<ul className='page-list'>
				{
					<li className={`first-last`} onClick={() => props.nextPage(1)}><button src='#' className={`active-link`}>First</button></li>
				}
				{ pageLinks }
				{
					<li className={`first-last`} onClick={() => props.nextPage(10)}><button src='#' className={`active-link`}>Last</button></li>
				}
				{/* For all 500 pages */}
					{/* {
						<li className={`first-last`} onClick={() => props.nextPage(props.pages)}><button src='#' className={`active-link`}>Last</button></li>
					} */}
			</ul>
		</div>
	)
}

export default Pagination;