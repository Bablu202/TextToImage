import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [typing, setTyping] = useState("");
  const [search, setSearch] = useState("");
  const [container, setContainer] = useState();

  /*useEffect(() => {
    response()
  }, [search])*/ const url = "https://open-ai21.p.rapidapi.com/texttoimage2";
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
        console.log(data);
        setContainer(data);
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
    console.log(search);
    response();
  };

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type="text" value={typing} onChange={handleTypingValue} />
        <button type="submit">talk</button>
      </form>
      <img style={{ width: "250px" }} src={container?.url} alt="loading" />
    </div>
  );
}

export default App;
