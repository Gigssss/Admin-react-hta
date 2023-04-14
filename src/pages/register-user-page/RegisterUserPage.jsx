import React from 'react'
import DropdownDepartemen from '../../components/dropdown-select/DropdownDepartemen'
import DropdownPosition from '../../components/dropdown-select/DropdownPosition'

const RegisterUserPage = () => {
  return (
    <card>
      <form className='container-register-user'>
          <h1>Register</h1>
          <p>Create your account</p>
            <input type="text" name="fullname" className="colom-name" placeholder="FullName" />
            <input type="text" name="email" className="colom-email" placeholder="Email" />
            
            <div className='colom-justify'>
              <div className="dropdown-departemen"><DropdownDepartemen /></div>
              <div className="dropdown-position"><DropdownPosition /></div>
            </div>
          
            <input type="text" name="role" className="colom-role" placeholder="Role" />
            <input type="text" name="password" className="colom-password" placeholder="Password" />
            <button className="btn-regis">Register</button>
      </form>
    </card>
  )
}

export default RegisterUserPage