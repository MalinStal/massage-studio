import React, { useEffect, useState } from "react";
import { getCommentsState, getUsersState, modalIsOpen } from "../recoilstate/atoms";
import { useRecoilState } from "recoil";
import style from "./modal-comments.css";
import { Star, NotePencil } from "@phosphor-icons/react";
//import Modal from "./modal";

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
    <h3 className="resention-headline">Läs gärna våra recension<Star size={25} color="yellow" weight="fill"/>
    <Star size={25} color="yellow" weight="fill"/>
    <Star size={25} color="yellow" weight="fill"/>
    <Star size={25} color="yellow" weight="fill"/>
    <Star size={25} color="yellow" weight="fill"/></h3>
    
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
    
   <div><NotePencil size= {32} /*onClick={openModal}*//>
   Varit hos oss förut? Lämna gärna en recension!</div>
  
       
    </>
    
)
}


/*  const increase = () => {
    setLikes((like) => like + 1);
  };
*/

/* denna kod nedan är för att kunna lägga till en post genom dummyJS fungerar ej än
  går att skriva en resention men går inte att få den sparad genom fetchen :(


 const [input, setInput] = useState({namn:"", recension:""});
async function addComments(namn, recension) {
  const result = await fetch("fetch('https://dummyjson.com/comments/add", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: 31,
     body: recension,
     username: namn,

    })
  })
  let json = await result.json()
  return json
 } 
 
 
 
const [isOpen,setIsopen] = useRecoilState(modalIsOpen)
 

const openModal = () => {
  setIsopen(true)
}

const closeModal = ()=> {
  setIsopen(false)
}

const handelChange = (e) => {
 const {name, value} = e.target;
 setInput((input) => ({...input, [name]: value}))
 console.log(input)
}
  const handelClick = () => {
   addComments(input.namn,input.recension).then((input) =>setComments([input, ...comments])
    );
    console.log(comments)
};
 
<Modal
        open={isOpen}
        onClose={closeModal}
       
        btnMessage="Stäng"
      >
        <label>Namn</label>
        <input
        required
        name="namn"
        value={input.namn}
        onChange={handelChange}
        />
        <label>Recension</label>
        <textarea
        required
        name="recension"
        value={input.recension}
        onChange={handelChange}/>
        
        <button onClick={handelClick}> Skicka</button>
      </Modal>*/