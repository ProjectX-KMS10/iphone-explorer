import { useNavigate } from "react-router-dom";

export const PageNotFound = (()=>{
  const navigate = useNavigate();
  return(
  <div>
    <div style={{fontSize:'30px'}}>
    ページが見つからないよ！！！！！
    ログインページに戻ろう！！
    </div>
    <button onClick={()=>navigate({ pathname: "/signin" })}>ログインページへ</button>
  </div>
  )
})