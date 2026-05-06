export default () => ({
  database: {
    environment: process.env.NODE_ENV || 'development',
    uri: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.CLUSTER}/${process.env.DATABASE}?retryWrites=true&w=majority`,
  },
});
