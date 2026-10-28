import { useEffect, useState } from "react";
import api from "../services/api";

function Profile() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const response = await api.get("/profile");
      setProfile(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>👤 My Profile</h1>

      <hr />

      <h3>Name</h3>
      <p>{profile.name}</p>

      <h3>Email</h3>
      <p>{profile.email}</p>

      <h3>Phone</h3>
      <p>{profile.phone}</p>

      <h3>City</h3>
      <p>{profile.city}</p>
    </div>
  );
}

export default Profile;