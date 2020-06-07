const { ApolloError } = require("apollo-server");

module.exports = async (_, {id}, {models}) => {
  
  const deletePodcast = await models.Podcast.deleteOne({_id: id})

  if(deletePodcast.deletedCount) return{id: id}

  else throw new ApolloError(`Failed to delete address.`);

};