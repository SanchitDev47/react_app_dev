import React from 'react'

export default function Chartbar(props) {
  let barFillHeight = '0%';
  if(props.max >0){
    barFillHeight = Math.round((props.value/ props.maxValue * 100) + '%')
  }
  return (
<div className='chart-bar'>
  <div className='chart-bar_inner'>{}</div>
    <div className='chart-bar_fill' style={{height: barFillHeight,backgroundColor:'red'}}>
  </div>
  <div className='chart-bar_label'>{props.lable}</div>
  </div>

  );
}
