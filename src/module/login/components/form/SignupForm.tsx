/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../../apis/login.api";

const SignupForm = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    phone_number: "",
    confirm_password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleCreateUser();
  };

  const handleCreateUser = async () => {
    try {
      const createRequest = await signupUser({
        email: user.email,
        password: user.password,
        first_name: user.first_name,
        last_name: user.last_name,
        phone_number: user.phone_number,
      });
      alert("Successfully User Created");
      console.log(createRequest);
      navigate("/auth/login");
    } catch (error) {
      console.log(error);
      alert("User Not Created");

    }
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-2/3 border border-secondary rounded-md py-4 px-6">
        <div>
          <p className="font-semibold text-2xl text-center">
            Create your account
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="flex gap-8 items-center py-4">
              <div className="w-full">
                <div>
                  <p className="text-secondary py-1">First Name</p>
                  <input
                    className="border outline-none rounded-md w-full py-2 px-2"
                    type="text"
                    value={user.first_name}
                    onChange={(e) =>
                      setUser({ ...user, first_name: e.target.value })
                    }
                  />
                </div>

                <div className="py-3" />
                <div>
                  <p className="text-secondary py-1">Phone Number</p>
                  <div className="flex">
                  <input
                    className="border outline-none w-10 rounded-md py-2 px-2"
                    type="text"
                    value={"+1"}
                  />
                  <input
                    className="border outline-none rounded-md flex-1 w-full py-2 px-2"
                    type="text"
                    value={user.phone_number}
                    onChange={(e) =>
                      setUser({ ...user, phone_number: e.target.value })
                    }
                  />
                  </div>
                </div>
                <div className="py-3" />
                <div>
                  <p className="text-secondary py-1">Password</p>
                  <input
                    className="border outline-none rounded-md w-full py-2 px-2"
                    type="password"
                    value={user.password}
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="w-full">
                <div>
                  <p className="text-secondary py-1">Last Name</p>
                  <input
                    className="border outline-none rounded-md w-full py-2 px-2"
                    type="text"
                    value={user.last_name}
                    onChange={(e) =>
                      setUser({ ...user, last_name: e.target.value })
                    }
                  />
                </div>

                <div className="py-3" />
                <div>
                  <p className="text-secondary py-1">Email</p>
                  <input
                    className="border outline-none rounded-md w-full py-2 px-2"
                    type="email"
                    value={user.email}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                  />
                </div>

                <div className="py-3" />
                <div>
                  <p className="text-secondary py-1">Confirm Password</p>
                  <input
                    className="border outline-none rounded-md w-full py-2 px-2"
                    type="password"
                    value={user.confirm_password}
                    onChange={(e) =>
                      setUser({ ...user, confirm_password: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            {user.confirm_password.length !== 0 &&
              user.confirm_password !== user.password && (
                <span className="text-red-600 font-semibold">
                  Error Password Did not match
                </span>
              )}
            
            {
              user.password.length < 6 && (
                <span className="text-red-600 font-semibold">
                  Password Should be more than 6 digit
                </span>
              )}

            <div className="py-4">
              <button className="w-full text-center text-white bg-blue rounded-full py-3">
                Create Account
              </button>
            </div>
            <div className="flex items-center gap-3 py-2">
              <div className="w-full h-px bg-secondary" />
              <p className="text-secondary">OR</p>
              <div className="w-full h-px bg-secondary" />
            </div>
          </form>
          <div className="flex gap-8"></div>
          <div className="py-2">
            <p className="text-center">
              Have an account ?{" "}
              <Link to={"/auth/login"}>
                {" "}
                <span className="text-blue hover:cursor-pointer">
                  Login Instead
                </span>{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
