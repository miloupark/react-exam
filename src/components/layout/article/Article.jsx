function Article (props) {
  return (
    <article>
      <h2>{props.articletitle}</h2>
      <p>{props.articletext}</p>
    </article>
  )
};

export default Article;