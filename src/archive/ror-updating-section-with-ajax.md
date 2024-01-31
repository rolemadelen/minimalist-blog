---
title: "[RoR] Updating a section with AJAX"
date: "2022-01-01 11:00:00"
lang: 'en'
---

I was implementing a search feature for my [toy-project](https://github.com/euisblue/til-archive).
The logic itself was simple enough.

```rb
search_value = FROM_THE_SEARCH_INPUT
posts = Post.all.select{ |post| post.include? search_value }
```

From here, however, I didin't know how to render the page to show filtered `posts`. I can redirect the page but 
who wants to use a page that refreshes every time when you search something?

I figured **AJAX** (asynchronous javascript and xml) is what I need.

---

First, I'm going to modify my `search.js` file in `/app/javascript/packs/` to call ajax.

```js
/* file: /app/javascript/packs/search.js */

document.addEventListener("turbolinks:load", function() {
  $(".search-input").on('change', (e) => {
    const param = (e.target.value).trimStart().trimEnd();
    const URL = "/index/" + encodeURIComponent(param);

    $.ajax({
      url: URL,
      success: function(data) {
        console.log('success')
      error: function() {
        console.log('failure')
      }
    });
  })
});
```

`param` contains the value from the search input, and I'm going to send this value as a query parameter to the route `/index/:search`. Then from the controller I can use `params[:search]` to access this value.

---

We need to tell our controller to respond to javascript with the partial that we're going to update the section.
Since I'll be updating a section from the *index*, I'll modify the `index` action.

```rb
def index
  @posts = Post.all.order(id: desc)

  if params[:search]
    @posts = Post.all.order(id: :desc).select{ |post| post.title.downcase.include? params[:search].downcase}
  end

  respond_to do |format|
    format.js { render layout: false }
    format.html { render 'index' }
  end
end
```

Line #4 determines whether the page should display all posts or only those from the search results.

---

I need to create `{action_name}.js.erb` (`index.js.erb` in my case) in the view folder where my partial exists.

```erb
$('ul[role="list"]').html("<%= j (render partial: 'post/index', :locals => {:posts => @posts}) %>")
```

---

And voilà!

![Ajax rendering demo](/images/ror/ajax-demo.gif)

Now whenever I search for a value, it will make an AJAX call to `/index/:search` with a search value, and the controller will call `index.js.erb` to render the specific section of a page without refreshing it.

## Reference
- [Update a section of your page using AJAX in Rails 6](https://robertfaldo.medium.com/update-a-section-of-your-page-using-ajax-in-rails-6-4e8099c1aec8)