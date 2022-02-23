export const getUserToken = (auth) => {
  const patienToken = auth && auth.patient ? auth.patient.token : "";
  const doctorToken = auth && auth.doctor ? auth.doctor.token : "";

  return patienToken || doctorToken;
};
