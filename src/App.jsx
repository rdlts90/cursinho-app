// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
          {/* Redireciona a raiz para /aluno/social */}
          <Route path="/" element={<Navigate to="/aluno/social" replace />} />

          {/* Rotas Admin */}
          <Route path="/admin/turmas" element={<Turmas />} />
          <Route path="/admin/alunos" element={<Alunos />} />

          {/* Rotas Aluno com Layout global */}
          <Route path="/aluno" element={<StudentLayout />}>
            {/* Tornar /aluno também redirecionar para /aluno/social */}
            <Route index element={<Navigate to="social" replace />} />
            <Route path="social" element={<Social />} />
            <Route path="exercicios" element={<Exercicios />} />
            <Route path="aulas" element={<Aulas />} />
          </Route>

          {/* Qualquer outra rota não reconhecida pode voltar pra home */}
          <Route path="*" element={<Navigate to="/aluno/social" replace />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
