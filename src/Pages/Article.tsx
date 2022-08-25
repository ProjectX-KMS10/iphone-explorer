import { listData } from "data/data"
import { useParams } from "react-router-dom"

export const Article = (() => {
  const { articleId } = useParams()
  const fil = listData.filter((data) => {
    return data.id === Number(articleId)
  })
  console.log(fil, "fil")

  return (
    <div style={{ backgroundColor: "red", height: "400px" }}>
      <p style={{ display: "block", position: "absolute", color: "blue", top: "50%", left: "50%" }}>{fil[0].title}</p>
    </div>
  )
})