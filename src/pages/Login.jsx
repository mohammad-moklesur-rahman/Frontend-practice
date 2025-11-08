
import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/Firebase/AuthContext.jsx";

const Login = () => {
const { loginWithEmailAndPassword, setUser } = useContext(AuthContext);

  const handelSingin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // * Sing Up with Email and Password
    loginWithEmailAndPassword(email, password)
    .then(res => {
      console.log(res.user)
      setUser(res.user)
      alert('Login in Successfully')
    })
    .catch(error => {
      console.log(error)
    })


  };

  return (
    <div className="flex justify-center mt-15">
      <form onSubmit={handelSingin}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Login</legend>

          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" />

          <button className="btn btn-neutral mt-4">Login</button>
          <p>Don't have an Account. Please <Link to='/singup' className="underline text-green-500">Sing Up</Link></p>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
