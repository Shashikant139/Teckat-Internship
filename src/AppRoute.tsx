import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CreateStudent, HomePage, Student, UpdateStudent,StudentOutlet } from './pages'
import Test1 from './pages/Test1';


const AppRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="Test1" element={<Test1/>}/>
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