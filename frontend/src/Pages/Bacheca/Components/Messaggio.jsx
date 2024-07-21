import React from 'react';
import likeimg from '../image/likeimg.png';
import '../Bacheca.css'

function Messaggio({image, messaggio, classe}) {

	return (
		<div className={classe}>
			<div className="divImg">
				<img className="userimg" src={image} alt="ImgUser" />
			</div>
			<div className="divText">
				<div className="DIVelimina"><button>Elimina X</button></div>
				<span>{messaggio}</span>
				<div className="like">
					<button>Non mi piace <img className="dontlikeimg" src={likeimg} alt="dontlikeimg" /></button>
					<button>Mi piace <img className="likeimg" src={likeimg} alt="likeimg" /></button>
				</div>
			</div>
		</div>
	);
}

export default Messaggio;
