import { React, useState } from "react";
import logo from "../images/logo.png";

function Header() {
	const [isHamburgerToggled, setIsHamburgerToggled] = useState(false);

	const handleMenu = () => {
		setIsHamburgerToggled(!isHamburgerToggled);
	};

	return (
		<header>
			<img src={logo} alt="" />
			<nav className={isHamburgerToggled ? "show nav" : "nav"}>
				<ul>
					<li>Integration</li>
					<li>Pricing</li>
					<li>Blog</li>
					<li>About us</li>
					<li>Get early access</li>
				</ul>
			</nav>
			<button className="btn btn--header">Get early access</button>
			<div
				className={isHamburgerToggled ? "cross hamburger" : "hamburger"}
				onClick={handleMenu}
			>
				<div></div>
			</div>
		</header>
	);
}

export default Header;
