import React, { useEffect, useState } from "react";
import "../App.css";

function Form() {
	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
		memeImg: "",
	});

	function changeHandler(event) {
		const { name, value } = event.target;
		setMeme((prevMeme) => ({
			...prevMeme,
			[name]: value,
		}));
	}

	useEffect(() => {
		fetch("https://api.imgflip.com/get_memes")
			.then((res) => res.json())
			.then((data) => setAllMeme(data));
	}, []);

	const [allMeme, setAllMeme] = useState([]);

	function getRandomItem(arr) {
		// get random index value
		const randomIndex = Math.floor(Math.random() * arr.length);

		// get random item
		const item = arr[randomIndex];

		return item;
	}

	function displayUrl() {
		const result = getRandomItem(allMeme.data.memes).url;
		setMeme((prevMeme) => {
			return {
				...prevMeme,
				memeImg: result,
			};
		});
	}

	return (
		<>
			<div className="form">
				<div className="form__input ">
					<input
						type="text"
						id="top_text"
						name="topText"
						value={meme.topText}
						onChange={changeHandler}
						placeholder="Top Text"
					/>
					<input
						type="text"
						id="bottom_text"
						name="bottomText"
						value={meme.bottomText}
						onChange={changeHandler}
						placeholder="Bottom Text"
					/>
				</div>
				<div className="form__btn">
					<button onClick={displayUrl}>
						{meme.memeImg ? "Get a new meme image 🖼️" : "Get a meme image 🖼️"}
					</button>
				</div>
				<div className="form__img">
					{meme.memeImg && <img src={meme.memeImg} alt="meme" />}
					<div className="topText">{meme.topText}</div>
					<div className="bottomText">{meme.bottomText}</div>
				</div>
			</div>
		</>
	);
}

export default Form;
