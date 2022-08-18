type Props = {
  title: string
}

export const Title = (({ title }: Props) => {
  return (
    <p style={{ width: "50%", height: "100%", marginLeft: "15px", fontSize: "18px", fontWeight: "bold", textAlign:"center" }}>{title}</p>
  )
})