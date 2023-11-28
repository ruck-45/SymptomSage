const serverSideAuth = (cred: { [key: string]: string | null }) => {
  let status = false;
  if (cred["email"] !== null && cred["password"] !== null) {
    // check for the authenticity of cred
    status = true;
  }
  return status;
};

export default serverSideAuth;
