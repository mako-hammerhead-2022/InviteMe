import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
//nice component, I like the use of localStorage
//now it just needs a test or three
export default function Callback() {
  const { isAuthenticated, isLoading } = useAuth0()
  const navigate = useNavigate()
  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated) {
        const url = localStorage.getItem('redirect_url')
        if (url) {
          // console.log(url)
          navigate(url)
        } else {
          navigate('/')
        }
      } else {
        navigate('/')
      }
    }
  }, [isLoading, isAuthenticated])
  return null
}
