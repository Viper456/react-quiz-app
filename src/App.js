import { useState } from "react";
import "./index.scss";

const questions = [
   {
      title: "React - це ... ?",
      variants: ["бібліотека", "фреймворк", "додаток"],
      correct: 0,
   },
   {
      title: "Компонент - це ... ",
      variants: [
         "додаток",
         "частина додатку чи сторінки",
         "не знаю, вперше чую",
      ],
      correct: 1,
   },
   {
      title: "Що таке JSX?",
      variants: [
         "Це простий HTML",
         "Це функція",
         "Це той же HTML, але з можливістю виконувати JS-код",
      ],
      correct: 2,
   },
   {
      title: "Коли вийшла перша версія Internet Explorer?",
      variants: ["1957 р.", "2015 р.", "1995 р."],
      correct: 2,
   },
   {
      title: "Які основні технології використовуються у front-end розробці?",
      variants: ["HTML/CSS", "HTML/CSS/JavaScript", "HTML/CSS/PHP"],
      correct: 1,
   },
   {
      title: "Що таке семантика в HTML?",
      variants: [
         "Зміст, логічне наповнення HTML елемента",
         "Фізичне відображення HTML елемента",
         "Стиль написання тегів",
      ],
      correct: 0,
   },
   {
      title: "Методика нефункціонального тестування, для вимірювання таких параметрів системи як чутливість та стабільність, за різних навантажень - це?",
      variants: [
         "Навантажувальне тестування",
         "Кросбраузерні тестування сайту",
         "Тестування продуктивності",
      ],
      correct: 2,
   },
   {
      title: "До мультимедійних об'єктів належать",
      variants: ["графічні зображення", "відеооб'єкти", "аудіооб'єкти"],
      correct: 1,
   },
   {
      title: "Сукупність веб-сторінок, які об'єднані між собою за змістом та навігаційно - це?",
      variants: ["Веб-сайт", "Браузер", "Компонент"],
      correct: 0,
   },
   {
      title: "Що таке Usability тестування?",
      variants: [
         "Процес застосування якомога більшої кількості креативних підходів та перевірки програми",
         "Має на увазі одночасне проєктування, виконання тестів і навчання продукту",
         "Дозволяє перевірити комфортне використання сайту для користувача, наскільки легко знайти необхідну інформацію або виконати бажані дії",
      ],
      correct: 2,
   },
];

function Result({ correct }) {
   return (
      <div className="result">
         <img
            src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
            alt="cdn-icons"
         />
         <h2>
            Дякую вам за проходження короткого тесту!<br></br>
            Всього правильних відповідей {correct} из {questions.length}
         </h2>
         <a href="https://viper456.github.io/react-quiz-app/">
            <button>Спробувати знову</button>
         </a>
      </div>
   );
}

function Game({ step, question, onClickVariant }) {
   const percentage = Math.round((step / questions.length) * 100);

   return (
      <>
         <div className="progress">
            <div
               style={{ width: `${percentage}%` }}
               className="progress__inner"
            ></div>
         </div>
         <h1>{question.title}</h1>
         <ul>
            {question.variants.map((text, index) => (
               <li onClick={() => onClickVariant(index)} key={text}>
                  {text}
               </li>
            ))}
         </ul>
      </>
   );
}

function App() {
   const [step, setStep] = useState(0);
   const [correct, setCorrect] = useState(0);
   const question = questions[step];

   const onClickVariant = (index) => {
      setStep(step + 1);

      if (index === question.correct) {
         setCorrect(correct + 1);
      }
   };

   return (
      <div className="App">
         {step !== questions.length ? (
            <Game
               step={step}
               question={question}
               onClickVariant={onClickVariant}
            />
         ) : (
            <Result correct={correct} />
         )}
      </div>
   );
}

export default App;
