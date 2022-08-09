import { useNavigate } from "react-router-dom";

export const SignIn = (()=>{
  const navigate = useNavigate();
  return(
  <div>
    <button onClick={()=>navigate({ pathname: "/signup" })}>サインアップへ</button>
  </div>
  )
})