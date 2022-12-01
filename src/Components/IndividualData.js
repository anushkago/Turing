// import React from 'react'


// export const IndividualData = ({IndividualExcelData}) => {
//   return (
//     <>
//         <th>{IndividualExcelData.Id}</th>
//         <th>{IndividualExcelData.Marks}</th>
//         <th>{IndividualExcelData.Name}</th>
//     </>
//   )
// }


import React from 'react'

export const IndividualData = ({individualExcelData}) => {
    return (
        <>
         <th>{individualExcelData.Id}</th>
         <th>{individualExcelData.Name}</th>
         <th>{individualExcelData.Marks}</th>
        </>
    )
}