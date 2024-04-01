import React from 'react'
import './FooterContent.css'

function FooterContent({list, id}) {
  return (
        <ul>
            {list.map((value,index)=><li key={''+id+index}>{value}</li>)}
        </ul>      
  )
}

export default FooterContent
