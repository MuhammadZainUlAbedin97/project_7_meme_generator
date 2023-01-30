import "../App.css";

function Navbar() {
	return (
		<>
			<div className="navbar">
				<nav>
					<div className="nav__title">
						<img
							src={`./images/Troll Face.png`}
							alt="troll face"
							title="meme generator"
							width="48px"
						/>
						<p>Meme Generator</p>
					</div>
					<div className="nav__desc">
						<p>React Course - Project Three</p>
					</div>
				</nav>
			</div>
		</>
	);
}

export default Navbar;
