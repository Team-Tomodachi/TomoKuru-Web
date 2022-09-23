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
    loadMessages();
  }, []);

  //HANDLERS
  const loadMessages = async () => {
    console.log(`COLLECTIONNAME: ${collectionName}`);
    const recentMessagesQuery = await query(
      collection(firestore, collectionName),
      orderBy("timestamp", "desc"),
      limit(25)
    );
    setRecentMessages(recentMessagesQuery);
    console.log(recentMessages);
    onSnapshot(recentMessagesQuery, function (snapshot) {
      snapshot.docChanges().forEach(function (change) {
        console.log(`CHANGE: ${JSON.stringify(change)}`);
        // setRecentMessages(recentMessagesQuery);
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

  return (
    <>
      <div>
        <div className="message_window">
          {recentMessages.map((message) => (
            <div className="message_card">
              <p className="message_text">{message.message}</p>
              <p className="messare_user">{message.user_name}</p>
              <img
                src={getUserImage(message.profileImage)}
                alt="user profile"
              />
            </div>
          ))}
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
