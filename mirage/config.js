export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.4.x/shorthands/
  */
  this.get('/authors/1', function() {
    return {
      data: {
        id: 1,
        type: 'author',
        attributes: {
          name: 'John Smith'
        },
        relationships: {
          posts: {
            data: [
              { type: 'post', id: 1 },
              { type: 'post', id: 2 },
              { type: 'post', id: 3 },
              { type: 'post', id: 4 },
            ]
          }
        }
      }
    }
  });
  this.get('/posts', function() {
    return {
      data: [
        { id: 1, type: 'post', attributes: { title: 'Post 1'} },
        { id: 2, type: 'post', attributes: { title: 'Post 2'} },
        { id: 3, type: 'post', attributes: { title: 'Post 3'} },
        { id: 4, type: 'post', attributes: { title: 'Post 4'} },
      ]
    }
  })
}
