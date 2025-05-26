import express from "express";

const makeApp = () => {
  const app = express();
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
};
export default makeApp;
