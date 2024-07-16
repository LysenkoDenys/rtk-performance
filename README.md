# Learn RTK CRUD increase performance

### https://www.youtube.com/watch?v=GdOgYQzGexY

<p>We are fetching the data of posts from an API</p>
<p>We are making the CRUD</p>

<p>This lesson is about optimizing performance. By only passing down the post id instead of a full post object, we can prevent an unnecessary render. The useSelector inside the PostExcerpt uses a memoized selector and therefore, only re-renders if the post data has changed</p>

<p>Sample:</p>

![1654](https://github.com/user-attachments/assets/b9226335-9ba4-4275-857f-83fe510aab8f)

<h5>Used API`s and libraries:</h5>
<ul>
<li>https://www.npmjs.com/package/date-fns</li>
<li>https://www.npmjs.com/package/axios</li>
<li>https://www.npmjs.com/package/nanoid</li>
</ul>
