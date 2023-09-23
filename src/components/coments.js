import React, { useEffect } from "react";
import { getCommentsState, getUsersState } from "../recoilstate/atoms";
import { useRecoilState } from "recoil";
import style from "./modal-comments.css";
import { Star, NotePencil } from "@phosphor-icons/react";

export function Comments () {

    const [comments, setComments] = useRecoilState(getCommentsState)
    const [users,setUsers] = useRecoilState(getUsersState)
 
 async function getComments() {
    let result = await fetch('https://dummyjson.com/comments')
    let json = await result.json()
    return json
    
 }   
 async function getUsers() {
    let result = await fetch("https://dummyjson.com/users")
    let json = await result.json()
    return json
 }
useEffect(()=> {
    getComments().then((result) => setComments(result.comments));
    getUsers().then((result) => setUsers(result.users))
   
}, [])

  
return (
    <>
    <h3 className="resention-headline">Läs gärna våra resentioner <Star size={20} color="yellow" weight="fill"/>
    <Star size={20} color="yellow" weight="fill"/>
    <Star size={20} color="yellow" weight="fill"/>
    <Star size={20} color="yellow" weight="fill"/>
    <Star size={20} color="yellow" weight="fill"/></h3>
    
    <section className="comment-section slider">
   
     <div id="scrolling" className="scrolldiv">
        {comments.map((comment,index) => {
          return  <div key={index} className="comment-div">
            <h4 className="comment-users-h4">{users[index]?.firstName} <img  className="comment-img" src={users[index]?.image} /></h4>
             <span className="comment-body">{comment.body}</span>
            </div>
        })}
       </div>
    </section>
    <div><NotePencil size= {32}/>
   Varit hos oss förut? Lämna gärna en resention!</div>
    </>
)
}


/*  const increase = () => {
    setLikes((like) => like + 1);
  };
*/