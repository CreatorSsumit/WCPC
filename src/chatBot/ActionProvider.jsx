import React from "react";
import { faqQuestion } from "./faqQuestion";
import { regexMatch } from "./regexMatch";

const ActionProvider = ({
  createChatBotMessage,
  setState,
  children,
  onChangeUrl,
  ...rest
}) => {
  const questionList = (typedMsg) => {
    var data = [],
      message = "";
    const regexMatchasperMessage = regexMatch?.filter((e, i) =>
      typedMsg.match(e)
    );

    regexMatchasperMessage.forEach((event) => {
      data.push(faqQuestion.find((e) => e.question.match(event)));
    });

    if (data?.length) {
      message = createChatBotMessage(`Some possible FAQ`, {
        widget: "getAllQuestions",
        payload: data,
      });
    } else {
      message = createChatBotMessage(`Sorry ! I'm not able to Understand`);
    }

    setState((prev) => ({
      ...prev,
      messages: [...prev?.messages, message],
    }));
  };

  const questionSelection = (data) => {
    onChangeUrl(data);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            questionList,
            questionSelection,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
