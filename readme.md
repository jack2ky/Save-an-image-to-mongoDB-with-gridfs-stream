
### This script reads a file from a directory and stores it into mongoDB
This way you can have persistant images (large files)

`mongoose.connect("mongodb://localhost/newDb");`
if the database newDB is not in mongo it will be created when the image is saved.

When you save the file 2 collections are created for you.  `fs.chunks` and `fs.files`

The images are stored in `fs.files`

This works. Just do `nmp install`.

Tutorial
