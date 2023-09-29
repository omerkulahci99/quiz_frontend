import React, { useState } from "react";
import "./Question.css";
import { Radio, Space } from "antd";

export default function Question({ question, upScore, downScore, scorePoint }) {
  const [value, setValue] = useState();
  const [isCorrect, setIsCorrect] = useState(false);
  const onChange = (e) => {
    setValue(e.target.value);
    if (question.correctAnswer.id === e.target.value){
      upScore(scorePoint);
      setIsCorrect(true);

    }else {
      if(isCorrect) {
        downScore(scorePoint);
        setIsCorrect(false);
      }
    }
  };

  return (
    <div id="main">
      <div class="question">
        <h3>{question.questionText}</h3>
        <ol type="A">
          <Radio.Group onChange={onChange} value={value}>
            <Space direction="vertical">
              {question.answers &&
                question.answers.map((answer) => {
                  return <li key={answer.id}> <Radio value={answer.id}>{answer.text}</Radio></li>;
                })}
            </Space>
          </Radio.Group>
        </ol>
      </div>
    </div>
  );
}
