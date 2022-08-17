import { listData } from "data/data"

export const TopPage = (() => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {listData.map((data, index) => {
        return (
          <div style={{ width: "25%" }}>
            <div className="rainbow" key={index}>{data.name}</div>
          </div>
        )
      })}
    </div>
  )
})