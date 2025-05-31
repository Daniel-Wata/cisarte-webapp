import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputMask from '@mona-health/react-input-mask';
import Navbar from '../components/Navbar';
import './Contact.css';

const Contact = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the email, but for now just redirect
    navigate('/email-enviado');
  };

  return (
    <div className="page-wrapper">
      <div className="navbar-white">
        <div className="container">
          <Navbar />
        </div>
      </div>
      <div className="container">
        <div className="contact-content">
          <h1 className="contact-title">Contato</h1>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              <span className="label-row">Nome <span className="required-asterisk">*</span></span>
              <input type="text" name="nome" value={form.nome} onChange={handleChange} required />
            </label>
            <label>
              <span className="label-row">Email <span className="required-asterisk">*</span></span>
              <input type="email" name="email" value={form.email} onChange={handleChange} required />
            </label>
            <label>
              <span className="label-row">Telefone <span className="required-asterisk">*</span></span>
              <InputMask
                mask="(99) 99999-9999"
                maskChar={null}
                type="tel"
                name="telefone"
                value={form.telefone}
                onChange={handleChange}
                placeholder="(11) 91234-5678"
                required
              />
            </label>
            <label>
              <span className="label-row">Assunto <span className="required-asterisk">*</span></span>
              <input type="text" name="assunto" value={form.assunto} onChange={handleChange} required />
            </label>
            <label>
              <span className="label-row">Mensagem <span className="required-asterisk">*</span></span>
              <textarea name="mensagem" value={form.mensagem} onChange={handleChange} required />
            </label>
            <button type="submit" className="contact-submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact; 