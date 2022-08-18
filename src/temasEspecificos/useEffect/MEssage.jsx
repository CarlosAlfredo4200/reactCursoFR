import { useEffect } from "react"
export const MEssage = () => {

    useEffect(() => {
      console.log('componente montado');
      
      return () => {
          console.log('componente desmontado');
        
      }
    }, [])
    
  return (
    <>
     <h3>Usario ya existe</h3>
    </>
  )
}
