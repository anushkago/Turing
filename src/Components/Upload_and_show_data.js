// import React, { useState } from 'react'
// import { Button, Col, Container, Row, Table } from 'reactstrap'
// import {Data} from './Data'
// import * as XLSX from 'xlsx'


// function Upload_and_show_data() {
//   const [data, setData] = useState(null);

//   const [file, setFile] = useState(null);
//   const [fileError, setfileError] = useState(null);

//   // console.log(file);
//   const fileType = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']
//   //handle file
//   const handleFile = (e) => { 
//     let selectedFile = e.target.files[0];

//     if(selectedFile) {
//       // console.log(selectedFile.type);
//       if(selectedFile && fileType.includes(selectedFile.type)){
//         let reader  = new FileReader();
//         reader.readAsArrayBuffer(selectedFile);
//         reader.onload=(e)=>{
//           setfileError(null);
//           setFile(e.target.result);
//         }
//       }else{
//         setfileError('Please select correct file format');
//         setFile(null);
//       }
//     }else{
//       console.log("file not selected");
//     }
//    }

//    const handleSubmit = (e) => { 
//       e.preventDefault();
//       if(file !== null){
//         const workBook  = XLSX.read(file, {type: 'buffer'});
//         const workSheetName = workBook.SheetNames[0];
//         const workSheet = workBook.Sheets[workSheetName];
//         const workSheetData = XLSX.utils.sheet_to_json(workSheet);
//         setData(workSheetData);
//       }else{
//         setData(null);
//       }
//     }
//   return (
//     <div className='container'>
//       <div className='form'>
//       <form className='form-group' autoComplete='off' onSubmit={handleSubmit}>
//         <label><h5>
//           Upload Excel file
//         </h5>
//         <br/>
//         <input type = "file" className='form-control' required onChange={handleFile}></input>
//         {fileError && <div className='text-danger'>Please Select Correct File Format</div>}
//         <Button color="primary" type = 'submit'>
//           Upload data!!
//         </Button>
//         </label>
        
        
//       </form>
//       </div>

//       <Container fluid>
//         <Row>
//           <Col>
//           {data === null  && <>No File Selected</>}
//           {data !== null && (
//             <Table className = 'table-bordered' responsive bordered>
//             <thead>
//               <tr>
//                 <th>S. No</th>
//                 <th>Marks</th>
//                 <th>Name</th>
//               </tr>
//             </thead>
//             <tbody>
//               <Data data = {data}/>
//             </tbody>
//           </Table>
//           )}
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default Upload_and_show_data

import {useState} from 'react'
import { Button, Col, Container, Row, Table } from 'reactstrap'
import Pagination from 'react-bootstrap/Pagination';
import {Data} from './Data'
import * as XLSX from 'xlsx'

function Upload_and_show_data() {
  
  // on change states
  const [excelFile, setExcelFile]=useState(null);
  const [excelFileError, setExcelFileError]=useState(null);  
 
  // submit
  const [excelData, setExcelData]=useState(null);
  // it will contain array of objects

  // handle File
  const fileType=['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel', 'text/csv', 'application/json'];
  // console.log();
  const handleFile = (e)=>{
    let selectedFile = e.target.files[0];
    if(selectedFile){
      console.log(selectedFile.type);
      if(selectedFile&&fileType.includes(selectedFile.type)){
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload=(e)=>{
          setExcelFileError(null);
          setExcelFile(e.target.result);
        } 
      }
      else{
        setExcelFileError('Please select only excel file types');
        setExcelFile(null);
      }
    }
    else{
      console.log('plz select your file');
    }
  }

  // submit function
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(excelFile!==null){
      const workbook = XLSX.read(excelFile,{type:'buffer'});
      const worksheetName = workbook.SheetNames[0];
      const worksheet=workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(data);
    }
    else{
      setExcelData(null);
    }
  }
  
  return (
    <div className="container">

      {/* upload file section */}
      <div className='form'>
        <form className='form-group' autoComplete="off"
        onSubmit={handleSubmit}>
          <label><h5>Upload Excel file</h5></label>
          <br></br>
          <input type='file' className='form-control'
          onChange={handleFile} required></input>                  
          {excelFileError&&<div className='text-danger'
          style={{marginTop:5+'px'}}>{excelFileError}</div>}
          <button type='submit' className='btn btn-success'
          style={{marginTop:5+'px'}}>Submit</button>
        </form>
      </div>

      <br></br>
      <hr></hr>

      {/* view file section */}
      <h5>View Excel file</h5>
      <div className='viewer'>
        {excelData===null&&<>No file selected</>}
        {excelData!==null&&(
          <div className='table-responsive'>
            <Table className = 'table-bordered' responsive bordered>
              <thead>
                <tr>
                  <th scope='col'>ID</th>
                  <th scope='col'>Name</th>
                  <th scope='col'>Marks</th>               
                </tr>
              </thead>
              
                <Data excelData={excelData}/>
              
              
            </Table>   

            <Pagination>
<Pagination.First />
<Pagination.Prev />
<Pagination.Item>{1}</Pagination.Item>
<Pagination.Ellipsis />

<Pagination.Item>{10}</Pagination.Item>
<Pagination.Item>{11}</Pagination.Item>
<Pagination.Item active>{12}</Pagination.Item>
<Pagination.Item>{13}</Pagination.Item>
<Pagination.Item disabled>{14}</Pagination.Item>

<Pagination.Ellipsis />
<Pagination.Item>{20}</Pagination.Item>
<Pagination.Next />
<Pagination.Last />
</Pagination>         
          </div>
        )}       
      </div>

    </div>
  );
}

export default Upload_and_show_data;