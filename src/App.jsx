// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';

import Turmas from './components/Admin/Turmas';
import Alunos from './components/Admin/Alunos';
import StudentLayout from './components/Aluno/StudentLayout';
import Social from './components/Aluno/Social';
import Exercicios from './components/Aluno/Exercicios';
import Aulas from './components/Aluno/Aulas';

function App() {
  return (
    <Router>
      <Container maxWidth="md" sx={{ py: 2 }}>
        <Routes>
          {/* Rotas Admin */}
          <Route path="/admin/turmas" element={<Turmas />} />
          <Route path="/admin/alunos" element={<Alunos />} />

          {/* Rotas Aluno com Layout global */}
          <Route path="/aluno" element={<StudentLayout />}>
            <Route path="social" element={<Social />} />
            <Route path="exercicios" element={<Exercicios />} />
            <Route path="aulas" element={<Aulas />} />
            {/* REDIRECIONA /aluno para /aluno/social */}
            <Route index element={<Social />} />
          </Route>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
