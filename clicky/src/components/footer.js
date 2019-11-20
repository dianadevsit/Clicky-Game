import React from 'react';

const Footer = () => {
	return (
		<footer className='page-footer black'>
			<div className='container'>
				<div className='row'>
					<div className='col l7 s12'>
						<h5 className='red-text'>Useful Resources</h5>
						<ul>
							<li>
								<a className='grey-text text-lighten-3' href='https://reactjs.org/tutorial/tutorial.html' target='_blank' rel='noopener noreferrer'>React Tutorial</a>
							</li>
							<li>
								<a className='grey-text text-lighten-3' href='https://reactjs.org/docs/hello-world.html' target='_blank' rel='noopener noreferrer'>React Docs</a>
							</li>
							<li>
								<a className='grey-text text-lighten-3' href='http://materializecss.com/' target='_blank' rel='noopener noreferrer'>MaterializeCSS</a>
							</li>
							
						</ul>
					</div>
				</div>
			</div>
			<div className='footer-copyright'>
				<div className='container'>
					<span className='red-text'>© 2019 gameDevDiana</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;