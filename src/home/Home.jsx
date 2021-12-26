import { useEffect } from "react";
import { useRecoilValue } from "recoil";

import { authAtom, usersAtom } from "_state";
import { useUserActions } from "_actions";
import { PrivateRoute } from "_components/PrivateRoute";
import { Nav } from "react-bootstrap";

export { Home };

function Home() {
  const auth = useRecoilValue(authAtom);
  const users = useRecoilValue(usersAtom);
  const userActions = useUserActions();

  useEffect(() => {
    userActions.getAll();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Nav />
      <h1>Hi {auth?.firstName}!</h1>
      <p>You're logged in</p>
      <h3>Users from secure api end point:</h3>
      {users && (
        <ul>
          {users.map(
            (user) => (
              JSON.stringify(user),
              (
                <li key={user.id}>
                  {user.firstName} {user.lastName}
                </li>
              )
            )
          )}
        </ul>
      )}
    </>
  );
}