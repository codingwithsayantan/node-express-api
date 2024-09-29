exports.welcomeUser = async (req, res) => {
  //const { name } = req.body;
  const name = req.body.name ? req.body.name : "Guest";

  // Access custom headers
  const source = req.headers["x-source"];
  console.log("Source: ", source);

  if (source && source != 1) {
    return res.send({
      success: false,
      message: `This API is accessable from App only!`,
    });
  }

  return res.send({
    success: true,
    message: `Hi ${name}, Welcome to Coding With Sayantan!`,
  });
};
