import React from "react";
import Header from "../../Components/Header/Header";
import "./CreateBlog.css";
import image from "../../Components/blogg.png";
import "./CreateBlog.css";

function CreateBlog() {
  return (
    <>
      <Header />
      <form id="contact">
        <div class="container2">
          <div class="head">
            <h2>Say Hello</h2>
          </div>
          <input type="text" name="name" placeholder="Name" />
          <br />
          <input type="email" name="email" placeholder="Email" />
          <br />
          <textarea type="text" name="message" placeholder="Message"></textarea>
          <br />
          <div class="message">Message Sent</div>
          <button id="submit" type="submit">
            Send!
          </button>
        </div>
      </form>
    </>
  );
}

export default CreateBlog;
