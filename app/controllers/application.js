import Controller from '@ember/controller';
import { get, observer } from '@ember/object';
import { filter } from '@ember/object/computed';

export default Controller.extend({
  /**
   * @property {Enumerable|null} availablePosts list of successfully resolved posts
   */
  availablePosts: null,

  /**
   * @property {Enumerable} resolvedPosts subset of async items that are resolved
   */
  resolvedPosts: filter('model.posts.@each.isLoaded', function(item) {
    return get(item, 'isLoaded') !== false
  }),

  /**
   * @function onPostsLoaded observer to run when all async items have resolved
   * @private
   */
  onPostsLoaded: observer('resolvedPosts.length', 'model.posts.length', function() {
    const resolvedPosts = this.get('resolvedPosts');

    if (get(resolvedPosts, 'length') !== this.get('model.posts.length')) {
      return;
    }

    // set the availablePosts to the subset of fulfilled items that were not rejected
    this.set('availablePosts', resolvedPosts.filter(item => get(item, 'isRejected') !== true));
  })
});
