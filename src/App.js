import { useState, useEffect } from "react";
import './App.css';
import { createLogEntry, listLogEntries } from './API'

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    (async () => {
      const listLog = await listLogEntries();
      setInfo(listLog);
    })()
  }, [])

  const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        name: name,
        age: age,
        email: email,
        phone: phone,
      }
      !name && !age && !email && !phone ? alert("Fill in the details") : await createLogEntry(data);
      !name && !age && !email && !phone ? alert("Fill in the details") : await locate();
  }

  const locate =  async () => {
      await setName('');
      await setAge('');
      await setEmail('');
      await setPhone('');
      const listLog = await listLogEntries();
      setInfo(listLog);
    };

  return (
    <div className="App">
        <form className="data" action="" onSubmit={handleSubmit}> 
          <h1>Get Registered Here</h1>
          <label htmlFor="name">Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text"/>
          <label htmlFor="name">Age</label>
          <input value={age} onChange={(e) => setAge(e.target.value)} type="number"/>
          <label htmlFor="name">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email"/>
          <label htmlFor="name">Phone</label>
          <input value={phone} onChange={(e) =>  setPhone(e.target.value)} type="number"/>
          <button type="submit">Submit the information</button>
        </form>
        <h1>View Registration Details Here</h1>
        {
          info.map(data => (
            <div className="users" key={data._id}>
              <p>{data.name}</p>
              <p>{data.age}</p>
              <p>{data.email}</p>
              <p>{data.phone}</p>
            </div>
          ))
        }
    </div>
  );
}

export default App;
