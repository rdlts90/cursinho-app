import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  useTheme
} from '@mui/material';

const Social = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        p: 2,
        bgcolor: theme.palette.grey[100],
        fontFamily: theme.typography.fontFamily
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: theme.palette.primary.main, fontWeight: 600 }}
      >
        Avisos
      </Typography>

      <Card
        variant="outlined"
        sx={{
          mb: 3,
          borderColor: theme.palette.primary.light
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ color: theme.palette.secondary.main, fontWeight: 500 }}
          >
            Próximos Eventos
          </Typography>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  sx={{ bgcolor: theme.palette.secondary.light, color: '#fff' }}
                >
                  E
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Workshop de Matemática"
                secondary="20 de Maio - 14:00"
                primaryTypographyProps={{ fontWeight: 500 }}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  sx={{ bgcolor: theme.palette.secondary.light, color: '#fff' }}
                >
                  F
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Feira de Ciências"
                secondary="25 de Maio - 10:00"
                primaryTypographyProps={{ fontWeight: 500 }}
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>

      <Card
        variant="outlined"
        sx={{
          borderColor: theme.palette.primary.light
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ color: theme.palette.secondary.main, fontWeight: 500 }}
          >
            Últimos Avisos
          </Typography>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  src="https://source.unsplash.com/random?teacher"
                  sx={{ border: `2px solid ${theme.palette.primary.main}` }}
                />
              </ListItemAvatar>
              <ListItemText
                primary="João Silva"
                secondary="Não esqueçam do exercício para amanhã!"
                primaryTypographyProps={{ fontWeight: 500 }}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  src="https://source.unsplash.com/random?classroom"
                  sx={{ border: `2px solid ${theme.palette.primary.main}` }}
                />
              </ListItemAvatar>
              <ListItemText
                primary="Coordenação"
                secondary="Amanhã teremos aula prática no laboratório."
                primaryTypographyProps={{ fontWeight: 500 }}
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Social;
