import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CreateStudent, HomePage, Student, UpdateStudent,StudentOutlet } from './pages'
import Test1 from './pages/Test1';
import Test2 from './Test2';
import Test3 from './pages/Test3';
import Test4 from './Test4';
import { Test5 } from './Test5';
import { Test6 } from './Test6';
import Connect from './Connect';
import Testing from './Testing';


const AppRoute: React.FC = () => {
  return (
    <Routes>

      <Route path="test1" element={<Test1/>}/>
      <Route path="test2" element={<Test2/>}/>
      <Route path='test3' element={<Test3/>}/>
      <Route path='test4' element={<Test4/>}/>
      <Route path='test5' element={<Test5/>}/>
      <Route path='test6' element={<Test6/>}/>
      <Route path='connect' element={<Connect/>}/>
      <Route path='testing' element={<Testing/>}/>
      <Route path="" element={<HomePage />} />
      <Route path="student" element={<StudentOutlet />}>
      <Route path="" element={<Student />} />
      <Route path="create-student" element={<CreateStudent />} />
      <Route path="update-student/:studentID" element={<UpdateStudent />} />     
      
    </Route>
    </Routes>
  );
};

export default AppRoute