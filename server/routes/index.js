
// home route
const homeRoute = (app) => {
  app.get('/', (req, res) => {
    res.redirect('/api/v1');
  });
  
  app.get('/api/v1', (req, res) => {
    res.status(200).json({
      message: 'Welcome to Project Support',
    });
  });
};

export default homeRoute;