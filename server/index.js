const express = require("express");
const sequelize = require("./db");
const Product = require("./models/product");
const User = require("./models/user");
const productRoutes = require("./routes/product");
const userRoutes = require("./routes/user");

const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.get("/", (req, res) => {
  res.send("Hello world");
});

User.hasMany(Product);

sequelize
  // .sync({ force: true })
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  });
