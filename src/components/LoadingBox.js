import React from 'react'

export default function LoadingBox() {
    return (
        <div style={styles}>
            <i className='fa fa-spinner fa-spin'></i>  Loading Fridge Items...
        </div>
    )
}

const styles = {
    width:'100%', 
    height:'100%', 
    display: 'flex', 
    justifyContent:'center',
    alignItems:'center',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '19px',
    letterSpacing: '-0.03em',
    color: '#003A59'
}
