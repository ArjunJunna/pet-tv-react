const filterBySearch = (videoData, searchFor) => {
  if (searchFor === '') {
    return videoData;
  } else {
    return videoData.filter(video =>
      video.title.toLowerCase().includes(searchFor.toLowerCase())
    );
  }
};

const filteredCategoryData = (videoData, selectedCategory) => {
  if (selectedCategory === 'All') {
    return videoData;
  } else {
    return videoData.filter(video => selectedCategory === video.categoryName);
  }
};

export {filterBySearch,filteredCategoryData};