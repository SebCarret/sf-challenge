import React, { useState } from 'react';

function App() {

  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [playerOneSelected, setPlayerOneSelected] = useState(null);
  const [playerTwoSelected, setPlayerTwoSelected] = useState(null);

  var playerSelected = (name) => {
    if(currentPlayer === 1) {
      setCurrentPlayer(2);
      setPlayerOneSelected(name)
    } else if (currentPlayer === 2) {
      setCurrentPlayer(null);
      setPlayerTwoSelected(name)
    }
  }

  var playerOne;
  if(playerOneSelected) {
    playerOne = <Player name={playerOneSelected} player="1"/>;
  }

  var playerTwo;
  if(playerTwoSelected) {
    playerTwo = <Player name={playerTwoSelected} player="2"/>;
  }

  var playerList = ['ryu', 'honda', 'blanka', 'guile', 'ken', 'chun-li', 'zangief', 'dhalsim'];
  var playersPicto = playerList.map(name => <PlayerPicto key={name} playerSelected={playerSelected} player={currentPlayer} name={name}/>);

  return (
    <div style={{paddingTop:'50px', display:'flex', justifyContent:'center', backgroundColor: '#03016B', height: '100vh'}}>

      <div style={{width:'200px'}}>
        {playerOne}
      </div>
      <div style={{width:'200px', marginLeft:'50px', marginRight:'50px', display:'flex', alignItems: 'center', flexDirection: 'column'}}>
        <img style={{width: '100%', paddingBottom: '50px'}} src="./images/player-select.jpg" />

        <div style={{cursor: 'pointer', width: '100%', display:'flex', flexDirection: 'column'}}>
          <div style={{display:'flex', height: '53px'}}>
            {playersPicto.slice(0, playersPicto.length / 2)}
          </div>
          <div style={{display:'flex', height: '53px'}}>
            {playersPicto.slice(playersPicto.length / 2, playersPicto.length)}
          </div>
        </div>
      </div>
      <div style={{width:'200px'}}>
        {playerTwo}
      </div>
    </div>
  )
};

function PlayerPicto(props) {

  const [selected, setSelected] = useState(null);

  var onPlayerCLick = (player, name) => {
    setSelected(player);
    props.playerSelected(name);
  };

  var frame;
  if (selected) {
    frame = <img style={{width: '101%', position:'absolute', top:'-5px'}} src={'./images/'+selected+'p-select.png'} />;
  };

  return (

    <div style={{width: '25%', position:'relative'}}>
      {frame}
      <img style={{width: '100%'}} onClick={() => onPlayerCLick(props.player, props.name)} src={'./images/players/tiny/'+props.name+'.jpg'} />
    </div>
  )
};

function Player(props) {

  return (

    <div style={{display:'flex', alignItems: 'center', flexDirection: 'column'}}>
      <img style={{width: '40%'}} src={'./images/'+props.player+'p.jpg'} />
      <img style={{width: '100%'}} src={'./images/players/large/'+props.name+'.jpg'} />
    </div>
  )
};

export default App;
