// src/components/Aluno/StudentLayout.jsx
import React from 'react';
import { Outlet, useLocation, Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Tabs,
  Tab,
  Avatar,
  IconButton,
  useTheme,
  Typography
} from '@mui/material';
import Logo from '../../assets/logo_top.png';

const tabConfig = [
  { label: 'Home', path: '/aluno/social' },
  { label: 'Exercícios', path: '/aluno/exercicios' },
  { label: 'Aulas', path: '/aluno/aulas' }
];

const StudentLayout = () => {
  const theme = useTheme();
  const location = useLocation();
  const currentTab = tabConfig.findIndex(tab => tab.path === location.pathname);

  return (
    <Box sx={{ bgcolor: theme.palette.grey[50], minHeight: '100vh' }}>
      {/* Área de Preferências do Usuário */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          p: 1,
          bgcolor: theme.palette.background.paper,
          borderBottom: `1px solid ${theme.palette.divider}`
        }}
      >
       <Box component="img" src={Logo} alt="Ultra Study Logo" sx={{ width: 120, height: 'auto', mr: 2 }} />

        <IconButton component={RouterLink} to="/aluno/preferencias">
          <Avatar
            src="https://source.unsplash.com/random?face"
            sx={{ width: 32, height: 32, mr: 1 }}
          />
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            ⚙️
          </Typography>
        </IconButton>
      </Box>

      {/* Tabs de Navegação do Aluno */}
      <Tabs
        value={currentTab}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        sx={{ borderBottom: 1, borderColor: 'divider' }}
      >
        {tabConfig.map(tab => (
          <Tab
            key={tab.path}
            label={tab.label}
            component={RouterLink}
            to={tab.path}
          />
        ))}
      </Tabs>

      {/* Conteúdo da página */}
      <Box sx={{ p: 2 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default StudentLayout;
