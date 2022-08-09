import { useNavigate } from "react-router-dom";

export const TopPage = (()=>{
  const navigate = useNavigate();
  return(
  <div>
    <button onClick={()=>navigate({ pathname: "/signin" })}>ボタン</button>
  </div>
  )
})