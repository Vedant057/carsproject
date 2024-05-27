import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const initialAction = () => {
        const message = createChatBotMessage('Just type in your name to begin.');
        updateState(message, "price")
    }

    const afterNameMessage = () => {
        const message = createChatBotMessage("Let me know your budget so I can suggest the best ride for you.")
        updateState(message, "preference")
    }

    const afterAgeMessage = () => {
        const message = createChatBotMessage("do you lean towards a fast and thrilling ride or prefer a more relaxed and comfortable one?", {
            widget: "startSlow"
        })
        updateState(message)
    }

    const finalResult = (name, price, preference, vehicle) => {
        const message1 = createChatBotMessage(`Got it, ${name}! Based on your Budget ${price} and preference for a ${preference} ride, I recommend the '${vehicle}.' Enjoy the thrill!`, {
            widget: "finalImage"
        })
        const message2 = createChatBotMessage("Thanks You Bhava & Enjoy Your Ride.")
        updateState(message1)
        updateState(message2)
    }

    const updateState = (message, checker) => {
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
            checker,
        }))
    }

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        initialAction,
                        afterNameMessage,
                        afterAgeMessage,
                        finalResult
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;