import React from 'react';

const MessageParser = ({ children, actions }) => {
    // console.log(children.props.state)
    const { checker } = children.props.state;
    const parse = (message) => {
        if (checker === "price") {
            actions.afterNameMessage();
            children.props.state.userData.name = message;
        }

        if (checker === "preference" && Number(message)) {
            actions.afterAgeMessage();
            children.props.state.userData.age = message;
            if (message <= 100000) {
                children.props.state.userData.category = "loot1";
            } else if (message > 100000 && message <= 500000) {
                children.props.state.userData.category = "loot2";
            }else if (message > 500000&& message <= 1000000) {
                    children.props.state.userData.category = "loot3";
            }else if (message > 1000000&& message <= 2000000) {
                children.props.state.userData.category = "loot4";
            }else if (message > 2000000&& message <= 5000000) {
                children.props.state.userData.category = "loot5";
            }else if (message > 5000000&& message <= 10000000) {
                children.props.state.userData.category = "loot6";
            }
             else {
                children.props.state.userData.category = "loot7";
            }
        }
    }
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions,
                });
            })}
        </div>
    );
};

export default MessageParser;
