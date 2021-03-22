import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import loGo from './assets/screenshot-logo.png';
import './App.css';

function App() {
    const [aarbeiCount, setAarbeiCount] = useState(0);
    const [banaanCount, setBanaanCount] = useState(0);
    const [appelCount, setAppelCount] = useState(0);
    const [kiwiCount, setKiwiCount] = useState(0)
   // const [resetButton, setResetButton] = useState() ??

    const {register, handleSubmit, errors} = useForm({mode:"onChange"});


    function onSubmit(data) {
        console.log(data)

    }

    const resetCount = () => {
        setAarbeiCount(0);
        setBanaanCount(0);
        setAppelCount(0);
        setKiwiCount(0);
    }
  return (
    <>
        <div className="container">
            <img src={loGo} width="295px"/>
        </div>

      <div className="container">
    <h3>🍓 Aardbei: </h3>

    <button
        type="button"
        name="aarbeiMin"
        onClick={() => setAarbeiCount(aarbeiCount-1)}
    >-
    </button>

    <p>{aarbeiCount}</p>

    <button
        type="button"
        name="aarbeiPlus"
        onClick={() => setAarbeiCount(aarbeiCount+1)}
    >+
    </button>
</div>

        <div className="container">
            <h3>🍌 Banaan: </h3>

            <button
                type="button"
                name="banaanMin"
                onClick={() => setBanaanCount(banaanCount-1)}
            >-
            </button>

            <p>{banaanCount}</p>

            <button
                type="button"
                name="banaanPlus"
                onClick={() => setBanaanCount(banaanCount+1)}
            >+
            </button>
        </div>

        <div className="container">
            <h3>🍏 Appel: </h3>

            <button
                type="button"
                name="appelMin"
                onClick={() => setAppelCount(appelCount-1)}
            >-
            </button>

            <p>{appelCount}</p>

            <button
                type="button"
                name="appelPlus"
                onClick={() => setAppelCount(appelCount+1)}
            >+
            </button>
        </div>

        <div className="container">
            <h3>🥝 Kiwi: </h3>

            <button
                type="button"
                name="kiwilMin"
                onClick={() => setKiwiCount(kiwiCount-1)}
            >-
            </button>

            <p>{kiwiCount}</p>

            <button
                type="button"
                name="kiwiPlus"
                onClick={() => setKiwiCount(kiwiCount+1)}
            >+
            </button>
        </div>
        <div className="btn-reset">
            <button className="resetButton" onClick={resetCount}>Reset</button>
        </div>


        <div className="container2">
<h1>Bestel Formulier</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input ref={register({ required: true, maxLength: 20})}
                       type="text"
                       name="firstName"
                       placeholder="Voor naam"/>
                {errors.firstName && <p>Naam is te Lang</p>}

                <input ref={register({ required: true, maxLength: 20})}
                       type="text"
                       name="lastName"
                       placeholder="Achter naam"/>
                {errors.lastName && <p>Naam is veeel te Lang</p>}

                <input ref={register({ required: true, min: 18})}
                       type="text"
                       name="Age"
                       placeholder="Leeftijd"/>
                {errors.Age && <p>Je moet ouder zijn als 18+</p>}

                <input ref={register({ required: true, maxLength: 6})}
                       type="text"
                       name="Postcode"
                       placeholder="Postcode"/>
                {errors.Postcode&& <p>0000AB aanelkaar invullen</p>}


                <p>Bezorg ferquentie</p>

                <label htmlFor="veld-bezorgA">
                <input ref={register({ required: true})}
                       type="radio"
                       name="bezorg"
                       id="veld-bezorgA"
                       value="IedereWeek"/>
                Iedere week</label>

                <label htmlFor="veld-bezorgB">
                    <input ref={register({ required: true})}
                           type="radio"
                           name="bezorg"
                           id="veld-bezorgB"
                           value="OmWeek"/>
                    Om de week</label>

                <label htmlFor="veld-bezorgC">
                    <input ref={register({ required: true})}
                           type="radio"
                           name="bezorg"
                           id="veld-bezorgC"
                           value="Maand"/>
                    Iedere maand</label>

                <label htmlFor="veld-bezorgD">
                    <input ref={register({ required: true})}
                           type="radio"
                           name="bezorg"
                           id="veld-bezorgD"
                           value="Anders"/>
                    Anders</label>
                {errors.bezorg && <p>Graag 1 optie kiezen</p>}




                <hr></hr>
                <label htmlFor="msg">Opmerking</label>
                <textarea id="msg"
                          name="user_message"
                          placeholder="Stel je vraag!"></textarea>
                <hr></hr>

                <label htmlFor="oke">
                <input ref={register({ required: true})}
                       type="checkbox"
                       name="checkBox"
                       id="Akkoord"/>
                Ik ga akkoord met de voorwaarden</label>
                {errors.checkBox&& <p>Aanvinken als u de voorwaarden heb gelezen</p>}
                <button type="submit">
                    Verzenden
                </button>

            </form>

        </div>
    </>
  );
}

export default App;
