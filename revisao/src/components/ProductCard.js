import React from 'react'; 
import '../ProductCard.css'

const ProductCard = ({titulo, imagem, descricao, preco, caracteristicas}) => {
    return(
        <div className="card">
            <h2 className='titulo'>{titulo}</h2>
            <img src={imagem} alt={alt} className='imagem'/>
            <p className='descricao'>{descricao}</p>
            <p className='preco'>{preco}</p>
            <p className='caracteristicas'>{caracteristicas}</p>
        </div>
    )
}

export default ProfileImage