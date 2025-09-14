// // import { useEffect, useState } from "react";
// // import axios from "axios";
// // import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// // const AdminDashBoard = () => {
// //   const [page, setPage] = useState("home");
// //   const [content, setContent] = useState({ cards: [] });

// //   useEffect(() => {
// //     axios.get(`http://localhost:8080/api/pages/${page}`)
// //       .then(res => setContent(res.data));
// //   }, [page]);

// //   const handleDragEnd = (result) => {
// //     if (!result.destination) return;
// //     const items = Array.from(content.cards);
// //     const [reordered] = items.splice(result.source.index, 1);
// //     items.splice(result.destination.index, 0, reordered);
// //     setContent({ ...content, cards: items });
// //   };

// //   const handleChange = (e, index=null, field=null) => {
// //     if (index !== null && field) {
// //       const updatedCards = [...content.cards];
// //       updatedCards[index][field] = e.target.value;
// //       setContent({ ...content, cards: updatedCards });
// //     } else {
// //       setContent({ ...content, [e.target.name]: e.target.value });
// //     }
// //   };

// //   const handleSave = () => {
// //     axios.post(`http://localhost:8080/api/pages/${page}`, content)
// //       .then(() => alert("Saved!"));
// //   };

// //   return (
// //     <div style={{ padding: "50px" }}>
// //       <h2>Admin Dashboard</h2>
// //       <select value={page} onChange={(e) => setPage(e.target.value)}>
// //         <option value="home">Home</option>
// //         <option value="about">About</option>
// //         <option value="projects">Projects</option>
// //       </select>

// //       <div>
// //         <label>Title:</label>
// //         <input name="title" value={content.title || ""} onChange={handleChange} />
// //       </div>

// //       <div>
// //         <label>Subtitle:</label>
// //         <input name="subtitle" value={content.subtitle || ""} onChange={handleChange} />
// //       </div>

// //       <div>
// //         <label>Background URL:</label>
// //         <input name="backgroundUrl" value={content.backgroundUrl || ""} onChange={handleChange} />
// //       </div>

// //       <h3>Cards:</h3>
// //       <DragDropContext onDragEnd={handleDragEnd}>
// //         <Droppable droppableId="cards">
// //           {(provided) => (
// //             <div {...provided.droppableProps} ref={provided.innerRef}>
// //               {content.cards?.map((card, index) => (
// //                 <Draggable key={index} draggableId={String(index)} index={index}>
// //                   {(provided) => (
// //                     <div
// //                       ref={provided.innerRef}
// //                       {...provided.draggableProps}
// //                       {...provided.dragHandleProps}
// //                       style={{
// //                         margin: "10px",
// //                         padding: "10px",
// //                         background: "#eee",
// //                         borderRadius: "8px",
// //                         ...provided.draggableProps.style
// //                       }}
// //                     >
// //                       <input
// //                         value={card.title}
// //                         onChange={(e) => handleChange(e, index, "title")}
// //                         placeholder="Card Title"
// //                       />
// //                       <input
// //                         value={card.description}
// //                         onChange={(e) => handleChange(e, index, "description")}
// //                         placeholder="Card Description"
// //                       />
// //                     </div>
// //                   )}
// //                 </Draggable>
// //               ))}
// //               {provided.placeholder}
// //             </div>
// //           )}
// //         </Droppable>
// //       </DragDropContext>

// //       <button onClick={handleSave} style={{ marginTop: "20px" }}>Save Changes</button>
// //     </div>
// //   );
// // };

// // export default AdminDashBoard;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState("home");
  const [content, setContent] = useState({ cards: [] });

  // fetch content for selected page
  useEffect(() => {
    axios.get(`http://localhost:8080/api/pages/${page}`)
      .then(res => setContent(res.data))
      .catch(() => setContent({ cards: [] }));
  }, [page]);

  // drag-and-drop handler
  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(content.cards);
    const [reordered] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reordered);
    setContent({ ...content, cards: items });
  };

  // handle input changes
  const handleChange = (e, index = null, field = null) => {
    if (index !== null && field) {
      const updatedCards = [...content.cards];
      updatedCards[index][field] = e.target.value;
      setContent({ ...content, cards: updatedCards });
    } else {
      setContent({ ...content, [e.target.name]: e.target.value });
    }
  };

  // save content
  const handleSave = () => {
    axios.post(`http://localhost:8080/api/pages/${page}`, content)
      .then(() => alert("Changes saved!"))
      .catch(() => alert("Error saving changes."));
  };

  // logout
  const handleLogout = () => {
    // you can also clear any authentication token here if implemented
    alert("Logging out...");
    navigate("/"); // redirect to home
  };

  return (
    <div style={{ padding: "50px" }}>
      <h2>Admin Dashboard</h2>
      <button onClick={handleLogout} style={{ float: "right", marginBottom: "20px" }}>
        Logout
      </button>

      <select value={page} onChange={(e) => setPage(e.target.value)}>
        <option value="home">Home</option>
        <option value="about">About</option>
        <option value="projects">Projects</option>
      </select>

      <div>
        <label>Title:</label>
        <input name="title" value={content.title || ""} onChange={handleChange} />
      </div>

      <div>
        <label>Subtitle:</label>
        <input name="subtitle" value={content.subtitle || ""} onChange={handleChange} />
      </div>

      <div>
        <label>Background URL:</label>
        <input name="backgroundUrl" value={content.backgroundUrl || ""} onChange={handleChange} />
      </div>

      <h3>Cards:</h3>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="cards">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {content.cards?.map((card, index) => (
                <Draggable key={index} draggableId={String(index)} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        margin: "10px",
                        padding: "10px",
                        background: "#eee",
                        borderRadius: "8px",
                        ...provided.draggableProps.style
                      }}
                    >
                      <input
                        value={card.title}
                        onChange={(e) => handleChange(e, index, "title")}
                        placeholder="Card Title"
                      />
                      <input
                        value={card.description}
                        onChange={(e) => handleChange(e, index, "description")}
                        placeholder="Card Description"
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <button onClick={handleSave} style={{ marginTop: "20px" }}>Save Changes</button>
    </div>
  );
};
export default AdminDashboard;
