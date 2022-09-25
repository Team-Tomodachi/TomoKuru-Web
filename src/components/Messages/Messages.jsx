import { useEffect, useState, useRef } from "react";
import { UserAuth } from "../../context/AuthContext";
import { firestore, storage } from "../../firebase";
import {
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
//import { getEventMessages, postEventMessage } from "..TomoKuru-Mobile/../../../api";
import { getDownloadURL, ref } from "firebase/storage";
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

    await messagesRef.add({
      message: formValue,
      timestamp: serverTimestamp(),
      user_id: id,
      name: first_name,
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
  const { id, first_name } = props.user;

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

// export default function EventMessages({ group_id, event_id }) {
//   const { user } = UserAuth();
//   const defaultFileRef = ref(storage, "users/new-users.png");
//   //STATES
//   const [newMessage, setNewMessage] = useState("");
//   const [collectionName, setCollectionName] = useState("");
//   const [recentMessages, setRecentMessages] = useState([]);

//   //useEffects

//   useEffect(() => {
//     const name = group_id ? `group_${group_id}` : `event_${event_id}`;
//     setCollectionName(name);
//   }, [event_id, group_id]);

//   useEffect(() => {
//     if (collectionName) {
//       loadMessages(collectionName);
//     }
//   }, [collectionName]);

//   //HANDLERS

//   const loadMessages = async (name) => {
//     console.log(`COLLECTIONNAME: ${name}`);
//     const recentMessagesQuery = await query(
//       collection(firestore, name),
//       orderBy("timestamp", "desc"),
//       limit(25)
//     );
//     //setRecentMessages(recentMessagesQuery);
//     console.log(
//       `RECENT MESSAGES BEFORE SNAPSHOT: ${JSON.stringify(recentMessages)}`
//     );
//     onSnapshot(recentMessagesQuery, function (snapshot) {
//       snapshot.docChanges().forEach(function (change) {
//         //console.log(`CHANGE: ${JSON.stringify(change)}`);
//         let dbMessage = change.doc.data();
//         console.log(`DBMESSAGE: ${JSON.stringify(dbMessage)}`);
//         setRecentMessages([...recentMessages, dbMessage]);
//         console.log(
//           `RECENT MESSAGES AFTER CHANGE: ${JSON.stringify(recentMessages)}`
//         );
//       });
//     });
//   };

//   const saveMessage = async (newMessage) => {
//     console.log("***************");
//     console.log(user);
//     console.log(`NEWMESSAGE: ${newMessage}`);
//     console.log(`FIRST_Name: ${user.first_name}`);
//     console.log(`USER_ID: ${user.id}`);
//     console.log(`PROFILEIMAGE: ${user.photo_url}`);
//     console.log("***************");

//     try {
//       await addDoc(collection(firestore, collectionName), {
//         message: newMessage || "UNDEFINED TEST ENTRY",
//         user_name: user.first_name || "UNDEFINED USER FIRST NAME",
//         user_id: user.id || "UNDEFINED USER ID",
//         profileImage: user.photo_url || "users/new-users.png",
//         timestamp: serverTimestamp(),
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(`NEW MESSAGE ENTERED: ${newMessage}`);
//     saveMessage(newMessage);
//   };

//   const onChange = (e) => {
//     e.preventDefault();
//     setNewMessage(e.target.value);
//   };

//   const getUserImage = async (profileImage) => {
//     if (profileImage) {
//       const fileRef = ref(storage, profileImage);
//       const imageURL = await getDownloadURL(fileRef);
//       return imageURL;
//     } else {
//       const imageURL = await getDownloadURL(defaultFileRef);
//       return imageURL;
//     }
//   };

//   const displayMessage = (message) => {
//     const window = document.getElementById("message_window");
//   };

//   return (
//     <>
//       <div>
//         <div className="message_window" id="message_window">
//           {console.log(`.MESSAGES${JSON.stringify(recentMessages)}`)}
//           {recentMessages.map((message) => {
//             return (
//               <div className="message_card">
//                 <p className="message_text">{message.message}</p>
//                 <p className="message_user">{message.user_name}</p>
//                 {/* <img
//                     src={getUserImage(message.profileImage)}
//                     alt="user profile"
//                   /> */}
//               </div>
//             );
//           })}
//         </div>
//         <div className="message_input">
//           <form onSubmit={(e) => handleSubmit(e)}>
//             <input
//               type="text"
//               className="newmessage"
//               name="newmessage"
//               placeholder="enter your message here"
//               onChange={onChange}
//             />
//             <button className="sendbutton" type="submit">
//               Send
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }
