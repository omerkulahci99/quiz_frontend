import React from "react";
import moment from "moment/moment";
import "./QuizCard.css";
import { useNavigate } from "react-router-dom";

export default function QuizCard({ quizzes }) {
  const navigate = useNavigate();

  const onClickStartQuiz = (quizId) => {
    navigate(`/quiz/${quizId}`);
  };
  return (
    <>
      <main className="page-content">
        {quizzes &&
          quizzes.map((quiz) => {
            return (
              <div className="card" key={quiz.quiz.id}>
                <div className="content">
                  <h2 className="title">
                    {quiz.quiz.quizName.replace(/i/g, "İ").toUpperCase()}
                  </h2>
                  <p className="copy">
                    {moment(quiz.quiz.startTime).format("DD.MM.YYYY HH:mm")}
                  </p>

                  <p className="copy">
                    {moment(quiz.quiz.endTime).format("DD.MM.YYYY HH:mm")}
                  </p>
                  { new Date().getTime() - new Date(quiz.quiz.startTime).getTime() > 0 && new Date().getTime() - new Date(quiz.quiz.endTime).getTime() < 0 && 
                    <button
                      className="btn"
                      onClick={() => onClickStartQuiz(quiz.quiz.id)}
                    >
                      Sınavı başlat
                    </button>
                  }
                </div>
              </div>
            );
          })}
      </main>
    </>
  );
}
