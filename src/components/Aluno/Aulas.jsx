// src/components/Aluno/Aulas.jsx
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

const Aulas = () => {
  const theme = useTheme();

  const exampleLessons = [
    {
      title: 'Vídeo-aula: Introdução ao Cálculo',
      duration: '15 min',
    },
    {
      title: 'Aula ao vivo: Física – Leis de Newton',
      duration: '30 min',
    },
  ];

  return (
    <Box sx={{ p: 2 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: theme.palette.primary.main, fontWeight: 600 }}
      >
        Aulas
      </Typography>

      {exampleLessons.map((lesson, idx) => (
        <Card
          key={idx}
          variant="outlined"
          sx={{ mb: 3, borderColor: theme.palette.primary.light }}
        >
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 500 }}>
              {lesson.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Duração: {lesson.duration}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained" color="primary">
              Assistir
            </Button>
            <Button size="small" color="secondary">
              Material
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default Aulas;
