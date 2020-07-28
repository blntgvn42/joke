import React, { useState } from 'react';

import { Button, Link } from "@material-ui/core"

import axios from "./axios"

import './App.css';

function App() {
  const [joke, setJoke] = useState("")
  const [category, setCategory] = useState("")

  const [setup, setSetup] = useState("")
  const [delivery, setDelivery] = useState("")

  const getJoke = async () =>
    await axios.get("/",)
      .then(response => response.data)
      .then(joke => {
        setJoke("")
        setSetup("")
        setDelivery("")
        if ('setup' in joke) {
          setSetup(joke.setup)
          setDelivery(joke.delivery)
        } else {
          setJoke(joke.joke)
        }
        setCategory(joke.category)
        console.log(joke)
      })
  return (
    <div className="app">
      <div />
      <div>
        Author : <Link className="link" href="https://www.linkedin.com/in/bulentguven/">
          Bülent Güven
        </Link>
      </div>
      <div className="app__getJoke">
        <Button color="secondary" variant="contained" onClick={getJoke}>Get Joke</Button>
      </div>
      <div className="app__category">
        {category ? "Category: " + category : ""}
      </div>
      <div className="app__joke">
        {joke
          ? joke : (
            setup && delivery
              ? (
                <div className="app__setDel">
                  <div className="app_set">{"- " + setup}</div>
                  <div>{"- " + delivery}</div>
                </div>
              ) : ("")
          )
        }
      </div>
      <div />
      <div />
    </div >
  );
}

export default App;
