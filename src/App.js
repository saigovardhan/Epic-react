import React from "react";
import "./index.css";
import {Header} from "./components/Header"
import { Feedback } from "./components/Feedback"
import {feedbackdata} from "./components/feedbackdata"
import { FeedbackForm } from "./components/FeedbackForm";

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [feedbacks, setFeedbacks] = React.useState();

  React.useEffect(()=>{
    fetchFeedback()
  }, [])

  //fetch data
  const  fetchFeedback = async ()=>{
    const res = await fetch(`/feedback?_sort=id&_order=desc`)
    const data = await res.json()

    setFeedbacks(data)
    setIsLoading(false)
  }

  async function handleAdd(newFeedback){
    const res = await fetch('/feedback',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(newFeedback)
    })
    const data = await res.json()
    setFeedbacks([data, ...feedbacks])


  }

  function handleDelete(id){
    setFeedbacks((prevFeedbacks)=>{
      return (prevFeedbacks.filter((feedback)=>feedback.id != id))
    })
  }
  if (isLoading){
    return(<h2>
      Loading....
    </h2>)
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
