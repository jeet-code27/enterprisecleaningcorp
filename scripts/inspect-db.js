const fs = require('fs');
const mongoose = require('mongoose');

const env = fs.readFileSync('.env', 'utf8');
const uriMatch = env.match(/MONGODB_URI=(.*)/);
if (!uriMatch) {
  console.log('No MONGODB_URI found');
  process.exit(1);
}
const uri = uriMatch[1].trim().replace(/^['"]|['"]$/g, '');

async function run() {
  await mongoose.connect(uri);
  console.log('MongoDB Connected successfully!');
  const collections = await mongoose.connection.db.listCollections().toArray();
  console.log('Collections:', collections.map(c => c.name));
  
  const posts = await mongoose.connection.db.collection('posts').find({}, { projection: { title: 1, slug: 1, status: 1 } }).toArray();
  console.log('Posts:', posts);

  const authors = await mongoose.connection.db.collection('authors').find().toArray();
  console.log('Authors:', authors.map(a => ({ id: a._id, name: a.name })));

  const categories = await mongoose.connection.db.collection('categories').find().toArray();
  console.log('Categories:', categories.map(c => ({ id: c._id, name: c.name, slug: c.slug })));

  const tags = await mongoose.connection.db.collection('tags').find().toArray();
  console.log('Tags:', tags.map(t => ({ id: t._id, name: t.name, slug: t.slug })));

  await mongoose.disconnect();
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
