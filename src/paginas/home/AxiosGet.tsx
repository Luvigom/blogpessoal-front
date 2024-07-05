import axios from 'axios'
import React, { useEffect, useState } from 'react'

function AxiosGet() {

  
  const [usuarios, setUsuario] = useState([])

  
  useEffect(() => {
    
    axios.get<any[]>('https://jsonplaceholder.typicode.com/users')
    
      .then(response => {
      console.log(response.data)
      setUsuario(response.data)
    })
  }, [])

  return (
    <div>
      {}
      {usuarios.map(usuario => (
        <p>{usuario.name}</p>
      ))}
    </div>
  )
}

export default AxiosGet