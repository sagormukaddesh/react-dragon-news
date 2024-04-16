import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        // user Login
        signIn(email, password)
            .then(res => {
                console.log(res.user);

                // navigate after login 
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => console.log(error))


    }
    return (
        <div>
            <Navbar></Navbar>


            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-slate-300 mx-auto justify-center mt-10">
                <form onSubmit={handleLogin}
                    className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="pb-4 text-center">don not have any account? <Link className="font-bold text-blue-600" to={'/register'}>Register Now</Link></p>
            </div>

        </div>
    );
};

export default Login;