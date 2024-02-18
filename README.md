This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install project dependencies:

```bash
npm i
```

Then run the development server (please check important note as well):

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Important note

In order to use the app, you have to create a token using this [API](https://api.calendar.codelitt.dev/docs#/Tokens/create) and then change your dev srcipt inside your package.json file adding an environment variable named `API_TOKEN` with your value, so your dev script should look something like:

```bash
API_TOKEN={your value goes here} next dev
```

## See it live!

You can see this project up and running  [here](https://demo-calendar-application.vercel.app/).

## Shared thoughts

* I would like to unify all the styles in a simple way, that is, everything on tailwind or everything on css modules, just pick one method and remove all dependencies or logic that is not needed based on your selection.
* I would like to invest more time on unit test for async and server components and also on client components with new latest hook `useFormStatus`.
* I would like to add a state management library, probably something simple in configuration like [zustand](https://zustand-demo.pmnd.rs/) to manage simple state in the app, here, based on a great video I watched about relying the state of your app in your URL to avoid even the use of useState, I depend a lot on the selected day on the URL path (error handling included), but no useState was used at all!
