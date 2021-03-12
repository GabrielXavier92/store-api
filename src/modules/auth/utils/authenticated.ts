function AuthenticatedMiddleware(_: any, next: any) {
  // Logic to check if the provided UserId belongs to Clinic Id
  // if (!context.injector.get(Auth).isLoggedIn()) {
  //   throw new Error('Not logged in');
  // }
  console.log('AuthenticatedMiddleware');

  return next();
}

export default AuthenticatedMiddleware;
