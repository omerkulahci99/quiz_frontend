import React, { useState, useEffect } from "react";
import Question from "../components/Question";
import { finishTheQuiz, getQuiz, getUserQuizRelation } from "../api/api";
import { useParams, useNavigate } from "react-router-dom";
import moment from "moment/moment";
import { Button } from "antd";

const Quiz = () => {
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState();
  const [quizRelation, setQuizRelation] = useState();
  const { quizId } = useParams();
  const [isStartTime, setIsStartTime] = useState(false);
  const [score, setScore ] = useState(0);

  useEffect(() => {
    const getQuizByUser = async () => {
      const response = await getQuiz(4, quizId);
      const relationResponse = await getUserQuizRelation(4, quizId);
      setQuizRelation(relationResponse.data);
      if( (new Date(response.data.endTime)).getTime() -  (new Date().getTime())  < 0 ) {
        alert("Sınav süresi doldu")
        navigate("/");
      }
      if(quiz && new Date().getTime() - new Date(quiz.startTime).getTime() < 0) {

        alert("Sınav daha başlamamıştır.")
        navigate("/");
      }


      setQuiz(response.data);
      startTime(response.data.endTime);

    };

    getQuizByUser();
  }, []);


  const finishQuiz =  async () => {
    const quizBody = {
      "id": quizRelation.id,
      "quizScore": score,
      "completed": true
    }
    const response = await finishTheQuiz(quizBody);
    alert("Sınav tamamlandı.");
    navigate("/");
    
  }

  const upScore = (newScore) => {
    setScore(score + newScore);
  }
  const downScore = (newScore) => {
    setScore(score - newScore);
  }

  const startTime = (endTime) => {
    if (endTime) {
      var timerElement = document.getElementById("timer_span");

      if (timerElement !== null) {
        var countdownInterval = setInterval(function () {

          var now = new Date()
          var distance = new Date(endTime) - now;

          var hours = Math.floor(distance / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);

          // Output the result in an element with id="timer"
          timerElement.innerText =
            hours + " saat " + minutes + " dakika " + seconds + " saniye ";

          // If the count down is over, write some text
          if (distance < 0) {
            clearInterval(countdownInterval);
            timerElement.innerText = "SÜREN DOLDU";
          }
        }, 1000); // 1000 milisaniye = 1 saniye
      }
    }
  };

  return (
    <>
      {quiz && (
        <div>
          <span id="timer_span">00:00</span>
          <h1 style={{ margin: "20px auto" }}>{quiz.quizName}</h1>
          {quiz.questions &&
            quiz.questions.map((question) => {
              return <Question key={question.id} question={question} upScore={upScore} downScore={downScore} scorePoint = {100 / quiz.questions.length}/>;
            })}

            <Button onClick={finishQuiz}>Sınavı bitir</Button>
        </div>
      )}
    </>
  );
};

export default Quiz;
