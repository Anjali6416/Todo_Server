function createArrayOfSize(n) {
  return new Array(n).fill(0);
}

function Pagintation({ currentPage, totalPages, changePage }) {
  // let pages=createArrayOfSize(totalPages)
  let buttonArr = createArrayOfSize(totalPages).map((ele, i) => {
    return (
      <button
        key={i}
        disabled={i + 1 == currentPage}
        onClick={() => changePage(i + 1)}
        style={i + 1 == currentPage ? { border: "1px solid red" } : {}}
      
      >
        {i + 1}
      </button>
    );
  });

  return (
    <div
      style={{
        padding: "5px",
        margin:"20px",
      }}
    >
      {/* <h1>page</h1> */}
      {buttonArr}
    </div>
  );
}
export default Pagintation;
