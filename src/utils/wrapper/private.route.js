import React from "react";
import { useNavigate } from "react-router-dom";

// import { get } from '../localStorage'
import { useSelector } from "react-redux";

export default function privateRoute({ children }) {
  const navigate = useNavigate();
  // const [status, setStatus]
  // console.log(req.authinfo)
  const userData = useSelector((state) => state.user.data.token);
  React.useEffect(() => {
    // cek apakah token sudah ada
    if (!userData)
      navigate("/login", {
        replace: true,
      });
  }, []);
  return <>{children}</>;
}
