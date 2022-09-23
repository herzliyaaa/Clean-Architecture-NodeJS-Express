const multer = require("multer")
const fs = require("fs")
const path = require("path")

// Multer File upload settings
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const DIR = "src/uploads"
    if (!fs.existsSync(DIR)) {
      fs.mkdirSync(DIR)
    }
    cb(null, DIR)
  },

  filename: (req, file, cb) => {
    const fileName = `${file.fieldname}-${Date.now()}${path.extname(
      file.originalname
    )}`
    cb(null, fileName)
  }
})

// Multer Mime Type Validation
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype === "image/gif" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true)
    } else {
      cb(null, false)
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"))
    }
  }
})

module.exports = {
  upload
}
