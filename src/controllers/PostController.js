const { prisma } = require("../helpers/prisma");
const { postSchema } = require("../helpers/schema");
const getPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany();

    return res.json({
      success: true,
      message: "Get data posts success",
      data: posts,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Get data posts failed.",
    });
  }
};

const createPost = async (req, res) => {
  try {
    const parse = postSchema.safeParse(req.body);
    if (!parse.success) {
      const errorMessage = parse.error.issues.map(
        (err) => `${err.path} - ${err.message}`
      );

      return res.status(400).json({
        success: false,
        message: errorMessage,
        data: null,
      });
    }

    const post = await prisma.post.create({
      data: {
        author_name: parse.data.author_name,
        content: parse.data.content,
        title: parse.data.title,
        published: parse.data.published,
      },
    });

    return res.json({
      success: true,
      message: "Create post success",
      data: post,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Create data posts failed.",
    });
  }
};

const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const parse = postSchema.safeParse(req.body);
    if (!parse.success) {
      const errorMessage = parse.error.issues.map(
        (err) => `${err.path} - ${err.message}`
      );

      return res.status(400).json({
        success: false,
        message: errorMessage,
        data: null,
      });
    }

    const post = await prisma.post.update({
      where: {
        id: Number.parseInt(id),
      },

      data: {
        author_name: parse.data.author_name,
        content: parse.data.content,
        title: parse.data.title,
        published: parse.data.published,
      },
    });

    return res.json({
      success: true,
      message: "Update post success",
      data: post,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Update data posts failed.",
    });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const parse = postSchema.safeParse(req.body);
    if (!parse.success) {
      const errorMessage = parse.error.issues.map(
        (err) => `${err.path} - ${err.message}`
      );

      return res.status(400).json({
        success: false,
        message: errorMessage,
        data: null,
      });
    }

    const post = await prisma.post.delete({
      where: {
        id: Number.parseInt(id),
      },
    });

    return res.json({
      success: true,
      message: "Delete post success",
      data: post,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Delete data posts failed.",
    });
  }
};

module.exports = {
  getPosts,
  createPost,
  updatePost,
  deletePost,
};
