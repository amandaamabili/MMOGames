import React, { useState } from 'react';
import { CommentBody } from "../CommentBody";
import { CommentForm } from "../CommentForm";


export const CommentList = ({ gameId}) => {
  const innitialComments = JSON.parse(localStorage.getItem(String(gameId))) || []
  const [comments, setComments] = useState(innitialComments);

  const onSubmit = (values, gameId) => {
    let comments = JSON.parse(localStorage.getItem(String(gameId))) || []
    comments.push(values)
    localStorage.setItem(String(gameId), JSON.stringify(comments))
    setComments(comments)
  }
  
  return (
    <>
    <CommentForm gameId={gameId} onSubmit={onSubmit}/>
    {
    comments.map(c => <CommentBody name={c.firstName}  description={c.comment}></CommentBody>)
    }
    </>
  )
  
};