import React, { useEffect, useState } from 'react';

import {validateId, validateCountryCode, santifizeInput} from "../utils";
import fetchData, {fetchSearchData} from "../utils/DataFetcher";

function PlayerResults() {

    const [players, setPlayers] = useState([]);
    const [searchPlayerId, setSearchPlayerId] = useState('')
    const [searching, setSearching] = useState(false);


    useEffect(() => {
        fetchData()
            .then(data => {
                const subsetOfPlayers = data.players.slice(0,10);
                setPlayers(subsetOfPlayers)
                console.log(subsetOfPlayers)
            })
    }, []);

    useEffect(() => {
        console.log('effect, ', searchPlayerId);

        if (searching) {
            fetchSearchData(searchPlayerId)
            .then(data => {
                const subsetOfPlayers = data.player.slice(0,10);
                setPlayers(subsetOfPlayers)
                console.log(subsetOfPlayers)
            })
            setSearching(false)
        }

    }, [searching, searchPlayerId]);

    const handleSearchById = (input) => {

        if (validateId(input)) {
            // do something
            setSearching(true)
        }

    }

    const handleSearchByCountry = (input) => {

        if (validateCountryCode(input)) {
            // do something
        }
    }

 return (
     <div className="player-results">
         <div className="player-results-header">
             <div className="player-results-search">
                 <label>Player id:</label>
                 <input type="text" onChange={e => {setSearchPlayerId(e.target.value)}}/>
                 <button onClick={handleSearchById}>Submit</button>
             </div>
             <div className="player-results-search">
                 <label >Player Country Code:</label>
                 <input type=""/>
                 <button onClick={()=>{}}>Submit</button>
             </div>
         </div>
         <div className="players-results-section">
             {/* Body of results should go here */}
             {players.map((player) => {
                 return(
                     <div key={player.playerId} style={{"display": "flex", "gap": "1vh"}}>
                        <div>{player.playerId}</div>
                        <div>{player.birthCountry}</div>
                     </div>
                 )
             })}
         </div>


    </div>
 )
}

export default PlayerResults;
