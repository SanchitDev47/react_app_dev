import React from 'react'
import Chartbar from './Chartbar';

export default function Chart(props) {
  return (
    <div className='chart'>
      {props.dataPoints.map(dataPoint => 
      <Chartbar 
      key={dataPoint.label}
      value={dataPoint.value} 
      maxValue={null}
      label={dataPoint.label}

      />)}
    </div>
    
  )
  }
