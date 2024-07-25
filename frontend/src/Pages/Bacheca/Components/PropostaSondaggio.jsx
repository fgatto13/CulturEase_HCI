import React from 'react';
import likeimg from '../image/likeimg.png';
import '../Bacheca.css'

function PropostaSondaggio({ image, descrizione, opzione1, opzione2, classe }) {
	return (
		<div className={classe}>
			<div className="divText">
				<div className="DIVelimina">
					<button>Elimina X</button>
				</div>
				<h5>Proposta di Sondaggio</h5>
				<hr />
				<span><b>Domanda: </b> {descrizione}</span><br />
				<div className="radiobutton">
					<input type="radio" id="option1" name="option" value="1" />
					<span><b>Opzione1:</b> {opzione1}</span>
				</div>
				<div className="radiobutton">
					<input type="radio" id="option2" name="option" value="2" />
					<span><b>Opzione1:</b> {opzione2}</span>
				</div>
				<div className="right">
					<button>Non mi piace <img className="dontrightimg" src={likeimg} alt="dontrightimg" /></button>
					<button>Mi piace <img className="rightimg" src={likeimg} alt="rightimg" /></button>
				</div>
			</div>
			<div className="divImg">
				<img className="userimg" src={image} alt="ImgUser1" />
			</div>
		</div>
	);
}

export default PropostaSondaggio;