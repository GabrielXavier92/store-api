const AuthorizatedMiddleware = (role: string) => (_: any, next: any) => {
  // Logic to check if user has the roles to do some action

  console.log(role);
  // console.log(root);
  // console.log(args);

  return next();
};

export default AuthorizatedMiddleware;
