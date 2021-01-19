import React, { Component } from "react";
import axios from "axios";

import CardChoice from "./CardChoice";
import Card from "./Card";
import Header from "../Header";
import Score from "../Score";
import Timer from "./Timer";

import "./GamePage.css";

let timer = null
class GamePage extends Component {
  state = {
    hero: [],
    heroRandom: [],
    count: 0,
    answer: "",
    level: '',
    time: 0,
    life: 3,
  };
  
  getAnswer = (event) => {
    const target = event.target;
    const answer = target.value;
    const count = this.state.count;
    const name = this.state.hero[0].name;
    const level = this.state.level;
    const time = this.state.time;
    this.setState({
      answer: answer,
      count: answer === name ? count + 1 : count,
    });
    if (level === "easy") {
      this.setState(answer === name ? { time: time + 5 } : { time: time });
    } else if (level === "medium") {
      this.setState(answer === name ? { time: time + 5 } : { time: time - 2 });
    } else if (level === "expert") {
      this.setState(answer === name ? { time: time + 5 } : { time: time - 5 });
    } else if (level === "hardcore") {
      this.setState(answer === name ? { time: time + 2 } : { time: time - 5 });
    }

    if (answer === name) {
      target.classList.add("yellow");
    } else {
      target.classList.add("red");
    }

    let goodHero = 0
    for (let i = 0; i < 4 ; i++){
      if (document.getElementsByClassName("button")[i].value === this.state.hero[0].name){
        document.getElementsByClassName("button")[i].classList.add("yellow")
        goodHero = i
    }
  }

    timer = setTimeout(() => {
      if (target.classList.contains("yellow")) {
        target.classList.remove("yellow");
      } else if (target.classList.contains("red")) {
        target.classList.remove("red");
        document.getElementsByClassName("button")[goodHero].classList.remove("yellow")
      }
      
      this.getNewHero();
    }, 1200);
  };

  decrease = () => {
    if (this.state.life <= 3  && this.state.life > 0) {
        const life = this.state.life
        this.setState ({life: life - 1})
        this.getNewHero()
    } 
}

  getNewHero = () => {
    axios
      .get("https://akabab.github.io/superhero-api/api/all.json")
      .then((res) => {
        const listHero = [];
        while (listHero.length < 4) {
          const randomhero = res.data[Math.floor(Math.random() * 731)];
          if (randomhero !== undefined) {
            listHero.push(randomhero);
          }
        }

        const randomName = [...listHero].sort(() => {
          return 0.5 - Math.random();
        });
        this.setState({ hero: listHero, heroRandom: randomName });
      });
  };

  componentWillUnmount = () => {
    const yourScore = this.state.count;
    localStorage.setItem('yourScore', yourScore)
    clearTimeout(timer)
  }
  componentDidMount = () => {
    const name = localStorage.getItem('name');
    this.setState({name : name});
    const yourAvatar = localStorage.getItem('chosen');
    this.setState({ 'chosen' : yourAvatar })
    const yourLevel = localStorage.getItem('level');
    this.setState({ level : yourLevel })
    if (yourLevel === "easy" || yourLevel === "medium") {
      this.setState({ time : 80 })
    } else if (yourLevel === "expert" || yourLevel === "hardcore") {
      this.setState({ time : 60 })
    }
    this.getNewHero();
  };

  render() {
    return (
      <div className="backgroundGame">
        <Header name={this.state.name} avatar={this.state.chosen}/>
        {this.state.hero.length === 0 ? (
          "Loading..."
        ) : (
          <section className="sectionGame">
            <div className='left-game-section'>
              <Timer time={this.state.time} />
              <Score score={this.state.count} />
            </div>
            <div className='right-game-section'>
              <CardChoice
                listName={this.state.heroRandom.map((hero) => hero.name)}
                onClick={this.getAnswer}
                life={this.state.life}
                skip={this.decrease}
              />
            </div>
            <div className='card-frame'>
              <Card img={this.state.hero[0].images.lg} />
              </div>
          </section>
        )}
      </div>
    );
  }
}

export default GamePage;
