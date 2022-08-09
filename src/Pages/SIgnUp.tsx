import { useNavigate } from "react-router-dom";

export const SignUp = (()=>{
  const navigate = useNavigate();
  return(
  <div>
    <button onClick={()=>navigate({ pathname: "/toppage" })}>ボタン</button>
  </div>
  )
})