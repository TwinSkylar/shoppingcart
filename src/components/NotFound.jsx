import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";

  /*
    Purpose:  A webpage that displays when the user enters an invalid link.  Automatically redirects to the previous page after 3 seconds
  */
const NotFound = ()=> {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
          navigate(-1);
        }, 3000);
      }, [navigate]);
    return (
      <div>
        <h2>404: Page Not Found</h2>
        <p>There are no pokemon in this region</p>
      </div>
    );
  }

  export default NotFound;