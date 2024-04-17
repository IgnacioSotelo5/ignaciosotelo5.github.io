import { useEffect, useRef, useState } from "react";

export function useSearch() {
    const [search, setSearch] = useState('')
    const [error, setError] = useState<string | null>(null)
    const isFirstInput = useRef(false)    
    useEffect(()=>{
      if(search.match(/^\s*$/g)) return
        if (isFirstInput.current) {
          isFirstInput.current = search === ''
            return
          }
        if(search.match(/^\s*$/g)){
          setError('No se puede hacer una búsqueda vacia.')
          return
        }
        if(search.length < 3){
            setError('La búsqueda debe contener al menos 3 palabras.')
            return
        }
        if (search.match(/^\d+$/)) {
            setError('No se puede buscar una película con un número')
            return
          }
          
        setError(null)
    }, [search])

    return {search, setSearch, error}
}