function AuthorInfo(props) {
  console.log("the author of the review is showing as:", props.author.name)
    return (
      <>
      <h1>{props.author.name}</h1>
      </>
    )
  }
  
  export default AuthorInfo