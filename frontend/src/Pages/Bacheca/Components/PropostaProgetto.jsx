import React, {useContext} from 'react';
import likeimg from '../image/likeimg.png';
import '../Bacheca.css'
import { PopUpContext } from '../../../context/PopUpContext';
import AuthContext from '../../../context/AuthContext';

function PropostaProgetto({ image, nome, descrizione, classe }){

	const {handleOpenPopUp} = useContext(PopUpContext);
	const { isAdmin } = useContext(AuthContext);

	const handleApproved = (flag) => {

		   const text = (flag)? "approvare" : "NON approvare";
           handleOpenPopUp(`sei sicuro di ${text} la proposta di progetto?`);

	}

	return (
				<div className={classe}>
					<div className="divImg">
						<img className="userimg" src={image} alt="ImgUser1"/>	
					</div>
					<div className="divText">
						<div className="DIVelimina"><button>Elimina</button></div>
						<h5>Proposta di Progetto</h5>
						<hr/>
						<p style={{marginBottom: '5px'}}><b>Nome: </b> {nome}</p>
						<p><b>Descrizione: </b> {descrizione}</p>
						
						<div className='bottom-post'>

							{isAdmin &&
							<div className='right approved'>
								<button onClick={() => handleApproved(true)}>
								<img className="rightimg" src='/check.png' alt="check img"></img>Approva</button>
								<button onClick={() => handleApproved(false)}>
								<img className="dontrightimg" src='/close.png' alt="not check img"></img>Non approvare</button>
							</div>}
							
							<div className="right">
								<button>Non mi piace <img className="dontrightimg" src={likeimg} alt="dontlikeimg" /></button>
								<button>Mi piace <img className="rightimg" src={likeimg} alt="likeimg" /></button>
							</div>

						</div>
						
					</div>
				</div>
	);
}

export default PropostaProgetto;