import React from "react";
import "../style.css";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  const [cards, setCards] = React.useState([
    {
      id: 1,
      title: "Restaurent Menu",
      src: "./images/resturant.png",
      to: "/resturant",
    },
    {
      id: 2,
      title: "useEffect Increment Title",
      src: "./images/useeffect.png",
      to: "/useeffect",
    },
    {
      id: 3,
      title: "useReducer Increment Decrement",
      src: "./images/usereducer.png",
      to: "/usereducer",
    },
    {
      id: 4,
      title: "useReducer Increment Decrement",
      src: "./images/usestate.png",
      to: "/usestate",
    },
    {
      id: 5,
      title: "Todo List",
      src: "./images/todo.png",
      to: "/todo",
    },
  ]);

  const renderCards = () => {
    return cards.map((card, index) => (
      <div className="card-project">
      <img src={card.src} alt="project image" />
      <div className="content-card" onClick={() => goto(card.to)} >
            <h4>{card.title}</h4>
            <button onClick={() => goto(card.to)}>See Now</button>  
      </div>
        </div>
    ));
  };

  const goto = (src)=>{
    console.log("goto");
    navigate(src);
  }

  return (
    <div className="body-home">
      <div class="bg__gradient"></div>
      <div class="content">
        <h2>React 5 Projects</h2>
        <h2>React 5 Projects</h2>
      </div>
      <div className="cards">
      {renderCards()}
      </div>
    </div>
  );
};

export default Home;
