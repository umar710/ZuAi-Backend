const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const blogSchemaData = mongoose.model("blog", blogSchema);
module.exports = blogSchemaData;
