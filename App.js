import { useState } from "react";

function App() {
  return(
    <div>
      <h1 className="bg-dark text-light">MyChatApp</h1>
      <div>by Prashant Jaiswal-088_KH</div>
      <Send/>
    </div>
  )};

  export default App;

  function Send() {
    const [chat, setChat] = useState("");
    const [list, setlist] = useState("");
    const handleChat = (e) => {
      setChat(e.target.value);
    };

    const send = () => {
      const newList = [...chat];
      setlist(newList);
      setChat("");
    };

    return(
      <div className="container">
        <div className="row">
          <div className="col-8">
            <input className="form-control"
            type="text"
            placeholder="Lets chat here..."
            value={chat}
            onChange={handleChat} />
          </div>
          <div className="col-4">
            <input type="button" className="form-control" 
            value="SEND"
            onClick={send}
            />
          </div>
        </div>
      </div>
      //     {
      //       list.map((item, index) =>(
      //   <div key={index}>{item}</div>
      // ))}
    );
  }