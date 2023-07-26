import { useEffect, useState } from "react";
import useAuth from "../../hooks/UseAuth";

export const Profile = () => {
  const { profile } = useAuth();
  const [userProfile, setUserProfile] = useState(null);
  const token = sessionStorage.getItem("DrinkToken");

  useEffect(() => {
    profile(token)
    .then(({user}) => {
      setUserProfile(user);
    })
    .catch(error => console.log(error))

  }, []);
  
  return (
    userProfile && (
      <div>
        <h1>Welcome {userProfile.name}!</h1>
      </div>
    )
  );
};
