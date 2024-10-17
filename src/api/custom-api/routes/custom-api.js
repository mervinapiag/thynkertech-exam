module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/custom-api/get-users',
     handler: 'custom-api.getUsersFromWPApi',
    },
  ],
};
