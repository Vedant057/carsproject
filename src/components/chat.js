import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './Chatbot/config';
import ActionProvider from './Chatbot/ActionProvider';
import MessageParser from './Chatbot/MessageParser';
import './chat.css'


function chat() {

  return (
    <div className="chat">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default chat;
