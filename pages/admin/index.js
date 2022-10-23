import { useEffect } from 'react';
import { useRouter } from 'next/router';


const Admin = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/admin/funds')
  }, [])

  return (
    <div>

    </div>
  )
}

export default Admin
