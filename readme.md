
### This script reads a file from the server or locally and stores it into mongoDB
This what you can have persistant images (large files)

`mongoose.connect("mongodb://localhost/newDb");`
if the database newDB is not in mongo it will be created when the image is saved.

When you save the file to collections are created for you `fs.chunks` and `fs.files`

The images are stored in `fs.files`

This works just do nmp install.

Tutorial