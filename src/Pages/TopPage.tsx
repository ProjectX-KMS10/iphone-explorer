import { Pic } from "Atoms/Pic"
import { Title } from "Atoms/Title"
import { listData } from "data/data"
import { Link } from "react-router-dom"

export const TopPage = (() => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", paddingTop: "140px" }}>
      {listData.map((data, index) => {
        return (
          <div style={{ width: "25%" }}>
            <Link to={`${data.id}`}>
              <div className="rainbow" key={index} style={{ display: "flex" }}>
                <Pic picture={data.url} />
                <Title title={data.name} />
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
})