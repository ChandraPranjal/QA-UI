import React, { useState } from "react";

function SendMessage({ searchHeight, setSearchHeight }) {
  const [value, setValue] = useState("");
  const [comp ,  setComp] = useState([]);
  const [usr ,  setUsr] = useState([]);

  const changeHandler = (e) => {
    setValue(e.target.value)
    const textarea = e.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
    setSearchHeight(`${textarea.scrollHeight}px`);
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(value);
  }
  return (
    <div className="bg-base-200 p-2 sticky bottom-0 min-h-[55px] flex items-center justify-center w-full shadow-zinc-50 shadow-2xl">
      <textarea
        value={value}
        onInput={changeHandler}
        className="input flex rounded-xl  overflow-hidden p-1 resize-none w-4/5"
        style={{ height: searchHeight }}
        placeholder="Share your mood with me, and I'll curate the movie recommendations for you! 🍿✨"
      ></textarea>
      <button className="btn btn-ghost m-2" onClick={handleSubmit}>Send</button>
    </div>
  );
}

export default SendMessage;
