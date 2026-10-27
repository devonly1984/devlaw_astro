import {clerkMiddleware} from '@clerk/astro/server';


export const onRequest = clerkMiddleware((auth) => {
    const {redirectToSignIn,userId} = auth()
    if (!userId) {
        return redirectToSignIn()
    }
    


})