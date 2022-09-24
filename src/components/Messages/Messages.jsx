import { useEffect, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { firestore, storage } from "../../firebase";
import {
  getFirestore,
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

const user = UserAuth;

const defaultFileRef = ref(storage, "users/new-users.png");

export default function EventMessages({ group_id, event_id }) {
  //STATES

  const [collectionName, setCollectionName] = useState("");
  const [recentMessages, setRecentMessages] = useState([]);

  //useEffects
  useEffect(() => {
    const name = group_id ? `group_${group_id}` : `event_${event_id}`;
    setCollectionName(name);
  }, [collectionName, event_id, group_id]);

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
        console.log(`CHANGE: ${JSON.stringify(change)}`);
        let dbMessage = change.doc.data();
        console.log(`DBMESSAGE: ${JSON.stringify(dbMessage)}`);
        setRecentMessages([...recentMessages, dbMessage]);
      });
    });
  };

  const saveMessage = async (newMessage) => {
    try {
      await addDoc(collection(firestore, collectionName), {
        message: newMessage,
        user_name: user.first_name,
        user_id: user.id,
        profileImage: user.photo_url || "",
        timestamp: serverTimestamp(),
      });
    } catch (err) {
      console.log(err);
    }
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
          {
            <div className="message_card">
              <p className="message_text">{recentMessages.message}</p>
              <p className="messare_user">{recentMessages.user_name}</p>
              <img
                src={getUserImage(recentMessages.profileImage)}
                alt="user profile"
              />
            </div>
          }
        </div>
        <div className="message_input">
          <form action="">
            <input type="text" placeholder="enter your message here" />

            <button>Send</button>
          </form>
        </div>
      </div>
    </>
  );
}
