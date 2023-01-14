import React, { useContext } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  console.log(user);

  if (loading) {
    return (
      <div className="h-1/2 w-full flex justify-center items-center mt-20">
        <ThreeCircles
          height="150"
          width="150"
          color="#3075FF"
          wrapperStyle={{}}
          wrapperclassName=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoute;
