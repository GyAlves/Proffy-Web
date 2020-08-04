import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
  return(
    <article className="teacher-item">
    <header>
      <img src="https://api.adorable.io/avatars/285/abott@adorable.png" alt="Avatar"/>
      <div>
        <strong>Gyasmin Assunção</strong>
        <span>Backend</span>
      </div>
    </header>
    <p>
      Entusiasta das melhores tecnologias para desenvolvimento Backend.
      <br></br>
      Apaixonada por desenvolver APIs Rest. Maniaca por DDD e obcecada por TDD.
    </p>
    <footer>
      <p>
        Preço/hora
        <strong>R$ 80,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Entrar em contato"/>
        Entrar em contato
      </button>
    </footer>
  </article>
  )
}

export default TeacherItem;