const DoctorResolver = {
  Doctor: {
    specialties: (doctor: any) => {
      console.log('Specialty Doctor');
      console.log(doctor);
      return [{ id: 'a', name: 'specialidade' }];
    },
  },
};

export default DoctorResolver;
