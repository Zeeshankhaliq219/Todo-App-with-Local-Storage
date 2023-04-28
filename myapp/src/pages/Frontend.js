import React, { useEffect, useState } from "react";

export default function Frontend() {
  let [modalOpen, setModalOpen] = useState(false);
  const [todos, setTodos] = useState([]);

  let initicialValues = {
    title: "",
    city: "",
    email: "",
    subject: "",
    message: "",
  };

  let [state, setState] = useState(initicialValues);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      const parsedTodos = JSON.parse(storedTodos);
      setTodos(parsedTodos);
    }
  }, []);

  let handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    state.id = Math.random(36).toString(22).slice(2);

    const newTodos = [...todos, state];

    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setModalOpen(false);
  };

  function handleDelete(id) {
    let newTodo = todos.filter((todo, i) => todo.id !== id);

    setTodos(newTodo);

    localStorage.setItem("todos", JSON.stringify(newTodo));
  }

  return (
    <>
      <div className="container-fluide position-relative">
        {/* Modal Start*/}

        {modalOpen ? (
          <div className="container">
            <div className="row d-flex justify-content-center mt-5">
              <div className="col-12 col-md-8 col-lg-9">
                <div className="modal-dialog bg-primary p-4 text-white">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title">ADD Your Tasks</h4>
                      <button
                        onClick={() => setModalOpen(!modalOpen)}
                        type="button"
                        className="btn-close text-black"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="row mt-3">
                        <div className="col-6">
                          <div>
                            <label className="form-label">Title</label>
                            <input
                              onChange={handleChange}
                              placeholder="Enter Your Title"
                              type="text"
                              name="title"
                              className="form-control"
                            />
                          </div>
                          <div className="mt-3">
                            <label className="form-label">Email</label>
                            <input
                              onChange={handleChange}
                              placeholder="Enter Your Email"
                              type="Email"
                              name="email"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-6">
                          <div>
                            <label className="form-label">City</label>
                            <input
                              onChange={handleChange}
                              placeholder="Enter Your City"
                              type="text"
                              name="city"
                              className="form-control"
                            />
                          </div>
                          <div className="mt-3">
                            <label className="form-label">Subject</label>
                            <input
                              onChange={handleChange}
                              placeholder="Enter Your Subject"
                              type="text"
                              name="subject"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="form-floating">
                          <label htmlFor="floatingTextarea">Message</label>
                          <textarea
                            onChange={handleChange}
                            className="form-control mt-5"
                            placeholder="Leave a comment here"
                            name="message"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer mt-3">
                      <button
                        onClick={() => setModalOpen(!modalOpen)}
                        type="button"
                        className="btn btn-secondary me-1"
                      >
                        Close
                      </button>
                      <button
                        onClick={handleSave}
                        type="button"
                        className="btn btn-success"
                      >
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="container">
              <div className="row mt-5">
                <div className="col">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">No</th>
                          <th scope="col">title</th>
                          <th scope="col">city</th>
                          <th scope="col">email</th>
                          <th scope="col">subject</th>
                          <th scope="col">message</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {todos.map((todo, key) => (
                          <>
                            <tr key={key}>
                              <th scope="row">{key + 1}</th>
                              <td>{todo.title}</td>
                              <td>{todo.city}</td>
                              <td>{todo.email}</td>
                              <td>{todo.subject}</td>
                              <td>{todo.message}</td>
                              <td>
                                <button
                                  onClick={() => handleDelete(todo.id)}
                                  className="ms-1 my-2 p-2 bg-error"
                                >
                                  <i className="fa-solid fa-trash text-error"></i>
                                </button>
                              </td>
                            </tr>
                          </>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {/* Modal End*/}
        <button
          onClick={() => setModalOpen(!modalOpen)}
          className="addButton fs-3 rounded-circle py-2 px-3"
        >
          <i className="fa-solid fa-pencil "></i>
        </button>
      </div>
    </>
  );
}
