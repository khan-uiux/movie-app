import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

      // form state
  
      const [userName, setUserName] = useState('')
      const [password, setPassword] = useState('')

      const navigate = useNavigate()

      const handleSubmit = (e) => {
        e.preventDefault()

        if (!userName && !password) {
            alert('please Enter Valid Username & Password')
        }
        else {
            navigate('/')
        }
    }

  return (
    <section className="login w-full h-[100vh] flex justify-center items-center p-[50px]">
        <div className="login-box w-[40%] h-[400px] bg-[#010208] rounded-[12px] p-[30px]">
            <div className="heading text-center mb-[30px]">
                <h3 className="heading text-3xl font-semibold text-white tracking-wider">Sign In</h3>
            </div>
            <form onSubmit={handleSubmit}>
                <label className='text-white text-[15px]'>Email & Phone</label>
                <input 
                  type="text" 
                  placeholder='Enter Name' 
                  value={userName} 
                  onChange={(e) => setUserName(e.target.value)} 
                  className='border border-white rounded-[10px] w-full h-[44px] text-[16px] py-[5px] px-[10px] text-white my-[12px]' />

                <label className='text-white text-[15px]'>Password</label>
                <input 
                  type="password" 
                  placeholder='Enter Name' 
                  value={password} onChange={(e) => setPassword(e.target.value)} 
                  className='border border-white rounded-[10px] w-full h-[44px] text-[16px] py-[5px] px-[10px] text-white mt-[12px]' />

                <div className="login-btn text-center">
                  <button className='text-[17px] px-[30px] py-[10px] rounded-[10px] bg-white mt-[30px] mx-auto cursor-pointer'>Login</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Login