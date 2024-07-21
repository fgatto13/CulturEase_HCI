import React from 'react';
import likeimg from '../image/likeimg.png';
import '../Bacheca.css'

function PropostaProgetto({ image, nome, descrizione, classe }){
	return (
				<div className={classe}>
					<div className="divImg">
						<img className="userimg" src={image} alt="ImgUser1"/>	
					</div>
					<div className="divText">
						<div className="DIVelimina"><button>Elimina X</button></div>
						<h5>Proposta di Progetto</h5>
						<hr/>
						<span><b>Nome: </b> {nome}</span><br/>
						<span><b>Descrizione: </b> {descrizione}</span>
						<div className="like">
							<button>Non mi piace <img className="dontlikeimg" src={likeimg} alt="dontlikeimg" /></button>
							<button>Mi piace <img className="likeimg" src={likeimg} alt="likeimg" /></button>
						</div>
					</div>
				</div>
	);
}

export default PropostaProgetto;