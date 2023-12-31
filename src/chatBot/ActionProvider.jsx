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
      data = faqQuestion.filter((e) => e.question.match(event));
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
    var message = "";

    message = createChatBotMessage(`Some possible Answer`, {
      widget: "getAllAnswer",
      payload: data,
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev?.messages, message],
    }));
  };

  const linkRoutes = (url) => {
    onChangeUrl(url);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            questionList,
            questionSelection,
            linkRoutes,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
