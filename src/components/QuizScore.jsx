import React from "react";
import { Card, Col, Row } from "antd";

export default function QuizScore({ quizzes }) {
  return (
    <Row style={{margin: 25}}>
      {quizzes &&
        quizzes.map((quiz) => {
          return (
            <Col key={quiz.quiz.id}>
              <Card
                title={`${quiz.quiz.quizName.replace(/i/g, 'İ').toUpperCase()}`}
                bordered={false}
                style={{margin: 20, width: 250}}
              >
                Not: {quiz.quizScore}
              </Card>
            </Col>
          );
        })}
    </Row>
  );
}
