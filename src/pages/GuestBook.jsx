import React,{ useEffect,useState } from 'react'
import axios from "axios";
import "./GuestBook.css";

export const GuestBook = () => {

  const [apiMessage, setApiMessage] = useState([]);
  const [postData, setPostData] = useState({name: "", message: ""});

  const showMessage = async () =>{
    try {
      // const res = await axios.get("https://home-706931074242.us-central1.run.app/guest");
      const res = await axios.get("https://guest3-889049612240.us-central1.run.app/guest");
      setApiMessage(res.data);
    } catch (error) {
      console.error("데이터 불러오기 실패",error);
    }
  }

  useEffect(()=>{
    showMessage();
  },[apiMessage]);

  const submitPost = async (e) =>{
    e.preventDefault(); // 자동 이벤트 방지
    try {
      // await axios.post("https://home-706931074242.us-central1.run.app/guest",postData);
      await axios.post("https://guest3-889049612240.us-central1.run.app/guest",postData);
      setPostData({name: "", message: ""});
      showMessage();
    } catch (error) {
      console.error("데이터 불러오기 실패",error);
    }
  }


  return (
    <div className='guest-outbox'>
      <h1>방명록</h1>
      <form onSubmit= {submitPost}>
        <input type='text' value={postData.name} onChange={(e) =>setPostData({...postData, name: e.target.value})} placeholder='name' required />
        <textarea value={postData.message} onChange={(e) =>setPostData({...postData, message: e.target.value})} placeholder='message' required />
        <button type='submit' onClick={showMessage}>등록</button>
      </form>
      <div className='message'>
        {
          apiMessage.map((msg)=>(
            <div key={msg.id} className='message-card'>
              <p><strong>{msg.name}</strong></p>
              <p>{msg.message}</p>
              <p>{new Date(msg.created_at).toLocaleString()}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default GuestBook;