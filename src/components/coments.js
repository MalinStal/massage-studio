import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import style from "./modal-comments.css";
import {
  getCommentsState,
  getUsersState,
  modalIsOpen,
} from "../recoilstate/atoms";

import { Star, NotePencil, User } from "@phosphor-icons/react";
import Modal from "./modal";
import { getComments, getUsers, addComments } from "../API/fetch";
import logo from '../pictures/massage-logo.png'

export function Comments() {
  const [comments, setComments] = useRecoilState(getCommentsState);
  const [users, setUsers] = useRecoilState(getUsersState);
  const [newComment, setNewComment] = useState([]);
  
  const [input, setInput] = useState({ namn: "", recension: "" });
  const [namn,setNamn] =useState([]);
  
  useEffect(() => {
    getComments().then((result) => setComments(result.comments));
    getUsers().then((result) => setUsers(result.users));
  }, []);


  // ---------------- code for modal ---------------------------------

  const [isOpen, setIsopen] = useRecoilState(modalIsOpen);

  const openModal = () => setIsopen(true);
  const closeModal = () => setIsopen(false);

  const handelChange = (e) => {
    const { name, value } = e.target;
    setInput((input) => ({ ...input, [name]: value }));
    
  };

  const handelClick = () => {
    addComments(input.recension).then((input) =>setNewComment([input, ...newComment]));
    setNamn(namn => ([input.namn, ...namn]))
    setInput({ 
      namn: "",
      recension: "",}
    )
    closeModal()
  };

  return (
    <>
      <h3 className="resention-headline">
        Läs gärna våra recension
        <Star size={25} color="yellow" weight="fill" />
        <Star size={25} color="yellow" weight="fill" />
        <Star size={25} color="yellow" weight="fill" />
        <Star size={25} color="yellow" weight="fill" />
        <Star size={25} color="yellow" weight="fill" />
      </h3>

      <section className="comment-section slider">
        <div id="scrolling" className="scrolldiv">
          {newComment.map((comment, index) => {
            return (
              <div key={index} className="comment-div">
                <h4 className="comment-users-h4">
                  {namn[index]}{" "}
                  <User
                    weight="light"
                    color=" purple"
                    className="comment-img"
                  />{" "}
                </h4>
                <span className="comment-body">{comment?.body}</span>
              </div>
            );
          })}
          {comments.map((comment, index) => {
            return (
              <div key={index} className="comment-div">
                <h4 className="comment-users-h4">
                  {users[index]?.firstName}{" "}
                  <img className="comment-img" src={users[index]?.image} />
                </h4>
                <span className="comment-body">{comment?.body}</span>
              </div>
            );
          })}
        </div>
      </section>

      <div>
        <NotePencil size={35} onClick={openModal} />
        Varit hos oss förut? Lämna gärna en recension!
      </div>

      <Modal loga={logo} open={isOpen} onClose={handelClick} btnMessage="dela din recension">
        <label>Namn</label>
        <input
        className="recension-name"
          required
          name="namn"
          value={input.namn}
          onChange={handelChange}
        />
        <label>Recension</label>
        <textarea
          className="recension-text"
          required
          name="recension"
          value={input.recension}
          onChange={handelChange}
        />
      
      </Modal>
    </>
  );
}
