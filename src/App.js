import React, { Component } from "react";
import "./App.css";
import Customer from "./components/Customer";

const persons = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "홍길동",
    birthday: "940730",
    gender: "남자",
    job: "대학생"
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "김영희",
    birthday: "940423",
    gender: "여자",
    job: "대학생"
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/3",
    name: "이철수",
    birthday: "900211",
    gender: "남자",
    job: "직장인"
  }
];

class App extends Component {
  render() {
    return (
      <div>
        {persons.map(p => {
          return (
            <Customer
              key={p.id}
              id={p.id}
              image={p.image}
              name={p.name}
              birthday={p.birthday}
              gender={p.gender}
              job={p.job}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
