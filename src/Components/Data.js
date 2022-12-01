// import React from 'react'
// import {IndividualData} from './IndividualData'

// export const Data = ({data}) => {
//   return data.map((individualExcelData) => (
//     <tr key = {individualExcelData.Id}>
//         <IndividualData individualExcelData = {individualExcelData} />
//     </tr>
//   ))
// }

import React, { useState } from 'react'
import Pagination from 'react-bootstrap/Pagination';

import { IndividualData } from './IndividualData'

export const Data = ({excelData}) => {


  return excelData.map((individualExcelData)=>(
    <>
        <tbody>
      <tr key={individualExcelData.Id}>
          <IndividualData individualExcelData={individualExcelData}/>
      </tr>   
      
    </tbody>


    </>

        
  ))
  };
  


    // return excelData.slice(currentPage * pageSize, (currentPage + 1) * pageSize).map((individualExcelData)=>(
    //   <tbody>
    //     <tr key={individualExcelData.Id}>
    //         <IndividualData individualExcelData={individualExcelData}/>
    //     </tr>   
        
    //   </tbody>
           
    // ))
