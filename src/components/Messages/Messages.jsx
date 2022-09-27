import { useState, useRef } from "react";
import { UserAuth } from "../../context/AuthContext";
import { firestore } from "../../firebase";
import {
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  serverTimestamp,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
require("./Messages.css");

export default function ChatRoom({ group_id, event_id }) {
  console.log(`group_id: ${JSON.stringify(group_id)}`);
  console.log(`event_id: ${JSON.stringify(event_id)}`);
  const name = group_id ? `group_${group_id}` : `event_${event_id}`;
  const { user } = UserAuth();

  console.log(`**************`);
  console.log(`NAME: ${name}`);
  console.log(`USER: ${user.first_name}`);
  console.log(`**************`);

  const dummy = useRef();
  const messagesRef = collection(firestore, name);
  const messageQuery = query(messagesRef, orderBy("timestamp"), limit(25));

  const [messages] = useCollectionData(messageQuery, { idField: "id" });
  console.log(`MESSAGES: ${JSON.stringify(messages)}`);
  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { id, photo_url, first_name } = user;

    await addDoc(messagesRef, {
      message: formValue,
      timestamp: serverTimestamp(),
      user_id: id,
      user_name: first_name,
      photo_url: photo_url,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="chat-container">
        <div className="chat_window">
          {messages &&
            messages.map((msg) => (
              <ChatMessage key={msg.timestamp} message={msg} user={user} />
            ))}

          <span ref={dummy}></span>
        </div>

        <form className="chat-input" onSubmit={sendMessage}>
          <input
            className="chat-input-field"
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            placeholder="say something nice"
          />

          <button
            className="chat-input-button"
            type="submit"
            disabled={!formValue}
          >
            SEND➤
          </button>
        </form>
      </div>
    </>
  );
}

function ChatMessage(props) {
  const { message, user_id, user_name, photo_url } = props.message;
  const { id } = props.user;

  const messageClass = user_id === id ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        {/* <img
          src={
            photo_url || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
        /> */}
        <p className={`message-text-${messageClass}`}>{message}</p>
        <p className={`sender-${messageClass}`}>{user_name}</p>
      </div>
    </>
  );
}
