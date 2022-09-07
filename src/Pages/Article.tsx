import { listData } from "data/data"
import { useParams } from "react-router-dom"

export const Article = (() => {
  const { articleId } = useParams()
  const fil = listData.filter((data) => {
    return data.id === Number(articleId)
  })

  return (
    <div style={{ backgroundColor: "red" }}>
      <div>
        <p style={{ display: "block", fontWeight: "bold", fontSize: "40px" }}>{fil[0].title}</p>
      </div>
      <div style={{ backgroundColor: "blue" }}>
        <p style={{ display: "block" }}>{fil[0].content}</p>
      </div>
    </div>
  )
})