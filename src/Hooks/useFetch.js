import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export const useFetch = ( url ) => {

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async( ) => {

    setState({
      ...state,
      isLoading: true,
    });

    const resp = await fetch(url);
    const data = await resp.json();
    // console.log('data: ', data)

    setState({
      ...state,
      data,
      isLoading: false,
    });

  }

  useEffect(() => {
    getFetch();
  }, [ url ])
  
  return { state };
}
