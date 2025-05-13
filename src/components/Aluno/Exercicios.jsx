// src/components/Aluno/Exercicios.jsx
import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  useTheme
} from '@mui/material';

const Exercicios = () => {
  const theme = useTheme();

  const exampleExercises = [
    {
      title: 'Exercício de Álgebra',
      description: 'Resolva as equações do 1 ao 5 do capítulo 3.',
    },
    {
      title: 'Quiz de História',
      description: '10 perguntas sobre a Revolução Industrial.',
    },
  ];

  return (
    <Box sx={{ p: 2 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: theme.palette.primary.main, fontWeight: 600 }}
      >
        Exercícios
      </Typography>

      {exampleExercises.map((ex, idx) => (
        <Card
          key={idx}
          variant="outlined"
          sx={{ mb: 3, borderColor: theme.palette.primary.light }}
        >
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 500 }}>
              {ex.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {ex.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained" color="primary">
              Iniciar
            </Button>
            <Button size="small" color="secondary">
              Detalhes
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default Exercicios;
