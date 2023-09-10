import React from 'react'
import {v4} from 'uuid'


export const FeedbackForm= ({handleAdd})=>{
    const [newFeedback, setNewFeedback] = React.useState("");
    function handleSubmit(e){
        e.preventDefault()
        const NewFeedBackObject = {
            id:v4(),
            review:newFeedback,
            rating:8

        }
        handleAdd(NewFeedBackObject);
        setNewFeedback("")
    }
    function handleChange(r){
        setNewFeedback(r.target.value)
    }
    return (
      <form className="px-4 py-4" onSubmit={(e)=>handleSubmit(e)}>
        <input className="px-2 py-2 ring-1 ring-green-400" onChange={(e)=>handleChange(e)} value={newFeedback}></input>
        <button type='submit'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </form>
    );
}