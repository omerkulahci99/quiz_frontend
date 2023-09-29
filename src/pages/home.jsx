import React, { useEffect, useState } from "react";
import { getQuizzes } from "../api/api";
import QuizCard from "../components/QuizCard";
import UserInfo from "../components/UserInfo";
import QuizScore from "../components/QuizScore";

const Home = () => {
  const [quizzesNonCompleted, setQuizzesNonCompleted] = useState([]);
  const [quizzesCompleted, setQuizzesCompleted] = useState([]);

  useEffect(() => {
    const getQuizzesByUser = async () => {
      const response = await getQuizzes(4);

      response.data.map((quizItem) => {
        if (quizItem.completed === true) {
          // Eğer tamamlanmışsa quizzesCompleted dizisine ekleyin
          setQuizzesCompleted((prevCompleted) => {
            // Eğer quizItem zaten dizide varsa, diziyi değiştirmeyin
            if (prevCompleted.some((item) => item.id === quizItem.id)) {
              return prevCompleted;
            }
            return [...prevCompleted, quizItem];
          });
        } else {
          // Tamamlanmamışsa quizzesNonCompleted dizisine ekleyin
          setQuizzesNonCompleted((prevNonCompleted) => {
            // Eğer quizItem zaten dizide varsa, diziyi değiştirmeyin
            if (prevNonCompleted.some((item) => item.id === quizItem.id)) {
              return prevNonCompleted;
            }
            return [...prevNonCompleted, quizItem];
          });
        }
      });
      
      
    };

    getQuizzesByUser();
  }, []);

  return (
    <>
      <UserInfo />
      { quizzesNonCompleted && <QuizCard quizzes={quizzesNonCompleted} />}
      { quizzesCompleted && <QuizScore quizzes={quizzesCompleted}/>}
    </>
  );
};

export default Home;
