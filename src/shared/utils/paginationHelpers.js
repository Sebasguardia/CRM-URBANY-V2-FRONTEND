// Calcular páginas a mostrar (con elipsis)
export const getPageNumbers = (currentPage, totalPages) => {
  const pages = [];
  const showEllipsis = totalPages > 7;

  if (!showEllipsis) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  pages.push(1);

  if (currentPage > 3) {
    pages.push('...');
  }

  const start = Math.max(2, currentPage - 1);
  const end = Math.min(totalPages - 1, currentPage + 1);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (currentPage < totalPages - 2) {
    pages.push('...');
  }

  pages.push(totalPages);
  return pages;
};

// Offset para queries
export const getQueryOffset = (page, limit) => {
  return (page - 1) * limit;
};

// Meta información
export const getPaginationMeta = (totalItems, currentPage, itemsPerPage) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const hasNextPage = currentPage < totalPages;
  const hasPrevPage = currentPage > 1;
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return {
    totalPages,
    hasNextPage,
    hasPrevPage,
    startItem,
    endItem,
    totalItems
  };
};