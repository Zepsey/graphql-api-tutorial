module.exports = async (_, {}, {models}) => {
  return await models.Podcast.find();
};


