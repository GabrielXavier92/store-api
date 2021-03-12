const QueryResolver = {
  Query: {
    doctor() {
      return {
        id: 'doctorId',
        name: 'doctorName',
      };
    },
  },
};
export default QueryResolver;
