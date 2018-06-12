const api = "http://localhost:3001"
let token = localStorage.token
if (!token)
token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
'Accept': 'application/json',
'Authorization': token,
}

fetch(url, {
    credentials: 'include', //pass cookies, for authentication
    method: 'post',
    headers,
    body: form
  });

  //What should form  be? 




// For reference, here is the form so far

  <form>
                            
  <label htmlFor='title'>Post Title</label>
  <input type='text' id='title' name='title'/><br/>
  <label htmlFor='body'>Post Body</label>
  <textarea id='body' name='body'/><br/>
  <label htmlFor='author'>Your name</label>
  <input type='text' id='author' name='author'/><br/>
  <label htmlFor='category'>Category</label>
  <select id='category' name='category'>
  {this.state.categories.map((category) => (
      <option key={category} className={`category-${category}`} value={category}>{category}</option>
  ))}
  </select><br/>
  <input name="id" type="hidden" value={Math.random().toString(36).substr(-8)}/>
  <button 
      className='icon-button'
      type="submit"
      onClick={this.addPost}>
  Add Post</button>
</form>


//   POST /posts
//       USAGE:
//         Add a new post

//       PARAMS:
//         id - UUID should be fine, but any unique id will work
//         timestamp - timestamp in whatever format you like, you can use Date.now() if you like
//         title - String
//         body - String
//         author - String
//         category: Any of the categories listed in categories.js. 