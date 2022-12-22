//yang baru tidak perlu readline dan pertanayaan
const fs = require("fs");

//bikin folder data dulu
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

//cek file contacts.json ada atau engak
const dataPath = "./data/blogs.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

//ambil semua dataa di contact.json
const loadBlog = () => {
  const file = fs.readFileSync(dataPath, "utf-8");
  const blogs = JSON.parse(file);
  return blogs;
};

//cari cintact berdasarkan nama
const findBlog = (title) => {
  const blogs = loadBlog();

  const blog = blogs.find(
    (blog) => blog.title.toLowerCase() === title.toLowerCase()
  );

  return blog;
};

//menuliskan/menimpa file contacts json dg data baru
const saveBlogs = (blogs) => {
  fs.writeFileSync("data/blogs.json", JSON.stringify(blogs));
};

//menambahkan data contact baru
const addBlog = (blog) => {
  const blogs = loadBlog();
  blogs.push(blog);
  saveBlogs(blogs);
};

//cek nama duplikat
const cekDuplikat = (title) => {
  const blogs = loadBLog();
  return blogs.find((blog) => blog.title === title);
};

//hapus kontak
const deleteBlog = (title) => {
  const blogs = loadBlog();
  const filteredBlogs = blogs.filter((blog) => blog.title !== title);
  saveBlogs(filteredBlogs);
};

module.exports = {
  loadBlog,
  findBlog,
  addBlog,
  cekDuplikat,
  deleteBlog,
};
