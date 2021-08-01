import React from 'react';
import { useState } from 'react';
import IContact from '../../../interfaces/IContact';
import Modal from 'react-modal';
import { GiConfirmed } from 'react-icons/gi';

import { send } from '../../../services/ContactService';

import { Container, Heading, Content, ContactForm, Buttons } from './styles';

interface IProps {
  label: string;
  description: string;
}

const customStyles = {
  content: {
    width: 400,
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const SectionThree: React.FC<IProps> = ({ label, description }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Heading>
        <h1>{label}</h1>
        <h2>{description}</h2>
      </Heading>
      <Content>
        <ContactForm>
          <input
            placeholder={'Nome Completo'}
            value={name}
            onChange={(event) => {
              const { value } = event.target;
              setName(value);
            }}
          />
          <input
            placeholder={'Email de contato'}
            value={email}
            onChange={(event) => {
              const { value } = event.target;
              setEmail(value);
            }}
          />
          <input
            placeholder={'Telefone/Whatsapp'}
            value={phone}
            onChange={(event) => {
              const { value } = event.target;
              setPhone(value);
            }}
          />
          <textarea
            placeholder={'Mensagem'}
            value={message}
            onChange={(event) => {
              const { value } = event.target;
              setMessage(value);
            }}
          />
          <Buttons>
            <button
              onClick={async () => {
                if (!name && !phone) return
                try {
                  const contact: IContact = {
                    name,
                    email,
                    phone,
                    message,
                  };
                  await send(contact);
                  setIsOpen(true);
                  setName('');
                  setPhone('');
                  setMessage('');
                  setEmail('');
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              Enviar
            </button>
          </Buttons>
          <Modal
            isOpen={isOpen}
            shouldCloseOnOverlayClick={true}
            contentLabel={'bla'}
            shouldCloseOnEsc={true}
            style={customStyles}
            onRequestClose={() => setIsOpen(false)}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <GiConfirmed fontSize={50} color={'green'} />
              <p style={{ margin: 20, textAlign: 'center' }}>
                Sua solicitação foi enviada com sucesso! Em breve entraremos em
                contato.
              </p>
              <Buttons>
                <button
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  OK
                </button>
              </Buttons>
            </div>
          </Modal>
        </ContactForm>
      </Content>
    </Container>
  );
};

export default SectionThree;
