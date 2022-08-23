import { useParams } from "react-router-dom"

export const Article = (() => {
  const { articleId } = useParams()

  return (
    <div style={{ backgroundColor: "red", height: "400px" }}>testtest</div>
  )
})