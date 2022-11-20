import React from 'react';
import Link from 'next/link';

import styles from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.logo}>
				<h1>Travel App</h1>
			</div>
			<ul className={styles.navlinks}>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/flights">Flights</Link>
				</li>
				<li>
					<Link href="/pois">Interesting Places</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
