import { Navigate, Route, Routes } from "react-router-dom";
import { SignIn } from "Pages/SignIn";
import { SignUp } from "Pages/SIgnUp";
import { TopPage } from "Pages/TopPage";
import { PageNotFound } from "Pages/PageNotFound";

export const MainLayout = () => {
  return (
      <Routes>
        <Route index element={<Navigate to="/signin" />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="topPage" element={<TopPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
  );
};