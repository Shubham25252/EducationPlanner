import { useState } from "react";
import "./App.css";

const App = () => {
  const [subject, setSubject] = useState("");
  const [Hours, setHours] = useState(""); // Initialize as an empty string for valid input handling
  const [subjectsList, setSubjectsList] = useState([]); // Array to store subjects and hours

  const addSubject = () => {
    if (subject && Hours) {
      
      setSubjectsList([...subjectsList, { subject, Hours: parseInt(Hours) }]); // Add new entry
      setSubject(""); // Clear input fields after adding
      setHours("");
    }
  };

  const incrementHours = (index) => {
    const updatedList = subjectsList.map((item, i) =>
      i === index ? { ...item, Hours: item.Hours + 1 } : item
    );
    setSubjectsList(updatedList);
  };

  const decrementHours = (index) => {
    const updatedList = subjectsList.map((item, i) =>
      i === index && item.Hours > 0 ? { ...item, Hours: item.Hours - 1 } : item
    );
    setSubjectsList(updatedList);
  };
  const removeSubject = (index) => {
    const List = [...subjectsList];  // Create a copy of the array
    List.splice(index, 1);           // Remove the item at the specified index
    setSubjectsList(List);           // Update the state with the modified array
  };
  

  return (
    <>
      <h1>Geekster Education Planner</h1>
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <input
        type="number"
        placeholder="Hours"
        value={Hours}
        onChange={(e) => setHours(e.target.value)}
      />
      <button className="add" onClick={addSubject}>ADD</button>

      {/* Render list of subjects and hours */}
      <ul>
        {subjectsList.map((item, index) => (
          <li key={index}>
            {item.subject}&emsp;&emsp;-&emsp;&emsp;{item.Hours} hrs
            <button className="plus" onClick={() => incrementHours(index)}>+</button>
            <button className="minus" onClick={() => decrementHours(index)}>-</button>
            <button className="complete" onClick={()=> removeSubject(index)}>Completed</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
