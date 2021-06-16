const postsFilter = (allPosts, postInfo) => {
  const filtered = [...allPosts];
  const spliceIDs = [];

  if (postInfo.data.type !== "") {
    allPosts.forEach((post) => {
      if (post.type !== postInfo.data.type) spliceIDs.push(post.postId);
    });
  }

  if (postInfo.data.ageFrom !== null) {
    const ageFrom = parseInt(postInfo.data.ageFrom);
    allPosts.forEach((post) => {
      if (post.ageFrom < ageFrom) spliceIDs.push(post.postId);
    });
  }

  if (postInfo.data.ageTo !== null) {
    const ageTo = parseInt(postInfo.data.ageTo);

    allPosts.forEach((post) => {
      if (post.ageTo > ageTo) spliceIDs.push(post.postId);
    });
  }

  if (postInfo.data.genders.length > 0) {
    allPosts.forEach((post) => {
      let genderIncluded = false;
      postInfo.data.genders.forEach((gender) => {
        if (post.genders.includes(gender)) genderIncluded = true;
      });

      if (genderIncluded === false) spliceIDs.push(post.postId);
    });
  }

  if (postInfo.data.country !== "") {
    allPosts.forEach((post) => {
      if (post.country !== postInfo.data.country) spliceIDs.push(post.postId);
    });
  }

  if (postInfo.data.cities.length > 0) {
    allPosts.forEach((post) => {
      let cityIncluded = false;
      postInfo.data.cities.forEach((city) => {
        if (post.cities.includes(city)) cityIncluded = true;
      });

      if (cityIncluded === false) spliceIDs.push(post.postId);
    });
  }

  spliceIDs.forEach((id) => {
    const index = filtered.findIndex((post) => post.postId === id);
    if (index > -1) filtered.splice(index, 1);
  });

  return filtered;
};

export { postsFilter };
