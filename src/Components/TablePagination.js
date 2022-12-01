TablePagination.propTypes = {
    pagesCount: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    handlePageClick: PropTypes.func.isRequired,
    handlePreviousClick: PropTypes.func.isRequired,
    handleNextClick: PropTypes.func.isRequired
   };