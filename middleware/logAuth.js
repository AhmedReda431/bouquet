export default function ({ $auth, redirect }) {
  // If the user is not authenticated

  if (!$auth.$storage.getUniversal("userData")) {
    return redirect(`/auth/user/login`);
  }

  
}