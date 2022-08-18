import { Pic } from "Atoms/Pic"
import { Title } from "Atoms/Title"
import { listData } from "data/data"

export const TopPage = (() => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", paddingTop: "140px" }}>
      {listData.map((data, index) => {
        return (
          <div style={{ width: "25%" }}>
            <div className="rainbow" key={index} style={{ display: "flex" }}>
              <Pic picture={data.url} />
              <Title title={data.name} />
            </div>
          </div>
        )
      })}
    </div>
  )
})