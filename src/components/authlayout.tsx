import { Outlet, Navigate } from "react-router-dom";

const authlayout = () => {
  const areQuestionsNotAnswered = false;
  return areQuestionsNotAnswered ? (
    <Navigate to="/questions" replace />
  ) : (
    <Outlet />
  );
};

export default authlayout;