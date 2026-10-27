import { clerkMiddleware,  } from '@clerk/astro/server';



export const onRequest = clerkMiddleware((auth, ctx) => {
  const { userId, redirectToSignIn } = auth();
    
  if (!userId ) {
    return redirectToSignIn();
  }
});
