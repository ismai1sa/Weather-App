function Button({title,color,onClick}){
  return ( 
      <button className='btn' style={{backgorundColor:color}} onclick={onClick}>{title}</button>
  )
}
export default Button
