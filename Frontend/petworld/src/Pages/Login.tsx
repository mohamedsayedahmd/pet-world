// "use client"
import React,{useState} from 'react'

const Login:React.FC = () => {
  const [postTitle,setPostTitle] = useState(1);

  const changeTitle = () => {
    setPostTitle(34);
  }

  return (
    <div>{postTitle}</div>
  )
}

export default Login