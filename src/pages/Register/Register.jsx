import { Link } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {

    const { createUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        // create User
        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => console.log(error))

    }

    return (
        <div>
            <Navbar></Navbar>


            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-slate-300 mx-auto justify-center mt-10">
                <form onSubmit={handleRegister}
                    className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                    </div>

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
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="pb-4 text-center">Already have an account? <Link className="font-bold text-blue-600" to={'/login'}>Login</Link></p>
            </div>

        </div>
    );
};

export default Register;