import { useSetRecoilState } from "recoil";

import { history, useFetchWrapper } from "_helpers";
import { authAtom, usersAtom } from "_state";
import { useNavigate } from "react-router-dom";

export { useUserActions };

function useUserActions() {
  let navigate = useNavigate();
  // const baseUrl = `${process.env.REACT_APP_API_URL}/users`;
  const baseUrl = `http://localhost:4000/users`;
  const fetchWrapper = useFetchWrapper();
  const setAuth = useSetRecoilState(authAtom);
  const setUsers = useSetRecoilState(usersAtom);

  return {
    login,
    logout,
    getAll,
  };

  function login(username, password) {
    return fetchWrapper
      .post(`${baseUrl}/authenticate`, { username, password })
      .then((user) => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem("user", JSON.stringify(user));
        setAuth(user);

        // get return url from location state or default to home page
        const { from } = history.location.state || { from: { pathname: "/" } };
        navigate(from);
      });
  }

  function logout() {
    // remove user from local storage, set auth state to null and redirect to login page
    localStorage.removeItem("user");
    setAuth(null);
    navigate("/login");
  }

  function getAll() {
    return fetchWrapper.get(baseUrl).then(setUsers);
  }
}
