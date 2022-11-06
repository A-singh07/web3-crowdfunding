import { useEffect } from 'react';
import { useRouter } from 'next/router';


const Admin = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/admin/funds')
  }, [])

  return (
    <div style={{ height: '50vh' }}>

    </div>
  )
}

export default Admin
