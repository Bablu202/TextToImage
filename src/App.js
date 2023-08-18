import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [typing, setTyping] = useState("");
  const [search, setSearch] = useState("");
  const [container, setContainer] = useState();

  const [imageLoad, setImageLoaded] = useState();

  useEffect(() => {}, []);

  const url = "https://open-ai21.p.rapidapi.com/texttoimage2";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "dd9b30c7d0mshf0c2582389a4dbap142cdejsn256568b45e65",
      "X-RapidAPI-Host": "open-ai21.p.rapidapi.com",
    },
    body: new URLSearchParams({
      text: search,
    }),
  };

  async function response() {
    await fetch(url, options)
      .then((res) => {
        return res.json();
      })

      .then((data) => {
        setContainer(data);
        setImageLoaded(data.url);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleTypingValue = (e) => {
    setTyping(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setSearch(typing);
    console.log(55 + typing);
    console.log(search);
    response();
  };
  const logButton = () => {
    console.log(container);
  };

  return (
    <div className="App">
      <input
        className="Input"
        type="text"
        value={typing}
        onChange={handleTypingValue}
      />
      <button className="btn" onClick={submitHandler}>
        talk
      </button>
      <button className="btn" onClick={logButton}>
        log
      </button>
      <br />
      {imageLoad && (
        <img style={{ width: "250px" }} src={imageLoad} alt="loading" />
      )}
    </div>
  );
}

export default App;
