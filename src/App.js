import React from "react";
import "./index.css";
import {Header} from "./components/Header"
import { Feedback } from "./components/Feedback"
import {feedbackdata} from "./components/feedbackdata"
import { FeedbackForm } from "./components/FeedbackForm";

function App() {
  const [feedbacks, setFeedbacks] = React.useState(feedbackdata);

  function handleAdd(newFeedback){
    setFeedbacks((prevFeedbacks)=>{
      return [...prevFeedbacks, newFeedback]
    })
    console.log(feedbacks)

  }

  function handleDelete(id){
    setFeedbacks((prevFeedbacks)=>{
      return (prevFeedbacks.filter((feedback)=>feedback.id != id))
    })
  }
  
  return (
    <div className="flex-col inline-flex h-full w-full items-center">
      <Header />
      <FeedbackForm handleAdd={handleAdd} />
      <Feedback feedbackdata={feedbacks} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
