import express from "express"
import db from "./models/index.js"

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})