import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const channel = () => {
  const params = useParams();
  return (
    <Link to="/main">
      <button>Main</button>
    </Link>
  );
};

export default channel;
