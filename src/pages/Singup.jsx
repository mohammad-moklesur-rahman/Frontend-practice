import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/Firebase/AuthContext";

const Singup = () => {
  const { singUpWithEmailAndPassWord } = useContext(AuthContext);

  const handelSingup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    // * Sing Up with Email and Password
    singUpWithEmailAndPassWord(email, password)
    .then(res => {
      console.log(res.user)
      alert('Sing Up successfully')
    })
    .catch(error => {
      console.log(error)
    })


  };

  return (
    <div className="flex justify-center mt-15">
      <form onSubmit={handelSingup}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Sing UP</legend>

          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Enter you name"
          />

          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />

          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />

          <button className="btn btn-neutral mt-4">Sing Up</button>
          <p>
            Already have an Account. Please{" "}
            <Link to="/login" className="underline text-green-500">
              Login
            </Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Singup;
