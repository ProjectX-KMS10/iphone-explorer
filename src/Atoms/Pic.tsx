type props = {
  picture: string
}

export const Pic = (({ picture }: props) => {
  return (
    <img src={picture} style={{width:"50%", height:"100%"}} alt="アイコン" />
  )
})