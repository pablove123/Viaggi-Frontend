function AuthorInfo(props) {
  console.log("author info", props.author.name)
    return (
      <>
      <h1>{props.author.name}</h1>
      </>
    )
  }
  
  export default AuthorInfo