import { useEffect, useState } from "react";
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

export default function EventMessages({ group_id, event_id }) {
  const { user } = UserAuth();
  const defaultFileRef = ref(storage, "users/new-users.png");
  //STATES
  const [newMessage, setNewMessage] = useState("");
  const [collectionName, setCollectionName] = useState("");
  const [recentMessages, setRecentMessages] = useState([]);

  //useEffects

  useEffect(() => {
    const name = group_id ? `group_${group_id}` : `event_${event_id}`;
    setCollectionName(name);
  }, [event_id, group_id]);

  useEffect(() => {
    if (collectionName) {
      loadMessages(collectionName);
    }
  }, [collectionName]);

  //HANDLERS
  const loadMessages = async (name) => {
    console.log(`COLLECTIONNAME: ${name}`);
    const recentMessagesQuery = await query(
      collection(firestore, name),
      orderBy("timestamp", "desc"),
      limit(25)
    );
    //setRecentMessages(recentMessagesQuery);
    console.log(
      `RECENT MESSAGES BEFORE SNAPSHOT: ${JSON.stringify(recentMessages)}`
    );
    onSnapshot(recentMessagesQuery, function (snapshot) {
      snapshot.docChanges().forEach(function (change) {
        //console.log(`CHANGE: ${JSON.stringify(change)}`);
        let dbMessage = change.doc.data();
        console.log(`DBMESSAGE: ${JSON.stringify(dbMessage)}`);
        setRecentMessages([...recentMessages, dbMessage]);
        console.log(
          `RECENT MESSAGES AFTER CHANGE: ${JSON.stringify(recentMessages)}`
        );
      });
    });
  };

  const saveMessage = async (newMessage) => {
    console.log("***************");
    console.log(user);
    console.log(`NEWMESSAGE: ${newMessage}`);
    console.log(`FIRST_Name: ${user.first_name}`);
    console.log(`USER_ID: ${user.id}`);
    console.log(`PROFILEIMAGE: ${user.photo_url}`);
    console.log("***************");

    try {
      await addDoc(collection(firestore, collectionName), {
        message: newMessage || "UNDEFINED TEST ENTRY",
        user_name: user.first_name || "UNDEFINED USER FIRST NAME",
        user_id: user.id || "UNDEFINED USER ID",
        profileImage: user.photo_url || "users/new-users.png",
        timestamp: serverTimestamp(),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`NEW MESSAGE ENTERED: ${newMessage}`);
    saveMessage(newMessage);
  };

  const onChange = (e) => {
    e.preventDefault();
    setNewMessage(e.target.value);
  };

  const getUserImage = async (profileImage) => {
    if (profileImage) {
      const fileRef = ref(storage, profileImage);
      const imageURL = await getDownloadURL(fileRef);
      return imageURL;
    } else {
      const imageURL = await getDownloadURL(defaultFileRef);
      return imageURL;
    }
  };

  const displayMessage = (message) => {
    const window = document.getElementById("message_window");
  };

  return (
    <>
      <div>
        <div className="message_window" id="message_window">
          {console.log(`.MESSAGES${JSON.stringify(recentMessages)}`)}
          {recentMessages.map((message) => {
            if (message.profileImage) {
              return (
                <div className="message_card">
                  <p className="message_text">{message.message}</p>
                  <p className="messare_user">{message.user_name}</p>
                  <img
                    src={getUserImage(message.profileImage)}
                    alt="user profile"
                  />
                </div>
              );
            }
            return (
              <div className="message_card">
                <p className="message_text">{message.message}</p>
                <p className="messare_user">{message.user_name}</p>
              </div>
            );
          })}
        </div>
        <div className="message_input">
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              name="newmessage"
              placeholder="enter your message here"
              onChange={onChange}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </>
  );
}
