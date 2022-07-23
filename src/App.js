import React from 'react';
import Navbar from './components/navbar/Navbar';
import './App.css';
import Card from './components/cards/cards';
import MainCard from './components/big card/main-card';

function App() {
  return (
  <div className="App">
    <Navbar />
    <MainCard title="BREAKING NEWS: Fenneko likes VR Unicorn" styling="pill-black" pill="Super Big Gossip" summary='We knew it! She claims that this game is pointless and plans to give it a one star review on Ammozon and return it back ... 
    but jokes on her because she is a nerd herself and spent over $100,000 on DLC. "Thanks to people who are obsessed with micro-transaction, I can live life in peace because I am pocketing $10,000 a day. Now I have 100 houses all over the world! Get reckt." says the CEO of VR Unicorn.
    While The Buzz is against this kind of behavior, you can send a blackmail to the CEO by clicking over here -->'/> 
    <Card title="Wedding Bells?!" summary="Paparrazi saw this girl hanging out with this super chill guy. Rumor has it that he's the richest guy in the world (hint: it's not Elon)." styling="pill-red" pill="Gossip"/>
    <Card title="The Unicorn Diet" summary="On a budget because you spent too much money on a VR video game? Read this article to find out how you can save!" styling="pill-blue" pill="Food"/>
    <Card title="Don't be TOO nice!" summary="Being a very nice person is good, but being TOO nice leads to bad mental health. Take it from Retsuko, who has to do all the accounting work. :(" styling="pill-green" pill="Psychology"/>
  </div>
  
  );
}

export default App;